<template>
  <div>
    <p class="title font-weight-bold mb-8">新消息通知</p>
    <div>
      <v-list>
        <div v-for="(item,index) in lists" :key="item.id">
          <v-list-item two-line class="py-2 px-0" >
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
              <v-list-item-subtitle class="pt-2">{{item.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-switch
                  color="primary"
              ></v-switch>
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
    name: 'Notice',
    data() {
      return {
        lists: [
          {
            id: '1',
            title: '账户密码',
            subtitle: '其他用户的消息将以站内信的形式通知',
            option:'修改'
          },
          {
            id: '2',
            title: '系统消息',
            subtitle: '系统消息将以站内信的形式通知',
            option:'修改'
          },
          {
            id: '3',
            title: '待办任务',
            subtitle: '待办任务将以站内信的形式通知',
            option:'设置'
          }
        ],
      };
    },
  };
</script>

<style scoped>

</style>
