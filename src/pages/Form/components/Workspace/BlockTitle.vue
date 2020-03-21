<template>
  <p style="position: relative" class="item-title">
    <span class="dot" v-if="$attrs.data.request">*</span>
    {{ $attrs.index-helpTextLength }}. {{ $attrs.data.title }}
    <span v-if="$attrs.data.unit">（{{$attrs.data.unit}}）</span>
  </p>
</template>

<script>
  import { type } from '../../const';
  import { some } from 'lodash';

  export default {
    name: 'BlockTitle',
    computed: {
      helpTextLength: vm => {
        // 用途：算出添加当前块之前添加过几个helpText块。
        // 原因：因为helpText不显示也不计算索引。所以当前的正确索引应该减去之前的helpText块数量。
        // 注意：只计算该块之前的helpText块数量。
        let length = 0;
        const uuidList = Object.keys(vm.$attrs.schema);
        some(uuidList, key => {
          if (vm.$attrs.schema && vm.$attrs.schema[key] && vm.$attrs.schema[key].componentType === type.HELP_TEXT) {
            // 该块是helpText块
            length++;
          }
          return key === vm.$attrs.uuid; // 当循坏到该块跳出循坏
        });
        return length;
      },
    },
  };
</script>

<style scoped lang="scss">
  @import "../../styles";
</style>
