<template>
  <div>
    <p class="title font-weight-bold mb-8">基本设置</p>
    <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
    >
      <v-text-field
          v-model="user.name"
          :counter="10"
          :rules="nameRules"
          label="昵称"
          required
          filled
      ></v-text-field>

      <v-text-field
          v-model="user.email"
          :rules="emailRules"
          label="邮箱"
          required
          filled
      ></v-text-field>

      <v-textarea
          v-model="user.profile"
          filled
          label="个人简介"
      ></v-textarea>

      <v-select
          v-model="user.country"
          :items="items"
          label="国家/地区"
          filled
      ></v-select>

      <v-text-field
          v-model="user.street"
          label="街道地址"
          filled
      ></v-text-field>

      <v-text-field
          v-model="user.phone"
          label="联系电话"
          filled
      ></v-text-field>

      <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
      >
        更新个人信息
      </v-btn>

      <v-btn
          v-show="changeInfo"
          class="mr-4"
          @click="resetInfo"
      >
        复原
      </v-btn>

    </v-form>

  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import { cloneDeep,isEmpty } from 'lodash';

  export default {
    name: 'Base',
    computed: {
      ...mapState(['userInfo']),
    },
    data: () => ({
      valid: true,
      user: {},
      origin: {},
      nameRules: [
        v => !!v || '请输入昵称',
        v => (v && v.length <= 10) || '少于10个字符',
      ],
      emailRules: [
        v => !!v || '请输入邮箱',
        v => /.+@.+\..+/.test(v) || '无效邮箱',
      ],
      items: [
        '中国',
        '英国',
        '西班牙',
      ],
      lazy: true,
      changeInfo: false,
    }),
    watch: {
      user: {
        handler: function (val, oldVal) {

          if (!isEmpty(oldVal))
            this.changeInfo = true;
        },
        deep: true,
      },
    },
    methods: {
      ...mapMutations(['setState']),
      validate() {
        if (this.$refs.form.validate()) {
          this.setState({ userInfo: cloneDeep({ ...this.user }) });
          this.changeInfo = false;
          this.origin = cloneDeep({  ...this.user });
        }
      },
      reset() {
        this.$refs.form.reset();
      },
      resetValidation() {
        this.$refs.form.resetValidation();
      },
      resetInfo() {
        this.user = cloneDeep({ ...this.origin });
      },
    },
    mounted() {
      this.user = cloneDeep({ ...this.userInfo });
      this.origin = cloneDeep({ ...this.userInfo });
    },
  };
</script>

<style scoped>

</style>
