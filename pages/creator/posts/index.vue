<script setup lang="ts">
const auth = useAuthStore()
const user = auth.user

const {$api} = useNuxtApp()

const {data: posts, refresh} = await useFetch("http://localhost/api/post", {
  transform: (_posts) => _posts.data
})

const loadPost = () => {
  refresh()
}

const deletePost = async (id: number) => {
  const response = await $api(`/post/${id}`, {
    method: 'DELETE'
  });
  await refresh();
}

onMounted(async () => {
  await loadPost()
})
</script>

<template>
  <div v-for="post in posts" :key="post.id" class="w-full h-full flex">
    <div class="flex justify-between items-center w-full p-2 border border-purple-800 rounded-lg cursor-pointer">
      <div  class="border border-purple-400 rounded-lg p-2 hover:scale-105">
        <NuxtLink :to="{ name: '@username-creator-posts-id', params: { username: user.name, id: post.id } }">
          <h5>{{ post.title }}</h5>
        </NuxtLink>
      </div>
      <div class="p-2">
        <UButton icon="i-majesticons-edit-pen-2" size="xs" class="mr-2"/>
        <UButton icon="i-majesticons-delete-bin" size="xs" @click="deletePost(post.id)"/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>