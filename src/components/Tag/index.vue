<template>
 <div class="tag-box">
   <div style="display: inline-block;width: 100%;height: 100%;text-align: center" @click="state=!state" v-if="state">
     <v-icon small >mdi-plus</v-icon>
   </div>

   <input type="text" v-else class="tag-input font-weight-medium "/>

 </div>
</template>

<script>
  export default {
    name: 'Tag',
    data() {
      return {
        state: true,
      };
    },
  };
</script>

<style scoped lang="scss">

  .con{
    display: inline-block;
  }
  .tag-box {
    width: auto;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    vertical-align: top;
    line-height: 32px;
    min-width: 44px;
    text-align: center;
    cursor: pointer;


    &:hover {
      background: #f7f7f7;
    }

    .tag-input{
      outline: none;
      padding: 0 10px;
      max-width: 120px;
      font-size: 14px;
      line-height: 32px;
      height: 100%;
    }
  }
</style>
