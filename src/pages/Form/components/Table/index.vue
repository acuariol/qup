<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-2"
        :single-select="singleSelect"
        item-key="name"
        :show-select="showSelect"
        v-model="selected"
        hide-default-footer
    >

      <template v-slot:item.actions="{ item }">
        <v-btn class="mr-3" small @click="editItem(item)">编辑</v-btn>
        <v-btn class="mr-3" small color="error" @click="deleteItem(item)">删除</v-btn>
      </template>

    </v-data-table>

    <v-pagination
        class="pagination"
        v-model="page"
        :length="4"
        circle
    />
  </div>
</template>

<script>
  export default {
    name: 'Table',
    props: {
      showSelect: Boolean,
    },
    data() {
      return {

        page: 1,
        selected: [],
        singleSelect: false,
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      };
    },
    methods: {
      editItem(row) {
        console.log(row.getName);

      },
      deleteItem(row) {
        console.log(row);

      },
    },
  };
</script>

<style scoped lang="scss">
  .pagination {
    padding: 10px 0;
    justify-content: flex-end;
  }


</style>
