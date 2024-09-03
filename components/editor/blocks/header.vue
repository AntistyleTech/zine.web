<script setup>
const props = defineProps({
  test: Object
});

</script>

<template>
  <h1>Header</h1>
  <div :is="`h${props.test.level}`" class="border m-2 p-2">
    {{props.test.text
    <pre>{{ props.test }}</pre>
  </div>
</template>
