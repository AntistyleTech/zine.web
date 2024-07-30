<script setup lang="ts">
const test = async () => {
  try {
    const response = await useApi('/post');
    console.log( response);
  } catch (error) {
    console.error( error);
  }
};
</script>

<template>
<UButton @click="test">Test</UButton>
<ClientOnly>
  <editor></editor>
</ClientOnly>

</template>

<style scoped>

</style>
