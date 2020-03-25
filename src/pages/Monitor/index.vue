<template>
  <div>
    <v-btn @click.stop="go">go</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'Monitor',
    methods:{
      go(){
        this.$router.push('/form')
      }
    }
  };
</script>

<style scoped>

</style>
