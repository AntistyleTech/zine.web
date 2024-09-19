<script setup lang="ts">

  const props = defineProps({
    post: Object
  })

  const { deletePost } = usePost();

  const postDelete = async () => {
    try {
      await deletePost(Number(props.post.id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

</script>

<template>
    <UCard class="m-2">
      <template #header>
        <div class="h-8">
          <h5 class="font-bold text-md">{{props.post.id}} : {{props.post.title}}</h5>
        </div>
      </template>

      <template #footer>
        <div class="h-8 w-full flex ">
          <UButton
              size="sm"
              icon="i-majesticons-edit-pen-2-line"
              class="mr-2"
              @click="navigateTo('/creator/post/edit/' + props.post.id)"
          />
          <CreatorPostShow :id="props.post.id"/>
          <UButton
              size="sm"
              icon="i-majesticons-delete-bin"
              @click="postDelete"

          />
        </div>
      </template>
    </UCard>
</template>

<style scoped></style>
