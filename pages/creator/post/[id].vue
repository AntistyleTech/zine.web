<script setup lang="ts">
  definePageMeta({
    layout: 'creator'
  })

  const id = useRoute().params.id;
  const {data: post} = await useAsyncData(() => usePost().getPost(Number(id)));

</script>

<template>
    <div>

    </div>
</template>