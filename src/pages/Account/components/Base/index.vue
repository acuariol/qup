<template>
  <div>
    <p class="title font-weight-bold mb-8">基本设置</p>
    <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
    >
      <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="昵称"
          required
          filled
      ></v-text-field>

      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="邮箱"
          required
          filled
      ></v-text-field>

      <v-textarea
          v-model="profile"
          filled
          label="个人简介"
      ></v-textarea>

      <v-select
          v-model="select"
          :items="items"
          label="国家/地区"
          filled
      ></v-select>

      <v-text-field
          v-model="address"
          label="街道地址"
          filled
      ></v-text-field>

      <v-text-field
          v-model="phone"
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

    </v-form>

  </div>
</template>

<script>
  export default {
    name: 'Base',
    data: () => ({
      valid: true,
      name: 'Acuario',
      nameRules: [
        v => !!v || '请输入昵称',
        v => (v && v.length <= 10) || '少于10个字符',
      ],
      email: 'me@acuario.cn',
      emailRules: [
        v => !!v || '请输入邮箱',
        v => /.+@.+\..+/.test(v) || '无效邮箱',
      ],
      select: '英国',
      items: [
        '中国',
        '英国',
        '西班牙'
      ],
      profile: '',
      address: '伦敦贝克街221号',
      phone:'02022903',
      lazy: true,
    }),

    methods: {
      validate() {
        this.$refs.form.validate();
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
