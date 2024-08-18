<script lang="ts" setup>
const route = useRoute()

definePageMeta({
  layout: 'creator'
});

const {data: post, refresh} = await useFetch(`http://localhost/api/post/${route.params.id}`)
console.log(route.params.id)
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
    <pre>{{post}}</pre>
    <ClientOnly>
      <CreatorEditor :initialData="post"></CreatorEditor>
    </ClientOnly>

  </div>
</template>

<style scoped></style>
