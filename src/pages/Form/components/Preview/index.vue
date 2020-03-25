<template>
  <div class="preview-container">
    <el-row
      type="flex"
      justify="center"
      v-if="render"
    >
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="10" class="col-bg">
        <div class="cover" v-bind:style="{backgroundImage:`url(${require('@/assets/form-cover.png')})`}"></div>

        <div class="preview-main">
          <h3 class="title">{{previewData.name}}</h3>
          <p class="subtitle">{{previewData.description}}</p>

          <div v-for="(value, uuid, index) in previewData.schema" :key="uuid" class="item">
            <BlockTitle
              v-if="value.componentType !== type.HELP_TEXT"
              :data="value"
              :index="index+1"
              :schema="previewData.schema"
              :uuid="uuid"
            />

            <el-form ref="previewForm" :model="previewData.schema" label-width="80px">
              <template v-if="value.componentType===type.RADIO">
                <el-radio-group v-model="previewData.schema[uuid].userInput">
                  <el-radio class="bl option-item" v-for="item in value.options" :key="item.id" :label="item.value">
                    {{item.value}}
                  </el-radio>
                </el-radio-group>
              </template>

              <template v-if="value.componentType===type.MULTIPLE_RADIO">
                <el-checkbox-group v-model="previewData.schema[uuid].userInput">
                  <el-checkbox
                    class="bl option-item"
                    v-for="item in value.options"
                    :key="item.id"
                    :label="item.value"
                  />
                </el-checkbox-group>
              </template>

              <template v-if="value.componentType===type.ANSWER">
                <el-input
                  size="small"
                  v-model="previewData.schema[uuid].userInput"
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 6}"
                />
              </template>

              <template v-if="value.componentType===type.HELP_TEXT">
                <div class="help-text" :class="{'link':value.link}">
                <span>
                  {{value.content}}
                </span>
                </div>
              </template>

              <template v-if="value.componentType===type.RATE">
                <el-rate
                  v-model="previewData.schema[uuid].userInput"
                  :max="value.scoring"
                  :allow-half="value.allowHalf"
                />
              </template>

              <template v-if="value.componentType===type.NUMBER">
                <el-input
                  size="small"
                  v-model="previewData.schema[uuid].userInput"
                  :placeholder="previewData.schema[uuid].placeholder"
                />
              </template>

              <template v-if="value.componentType===type.DATE">
                <el-date-picker
                  size="small"
                  v-model="previewData.schema[uuid].userInput"
                  :type="value.dateType"
                  :value-format="value.format"
                  :placeholder="value.placeholder"
                />
              </template>

              <template v-if="value.componentType===type.ADDRESS">
                <el-row type="flex" justify="start" :gutter="16">
                  <el-col :xs="24" :sm="16" :md="24" :lg="20" :xl="20">
                    <div style="display: flex">
                      <el-cascader
                        style="flex-grow: 1"
                        size="small"
                        v-model="previewData.schema[uuid].userInput.primary"
                        :options="options"
                      />
                      <el-select
                        v-if="value.format==='detail'"
                        style="width: 240px;margin-left:16px"
                        size="small"
                        v-model="previewData.schema[uuid].userInput.street"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in areaOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </div>
                  </el-col>
                </el-row>

                <el-row type="flex" justify="start" :gutter="16" v-if="value.format==='detail'">
                  <el-col :xs="24" :sm="16" :md="24" :lg="20" :xl="20">
                    <el-input
                      style="margin-right:16px"
                      size="small"
                      v-model="previewData.schema[uuid].userInput.detail"
                      placeholder="请填写详细地址"
                    />
                  </el-col>
                </el-row>
              </template>
            </el-form>
          </div>
        </div>
      </el-col>

    </el-row>


    <template v-else>
      <div class="no-data">
        无数据</div>
    </template>

  </div>
</template>

<script>

  import { type } from '../../const';
  import BlockTitle from '../Workspace/BlockTitle';
  import options from './ssq.json';

  import { createNamespacedHelpers } from 'vuex';

  const { mapState } = createNamespacedHelpers('form');


  export default {
    name: 'preview',
    components: { BlockTitle },
    computed: {
      ...mapState(['previewData']),
      render: _this => _this.previewData && typeof _this.previewData.schema === 'object' && Object.keys(_this.previewData.schema).length,
    },
    data() {
      return {
        type,
        group: [],
        rate: null,

        options,
        areaOptions: [{
          value: '预览1',
          label: '预览1',
        }, {
          value: '预览2',
          label: '预览2',
        }, {
          value: '预览3',
          label: '预览3',
        }],
      };
    },
    mounted() {

    },
  };
</script>

<style scoped lang="scss">
  @import "./styles";

  .no-data {
    display: flex;
    justify-content: center;
    padding: 26px 0;
    font-size: 1.2rem;
    background: #Fff;
    margin: 32px 16px 16px;
    color: #616161;
  }
</style>
