<script setup>

defineProps({
  blocks: Array,
});

const componentMap = {
  header: EditorBlocksHeader,
  paragraph: 'EditorBlocksParagraph',
  list: 'EditorBlocksList',
};

function getComponent(type) {
  return componentMap[type] || null;
}
</script>

<template>
  <div>
    <component
        v-for="(block, index) in blocks"
        :is="getComponent(block.type)"
        :key="index"
        v-bind="block.data"
    />
  </div>
</template>
