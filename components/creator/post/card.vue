<script setup lang="ts">

  defineProps({
    post: Object
  })

</script>

<template>
    <UCard class="m-2">
      <template #header>
        <div class="h-8">
          <h5 class="font-bold text-md">{{post.id}} : {{post.title}}</h5>
        </div>
      </template>

      <template #footer>
        <div class="h-8 w-full flex ">
          <UButton
              size="sm"
              icon="i-majesticons-edit-pen-2-line"
              class="mr-2"
              @click="navigateTo('/creator/post/edit/' + post.id)"
          />
          <CreatorPostShow :id="post.id"/>
          <UButton
              size="sm"
              icon="i-majesticons-delete-bin"
              @click="navigateTo('/creator/post/' + post.id)"
          />
        </div>
      </template>
    </UCard>
</template>

<style scoped></style>
