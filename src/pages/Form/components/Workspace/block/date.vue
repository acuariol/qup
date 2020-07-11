<template>
  <div class="date">

    <v-row justify="start" no-gutters>

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
              readonly
              dense
              v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker no-title scrollable locale="zh-cn">
          <v-spacer></v-spacer>
          <v-btn text color="primary">取消</v-btn>
          <v-btn text color="primary">确定</v-btn>
        </v-date-picker>
      </v-menu>


      <template v-if="$attrs.data.dateType==='datetime'">
        <v-menu
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
                class="mx-4"
                outlined
                single-line
                hide-details
                dense
                label="请选择时间"
                readonly
                v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
              format="24hr"
              full-width
          />
        </v-menu>
      </template>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'date',
    data() {
      return {
        picker: null,
        disabled: false,
        readonly: false,
        landscape: false,
        ampmInTitle: false,
        useSeconds: false,
        format: 'ampm',
        fullWidth: false,
        noTitle: false,
        scrollable: false,
      };
    },
  };
</script>

<style scoped lang="scss">
  @import '../../../styles';
</style>
