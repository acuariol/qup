<template>
  <v-container fluid :style="{background: `url(${require('@/assets/2003488.jpg')})`}" class="login-container">
    <div class="main">
      <v-row no-gutters justify="center" align="center" style="margin-top: 20vh">
        <v-col sm="12" md="4" xl="4" lg="4" class="px-3">
          <div class="d-flex justify-center  pb-12">
            <p class="display-1 white--text ma-0">Questionnaire</p>
          </div>
          <v-card class="px-6 py-12" color="rgba(255,255,255,0.1)">
            <v-text-field
                label="用户名(admin)"
                outlined
                v-model="username"
                color="#fff"
                dark
            />

            <v-text-field
                label="密码(123456)"
                outlined
                dark
                color="#fff"
                v-model="password"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
            />
            <v-btn block large color="primary" dark @click.stop="handleLogin">登录</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        show: false,
        username: '',
        password: '',
      };
    },
    methods:{
      handleLogin(){
        if(this.username&&this.username==='admin'&&this.password&&this.password==='123456')
        this.$router.replace('/')
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "./styles";
</style>
