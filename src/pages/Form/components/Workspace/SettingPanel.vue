<template>
  <div class="setting-panel-inner-box">
    <p class="setting-panel-title">{{value.label}}</p>
    <v-divider />
    <div class="main">

      <div v-for="(_, uuid) in $attrs.schema" :key="uuid">
        <RateOption
          v-if="value.componentType===type.RATE&&uuid=== $attrs.editUuid"
          :value="value"
          @change="update"
        />
        <RadioOption
          v-if="value.componentType===type.RADIO &&uuid=== $attrs.editUuid"
          :value="value"
          @change="update"
        />

        <RadioOption
          v-if=" value.componentType===type.MULTIPLE_RADIO&&uuid=== $attrs.editUuid"
          :value="value"
          @change="update"
        />

        <AnswerOption
          v-if=" value.componentType===type.ANSWER&&uuid=== $attrs.editUuid"
          :value="value"
          @change="update"
        />

        <NumberOption
          v-if=" value.componentType===type.NUMBER&&uuid=== $attrs.editUuid"
          :value="value"
          @change="update"
        />

        <AddressOption
          v-if="value.componentType===type.ADDRESS&&uuid=== $attrs.editUuid"
          :value="value"
          @change="update"
        />

        <HelpTextOption
          v-if=" value.componentType===type.HELP_TEXT&&uuid=== $attrs.editUuid"
          :value="value"
          @change="update"
        />

        <DateOption
          v-if=" value.componentType===type.DATE&&uuid=== $attrs.editUuid"
          :value="value"
          @change="update"
        />
      </div>

    </div>
  </div>
</template>

<script>
  import RateOption from './option/rate';
  import RadioOption from './option/radio';
  import AnswerOption from './option/answer';
  import NumberOption from './option/number';
  import AddressOption from './option/AddressOption';
  import HelpTextOption from './option/helpText';
  import DateOption from './option/date';

  import { type } from '../../const';

  export default {
    name: 'SettingPanel',
    components: { RateOption, RadioOption, AnswerOption, NumberOption, AddressOption, HelpTextOption ,DateOption},
    props: {
      value: {
        type: Object,
        default: () => Object.assign({}),
      },
    },
    data() {
      return { type };
    },
    methods: {
      update(val) {
        this.$emit('input', { ...this.value, ...val});
      },

    },
  };
</script>

<style scoped lang="scss">
  @import '../../styles';
</style>
