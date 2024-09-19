<script setup lang="ts">

  const props = defineProps({
  blocks: Object
});

  const emit = defineEmits(['update:modelValue']);

</script>

<template>

    <UModal>
      <div class="p-6">
        <div class="w-full flex justify-end">
          <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              @click="emit('update:modelValue', false)"
          />
        </div>
        <div class="h-auto">
          <EditorRender :blocks="props.blocks"/>
        </div>
      </div>
    </UModal>

</template>

<script>

</script>

