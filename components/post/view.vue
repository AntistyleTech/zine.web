<script setup lang="ts">
const post = defineProps(['post']);
</script>

<template>
  <div>
    <UCard>
      {{post}}
    </Ucard>
  </div>
</template>

<style scoped></style>
