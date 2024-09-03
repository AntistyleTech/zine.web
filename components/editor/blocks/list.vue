<script setup>
defineProps({
  data: Object
});

const listTag = computed(() => (data.style === 'ordered' ? 'ol' : 'ul'));
</script>

<template>
  <component :is="listTag">
    <li v-for="(item, index) in data.items" :key="index">{{ item }}</li>
  </component>
</template>
