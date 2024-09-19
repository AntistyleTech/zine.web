<script setup lang="ts">
const props = defineProps({
  open: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="w-full flex items-center justify-start cursor-pointer p-2">
    <!--TODO: Add NuxtLink to main page-->
    <NuxtImg height="40" width="40"
             src="/AntistyleLogo.svg"
             class="duration-500"
             :class="{'rotate-[360deg]': !props.open}" />
    <h1 class="text-white origin-left font-medium text-xl duration-300"
        :class="{'scale-0': !props.open}">
      AntistyleTech
    </h1>
  </div>
</template>

<style scoped>

</style>