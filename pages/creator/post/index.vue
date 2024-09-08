<script lang="ts" setup>

const {data: posts} = await useAsyncData(() => usePost().getPosts())

</script>

<template>
  <div class="flex w-full h-screen m-2">
    <div class="">

    </div>
    <div class="flex w-full h-screen m-2">
      <div v-for="post in posts.data">
        <CreatorPostCard :post="post"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
