<script lang="ts" setup>
const {data: posts} = await useAsyncData(() => usePost().getPosts())
</script>

<template>
  <div v-for="post in posts.data">
    <CreatorPostCard :post="post"/>
  </div>
</template>

<style scoped>

</style>
