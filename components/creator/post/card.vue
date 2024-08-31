<script setup lang="ts">
const props = defineProps(['post'])

console.log(props.post)
</script>

<template>
  <UCard>
    <template #header>
      <h5 class="font-bold text-lg">{{post.id}} : {{post.title}}</h5>
    </template>
    {{post.contentItems ?? 'items not found'}}
    <template #footer>
      <UButton
          v-text="'Edit post'"
          @click="navigateTo('/creator/post/' + post.id)"
      />
      <UButton
          v-text="'Export post'"
          @:click="navigateTo('/creator/post/' + post.id)"
      />
    </template>
  </UCard>
</template>

<style scoped></style>
