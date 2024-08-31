<script setup>
defineProps({
  items: Array,
  style: String,
});

const listTag = computed(() => (style === 'ordered' ? 'ol' : 'ul'));
</script>

<template>
  <component :is="listTag">
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </component>
</template>
