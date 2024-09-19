<script setup lang="ts">
const props = defineProps(['post'])

console.log(props.post)
</script>

<template>
  <div>
    {{post}}
  </div>
</template>

<style scoped></style>
