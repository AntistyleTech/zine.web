<script setup lang="ts">
const route = useRoute();
const auth = useAuthStore()
const user = auth.user


const {data: post, refresh} = await useFetch(`http://localhost/api/post/${route.params.id}`)
console.log(post)
const loadPost = () => {
  refresh()
}

onMounted(async () => {
  await loadPost()
})
</script>

<template>
  <div>
    <NuxtLink :to="{ name: '@username-creator-posts-edit-id', params: { username: user.name, id: post.data.id } }">
      <UButton icon="i-majesticons-edit-pen-2" size="xs" class="mr-2"/>
    </NuxtLink>
    <pre>{{ post }}</pre>
  </div>
</template>

<style scoped>

</style>