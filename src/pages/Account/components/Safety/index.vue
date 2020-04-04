<template>
  <div>
    <p class="title font-weight-bold mb-8">安全设置</p>
    <div>
      <v-list>
        <div v-for="(item,index) in lists" :key="item.id">
          <v-list-item two-line class="py-2 px-0" >
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
              <v-list-item-subtitle class="pt-2">{{item.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn text color="primary">
                {{item.option}}
              </v-btn>
            </v-list-item-action>

          </v-list-item>
          <v-divider v-if="index + 1 < lists.length" />
        </div>


      </v-list>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Safety',
    data() {
      return {
        lists: [
          {
            id: '1',
            title: '账户密码',
            subtitle: '当前密码强度：强',
            option:'修改'
          },
          {
            id: '2',
            title: '密保手机',
            subtitle: '绑定手机：：152****6666',
            option:'修改'
          },
          {
            id: '3',
            title: '密保问题',
            subtitle: '未设置密保问题，密保问题可有效保护账户安全',
            option:'设置'
          },
          {
            id: '4',
            title: '备用邮箱',
            subtitle: '已绑定邮箱：：me***ario.cn',
            option:'修改'
          },
          {
            id: '5',
            title: 'MFA 设备',
            subtitle: '未绑定 MFA 设备，绑定后，可以进行二次确认',
            option:'绑定'
          },
        ],
      };
    },
  };
</script>

<style scoped>

</style>
