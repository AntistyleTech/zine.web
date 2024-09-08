<script setup lang="ts">
defineProps({
  post: Object
})

</script>

<template>
  <UCard class="m-2">
    <template #header>
      <h5 class="font-bold text-lg">{{post.id}} : {{post.title}}</h5>
    </template>

    <template #footer>
      <UButton
          size="sm"
          icon="i-majesticons-edit-pen-2-line"
          @click="navigateTo('/creator/post/' + post.id)"
          class="mr-2"
      />
      <UButton
          size="sm"
          icon="i-majesticons-eye-line"
          @click="navigateTo('/creator/post/' + post.id)"
          class="mr-2"
      />
      <UButton
          size="sm"
          icon="i-majesticons-delete-bin"
          @click="navigateTo('/creator/post/' + post.id)"
      />
    </template>
  </UCard>
</template>

<style scoped></style>
