<template>
  <div>
    <v-row
        align="start"
        justify="center"
        class="mt-12"
    >
      <v-col cols="4">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
          <v-menu
              ref="startTime-menu"
              v-model="startTimeMenu"
              :close-on-content-click="false"
              :return-value.sync="editData.startTime"
              transition="scale-transition"
              offset-y
              min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                  outlined
                  :rules="startTimeRules"
                  v-model="editData.startTime"
                  label="开始时间"
                  readonly
                  v-on="on"
                  required
              />
            </template>
            <v-date-picker v-model="editData.startTime" no-title scrollable locale="zh-cn">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="startTimeMenu = false">取消</v-btn>
              <v-btn text color="primary" @click="$refs['startTime-menu'].save(editData.startTime)">确定</v-btn>
            </v-date-picker>
          </v-menu>


          <v-menu
              ref="endTime-menu"
              v-model="endTimeMenu"
              :close-on-content-click="false"
              :return-value.sync="editData.endTime"
              transition="scale-transition"
              offset-y
              min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                  outlined
                  :rules="endTimeRules"
                  v-model="editData.endTime"
                  label="结束时间"
                  readonly
                  v-on="on"
                  required
              ></v-text-field>
            </template>
            <v-date-picker v-model="editData.endTime" no-title scrollable locale="zh-cn">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="endTimeMenu = false">取消</v-btn>
              <v-btn text color="primary" @click="$refs['endTime-menu'].save(editData.endTime)">确定</v-btn>
            </v-date-picker>
          </v-menu>

          <div style="display: flex;justify-content: flex-end">
            <v-btn
                :loading="loading"
                :disabled="!valid"
                color="primary"
                elevation="0"
                @click.stop="validate"
            >
              下一步
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { delay } from 'lodash';
  import { createNamespacedHelpers } from 'vuex';

  const { mapMutations, mapState } = createNamespacedHelpers('form');

  export default {
    name: 'BaseInput',
    computed: {
      ...mapState(['editData']),
    },
    data: () => ({
      startTimeMenu: false,
      endTimeMenu: false,
      valid: true,
      loading:false,
      startTime: '',
      endTime: '',
      startTimeRules: [
        v => !!v || '请选择开始时间',
      ],
      endTimeRules: [
        v => !!v || '请选择结束时间',
      ],
    }),

    methods: {
      ...mapMutations(['setState']),
      validate() {
        this.loading = true
        delay(() => {
          this.loading = false
          if (this.$refs.form.validate()) {
            this.setState({ step: 'editForm' });
          }
        }, 500);

      },
      reset() {
        this.$refs.form.reset();
      },
      resetValidation() {
        this.$refs.form.resetValidation();
      },
    },
  };
</script>

<style scoped>

</style>
