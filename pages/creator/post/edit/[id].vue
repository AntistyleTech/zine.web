<script setup lang="ts">

  const id = useRoute().params.id

  const {data: post} = await useAsyncData(() => usePost().getPost(Number(id)));

</script>

<template>
  <div>
    <client-only>
      <Editor :initial-data="post.data.blocks"/>
    </client-only>

  </div>
</template>