<script setup>
defineProps({
  text: String,
  level: Number,
});
</script>

<template>
  <h{level}>
  {{ text }}
  </h{{ level }}>
</template>
