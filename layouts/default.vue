<script lang="ts" setup></script>

<template>
  <div>
    <DefaultHeader/>
    <UContainer
      :ui="{
        base: 'flex items-center justify-between gap-5 px-8 py-3',
        padding: 'px-4 sm:px-6 lg:px-8'
      }"
    >
      <slot/>
    </UContainer>
  </div>
</template>

<style scoped></style>
