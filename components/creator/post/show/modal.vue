<script setup lang="ts">
const props = defineProps({
  blocks: Object
});

console.log(props.post)

</script>

<template>

    <UModal>
      <div class="p-4">
        <div class="h-auto p-4">
          <EditorRender :blocks="props.blocks"/>
        </div>
      </div>
    </UModal>

</template>

