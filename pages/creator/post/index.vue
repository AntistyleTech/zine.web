<script lang="ts" setup>

  definePageMeta({
    layout: 'creator'
  })

  const {data: posts} = await useAsyncData(() => usePost().getPosts())

</script>

<template>
  <div class="m-4">
    <div class="grid grid-cols-2 md:grid-cols-4  gap-4 m-2">
      <div class="flex" v-for="post in posts.data">
        <CreatorPostCard :post="post"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
</style>
