<template>
  <div>
    <template v-if="show==='left'">
      <div class="d-flex">
        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="avatar"
            class="mx-auto my-4"
        />
      </div>

      <v-skeleton-loader
          :boilerplate="boilerplate"
          type="sentences"
          class="mx-auto my-6"
      />

      <v-skeleton-loader
          :boilerplate="boilerplate"
          type="sentences"
          class="mx-auto my-6"
      />


      <v-skeleton-loader
          :boilerplate="boilerplate"
          type="sentences"
          class="mx-auto my-6"
      />

      <v-skeleton-loader
          :boilerplate="boilerplate"
          type="sentences"
          class="mx-auto my-6"
      />


      <div class="d-flex">
        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="chip"
            class="mr-4"
        />

        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="chip"
            class="mr-4"
        />

        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="chip"
            class="mr-4"
        />
      </div>

    </template>


    <template v-if="show==='right'">
      <div class="d-flex ">
        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="button"
            class="mr-2"
        />
        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="button"

            class="mr-2"
        />
        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="button"

        />
      </div>

      <div>
        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="paragraph"
            class="pt-12"
        />
        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="paragraph"
            class="pt-12"
        />
        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="paragraph"
            class="pt-12"
        />

        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="paragraph"
            class="pt-12"
        />

        <v-skeleton-loader
            :boilerplate="boilerplate"
            type="paragraph"
            class="pt-12"
        />
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'Boilerplate',
    props: {
      show: {
        type: String,
        default: 'left',
      },
    },
    data: () => ({
      boilerplate: false,
      type: 'list-item-avatar-three-line',
    }),

  };
</script>

<style scoped>

</style>
