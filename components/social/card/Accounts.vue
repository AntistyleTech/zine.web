<script lang="ts" setup>

const redirect = () => {
  navigateTo('http://localhost/api/social/tumblr/auth', {
    external: true
  });
}

</script>

<template>
  <div>
    <UCard>
      <UButton v-on:click="redirect()">Add Tumblr account</UButton>
    </UCard>
  </div>
</template>

<style scoped>

</style>
