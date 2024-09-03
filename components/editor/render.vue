<script setup>

defineProps({
  blocks: Array,
});

const componentMap = {
  header: 'EditorBlocksHeader',
  paragraph: 'editor-blocks-paragraph',
  list: 'editor-blocks-list',
};

function getComponent(type) {
  return componentMap[type] || null;
}

</script>

<template>
<div>
  <component class=" border m-2 p-2 "

             v-for="(block, index) in blocks"
             :is="getComponent(block.type)"
             :key="index"
             :test="block.data"
             @hook:mounted="console.log('Block data:', block.data)"
  >

      <pre>{{ block.data }}</pre>

  </component>

</div>


</template>
