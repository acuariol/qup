<template>
  <div>
    <tips type="center" v-if="list.length===0"></tips>
    <draggable
        :list="list"
        @change="change"
        @end="dragEnd"
        @start="drag=true"
        group="block"
        v-bind:="dragOptions"
        style="min-height: 300px"
    >
      <transition-group type="transition" :name="!drag ? 'flip-list' : null">
        <v-card
            flat
            v-for="(value, uuid, index) in schema"
            :key="uuid"
            class="block"
            :class="uuid===editUuid?'isSelect':'normal'"
            @click.native="handleEditBlock(value)"
        >
          <BlockTitle
              v-if="value.componentType !== type.HELP_TEXT"
              :data="value"
              :index="index+1"
              :schema="schema"
              :uuid="uuid"
          />
          <BlockOption
              v-if="uuid===editUuid"
              @deleteBlock="handleDeleteBlock(uuid,index+1)"
              @copyBlock="handleCopyBlock(uuid,index+1)"
          />

          <radio
              v-if="value.componentType === type.RADIO"
              :data="value"

          />
          <multipleRadio
              v-if="value.componentType === type.MULTIPLE_RADIO"
              :data="value"

          />

          <answer
              v-if="value.componentType === type.ANSWER"
              :data="value"

          />

          <rate
              v-if="value.componentType === type.RATE"
              :data="value"
          />

          <number
              v-if="value.componentType === type.NUMBER"
              :data="value"
          />

          <AddressBlock
              v-if="value.componentType === type.ADDRESS"
              :data="value"
          />

          <helpText
              v-if="value.componentType === type.HELP_TEXT"
              :data="value"
          />

          <date
              v-if="value.componentType === type.DATE"
              :data="value"
          />
        </v-card>
      </transition-group>
    </draggable>

  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  import radio from './block/radio';
  import answer from './block/answer';
  import rate from './block/rate';
  import multipleRadio from './block/multipleRadio';
  import number from './block/number';
  import AddressBlock from './block/addressBlock';
  import helpText from './block/helpText';
  import date from './block/date';
  import tips from './tips';
  import BlockOption from './BlockOption';
  import BlockTitle from './BlockTitle';
  import { type } from '../../const';

  export default {
    name: 'ContentPanel',
    data() {
      return {
        type,
        movedUuid: undefined,
        drag: false,
      };
    },
    components: {
      radio,
      tips,
      answer,
      rate,
      multipleRadio,
      BlockOption,
      helpText,
      BlockTitle,
      number,
      AddressBlock,
      date,
      draggable,
    },
    props: {
      schema: {
        type: Object,
        default: () => Object.assign({}),
      },
      editUuid: {
        type: String,
        default: '',
      },
      handleEditBlock: {
        type: Function,
        default: () => {
        },
      },
      handleDeleteBlock: {
        type: Function,
        default: () => {
        },
      },
      handleCopyBlock: {
        type: Function,
        default: () => {
        },
      },
      onDragEnd: {
        type: Function,
        default: () => {
        },
      },
      onDragAdded: {
        type: Function,
        default: () => {
        },
      },
    },

    computed: {
      list() {
        return Object.keys((this.schema || {})).map(key => this.schema[key]);
      },

      dragOptions() {
        return {
          animation: 200,
          ghostClass: 'ghost',
        };
      },
    },
    methods: {
      change(evt) {

        if (evt.added) {
          const { element, newIndex } = evt.added;
          this.onDragAdded(element, newIndex);
        }

        if (evt.moved) {
          const { element } = evt.moved;
          this.movedUuid = element.uuid;
        }

        console.log(evt);

      },
      dragEnd() {
        console.log('dragEnd');
        let newSchema = {};
        (this.list || []).forEach(item => {
          newSchema = { ...newSchema, [item.uuid]: item };
        });
        this.drag = false;
        this.onDragEnd(newSchema, this.movedUuid);
      },
    },
  };
</script>

<style scoped lang="scss">
  @import '../../styles';
</style>
