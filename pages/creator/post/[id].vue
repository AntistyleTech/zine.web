<script setup lang="ts">
const id = useRoute().params.id
const {data: post} = await useAsyncData(() => usePost().getPost(Number(id)));
console.log(post)
</script>

<template>
  <CreatorPostEdit :post="post.data"/>
</template>