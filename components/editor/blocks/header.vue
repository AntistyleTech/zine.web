<script setup>

  const props = defineProps({
  data: Object
});

</script>

<template>
  <component :is="`h${props.data.level}`" class="mb-2">
    {{props.data.text}}
  </component>
</template>

<style scoped>

h1{
  @apply text-3xl font-bold
}
h2{
  @apply text-2xl font-semibold
}
h3{
  @apply text-xl font-semibold
}
h4{
  @apply text-lg font-semibold
}
h5{
  @apply text-base font-semibold
}
h6{
  @apply text-base font-semibold
}

</style>