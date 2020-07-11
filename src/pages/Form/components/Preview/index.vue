<template>

  <div class="preview-container">

    <el-row
        type="flex"
        justify="center"

    >
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="10">

        <template v-if="render">
          <v-card tile flat class="ma-0 pa-0">
            <div class="cover" v-bind:style="{backgroundImage:`url(${require('@/assets/form-cover.png')})`}"></div>

            <div class="preview-main">
              <h3 class="title">{{previewData.name}}</h3>
              <p class="subtitle-1 pb-6">{{previewData.description}}</p>

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

                    <v-radio-group v-model="previewData.schema[uuid].userInput">
                      <v-radio
                          v-for="item in value.options" :key="item.id"
                          :label="item.value"
                          :value="item.value"
                      />
                    </v-radio-group>

                  </template>

                  <template v-if="value.componentType===type.MULTIPLE_RADIO">

                    <v-checkbox
                        v-for="item in value.options"
                        :key="item.id"
                        v-model="previewData.schema[uuid].userInput"
                        :label="item.value"
                        :value="item.value"
                        hide-details
                    />
                  </template>

                  <template v-if="value.componentType===type.ANSWER">

                    <v-textarea
                        clearable
                        v-model="previewData.schema[uuid].userInput"
                        label="请输入"
                        outlined
                        single-line
                        hide-details
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

                    <v-rating
                        v-model="previewData.schema[uuid].userInput"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$ratingFull"
                        :half-increments="value.allowHalf"
                        hover
                    ></v-rating>

                  </template>

                  <template v-if="value.componentType===type.NUMBER">

                    <v-text-field
                        clearable
                        :label="previewData.schema[uuid].placeholder"
                        outlined
                        single-line
                        v-model="previewData.schema[uuid].userInput"
                        hide-details
                    />

                  </template>

                  <template v-if="value.componentType===type.DATE">
                    <v-menu
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                            style="max-width: 500px"
                            outlined
                            single-line
                            hide-details
                            label="选择日期"
                            dense
                            v-model="previewData.schema[uuid].userInput"
                            v-on="on"
                        />
                      </template>
                      <v-date-picker  v-model="previewData.schema[uuid].userInput" no-title scrollable locale="zh-cn">
                      </v-date-picker>
                    </v-menu>

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
          </v-card>
        </template>

        <template v-else>
          <v-card class="pa-6 ma-4">
            <v-card-text class="title text-center">
              无数据
            </v-card-text>
          </v-card>
        </template>
      </el-col>

    </el-row>


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
