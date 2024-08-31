<script lang="ts" setup>
const {data: posts} = await useAsyncData(() => usePost().getPosts())

</script>

<template>
<!--  <div v-for="post in posts.data">-->
<!--    <CreatorPostCard :post="post"/>-->
<!--  </div>-->
  <UCard v-for="post in posts.data">
    <template #header>
      <h5 class="font-bold text-lg">{{post.id}} : {{post.title}}</h5>
    </template>
    {{post.contentItems ?? 'items not found'}}
    <template #footer>
      <UButton
          v-text="'Edit post'"
          :to="`/creator/post/${post.id}`"
      />
      <UButton
          v-text="'Export post'"
      />
    </template>
  </UCard>
</template>

<style scoped>

</style>
