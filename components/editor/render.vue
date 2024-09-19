<script setup>

defineProps({
  blocks: Array,
});

const componentMap = {
  header: resolveComponent('EditorBlocksHeader'),
  paragraph: resolveComponent('EditorBlocksParagraph'),
  list: resolveComponent('EditorBlocksList'),
};

function getComponent(type) {
  return componentMap[type] || null;
}

</script>

<template>
<div>
  <component v-for="(block, index) in blocks"
             :is="getComponent(block.type)"
             :key="index"
             :data="block.data"
 />
</div>
</template>
