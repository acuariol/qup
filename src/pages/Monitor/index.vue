<template>
  <div>
    <v-card class="mb-4">
      <v-btn @click.stop="go">go</v-btn>

    </v-card>

    <v-card class="pt-3 mb-4">
      <Pie></Pie>
    </v-card>

    <v-card class="pt-3">
      <Pie></Pie>
    </v-card>

  </div>
</template>

<script>
  import Pie from '../../components/charts/Pie'
  export default {
    name: 'Monitor',
    components:{Pie},
    methods:{
      go(){
        this.$router.push('/form')
      }
    }
  };
</script>

<style scoped>

</style>
