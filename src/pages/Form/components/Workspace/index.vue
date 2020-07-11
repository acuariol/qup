<template>
  <div class="container-wp">
    <div class="control-panel">
      <p class="control-panel-title">添加控件</p>
      <ControlPanel :click="handleAddBlock" />
    </div>
    <v-divider
        inset
        vertical
    />

    <div class="content-panel">

     <div style="padding: 0 0 44px">
       <v-text-field
           clearable
           class="input"
           label="点此添加问卷标题"
           outlined
           single-line
           v-model="editData.name"
           hide-details
       />

       <v-text-field
           clearable
           class="input description-input"
           label="点此添加问卷描述"
           outlined
           single-line
           v-model="editData.description"
           hide-details
       />
     </div>


      <BlockArea
        :handleDeleteBlock="handleDeleteBlock"
        :handleCopyBlock="handleCopyBlock"
        :handleEditBlock="handleEditBlock"
        :editUuid="editUuid"
        :schema="schema"
        :on-drag-end="handleDragEnd"
        :on-drag-added="handleAddBlock"
      />
    </div>

    <v-divider
        inset
        vertical
    />
    <div class="setting-panel" :class="{t:!editUuid}">
      <tips type="right" v-if="!editUuid"></tips>
      <SettingPanel v-if="editUuid" v-model="schema[editUuid]" :schema="schema" :editUuid="editUuid" />
    </div>
  </div>
</template>

<script>
  import { indexOf, cloneDeep } from 'lodash';
  import { v4 as uuidV4 } from 'uuid';
  import ControlPanel from './ControlPanel';
  import SettingPanel from './SettingPanel';
  import tips from './tips';
  import BlockArea from './BlockArea';
  import { type } from '../../const';

  import { createNamespacedHelpers } from 'vuex';

  const { mapState, mapMutations } = createNamespacedHelpers('form');

  export default {
    name: 'Workspace',
    components: { ControlPanel, BlockArea, SettingPanel, tips },
    computed: {
      ...mapState(['editData', 'schema']),
      schemaLength: _this => Object.keys(_this.schema).length,
    },
    data() {
      return {
        type,
        editUuid: '',
      };
    },

    methods: {
      ...mapMutations(['setState']),
      handleAddBlock(type, index, copyBlockData) {
        // 参数 index 当是拖拽插入或复制时才会有值, copyBlockData是复制操作时才有个值

        const uuid = uuidV4();

        if (typeof index === 'number') { // 拖拽插入或复制插入
          const uuids = Object.keys(this.schema);
          uuids.splice(index, 0, uuid); // 插入一个新的uuid

          let newSchema = {};

          if (copyBlockData) { // 复制的情况
            (uuids || []).forEach(key => {
              copyBlockData.uuid = uuid;
              newSchema[key] = this.schema[key] ? this.schema[key] : copyBlockData;
            });
          } else {   // 拖拽的情况
            (uuids || []).forEach(key => {
              const { componentType, label } = type;
              newSchema[key] = this.schema[key] ?
                this.schema[key] : this.initData(key, componentType, label);
            });

          }

          this.setState({ schema: newSchema });

        } else {   // 正常插入
          const { componentType, label } = type;

          this.setState({
            schema: {
              ...this.schema,
              [uuid]: this.initData(uuid, componentType, label),
            },
          });

        }

        this.editUuid = uuid;

      },
      handleEditBlock(arg) {
        this.editUuid = arg.uuid;
      },
      handleDeleteBlock(uuid, index) {

        const nextUuid = this.getNextUuid(uuid, this.schema, index === this.schemaLength);
        const temp = { ...this.schema };
        delete temp[uuid];

        this.setState({ schema: temp });

        this.editUuid = nextUuid;

      },
      handleCopyBlock(uuid, index) {

        const copyData = cloneDeep(this.schema[uuid]);
        delete copyData.uuid;
        this.handleAddBlock(undefined, index, copyData);
      },
      getNextUuid(uuid, schema, isLast) {
        const uuidList = Object.keys(schema); // 获取到所有的uuid
        const index = indexOf(uuidList, uuid);
        if (isLast) return uuidList[index - 1]; // 从最后一个开始删除的情况 当index=0时返回undefined,不影响
        return uuidList[index + 1];
      },
      handleDragEnd(newSchema, uuid) {
        this.setState({ schema: newSchema });
        this.editUuid = uuid;
      },
      initData(uuid, componentType, label) {
        switch (componentType) {
          case type.RADIO:
            return {
              uuid,
              componentType,
              label,
              title: '单选题',
              options: this.creatOptions(),
              request: false,
              userInput: null, // 表单渲染后填写使用
              visible:true
            };
          case type.MULTIPLE_RADIO:
            return {
              uuid,
              componentType,
              label,
              title: '多选题',
              options: this.creatOptions(),
              request: false,
              userInput: [],
              visible:true
            };
          case type.ANSWER:
            return {
              uuid,
              componentType,
              label,
              title: '回答题',
              request: false,
              placeholder: '请输入',
              userInput: '',
              visible:true
            };
          case type.RATE:
            return {
              uuid,
              componentType,
              label,
              title: '请进行评分',
              request: false,
              scoring: 5, // 评分制 5分或10分制
              allowHalf: false, // 是否允许半选
              userInput: null,
              visible:true
            };
          case type.NUMBER:
            return {
              uuid,
              componentType,
              label,
              title: '数字',
              request: false,
              placeholder: '请输入',
              unit: '', // 单位
              userInput: null,
              visible:true
            };
          case type.ADDRESS:
            return {
              uuid,
              componentType,
              label,
              title: '省市区',
              request: false,
              format: 'normal', // 格式： normal 省市区， detail 省市区-街道
              userInput: { primary: [], street: null, detail: '' }, // 分别对应 省市区，街道，详细地址
              visible:true
            };
          case type.HELP_TEXT:
            return {
              uuid,
              componentType,
              label,
              content: '说明文字',
              link: '',
              visible:true
            };
          case type.DATE:
            return {
              uuid,
              componentType,
              label,
              title: '日期',
              dateType: 'date', // date 选择日期, datetime 选择日期时间
              format: 'YYYY-MM-DD',
              placeholder: '选择日期',
              userInput: null,
              visible:true
            };
          default :
            return {};
        }
      },
      creatOptions() {
        return [
          {
            id: uuidV4(),
            value: '选项1',
            relevance:[]
          },
          {
            id: uuidV4(),
            value: '选项2',
            relevance:[]
          },
          {
            id: uuidV4(),
            value: '选项3',
            relevance:[]
          },
        ];
      },

    },

  };
</script>

<style scoped lang="scss">
  @import '../../styles';
</style>
