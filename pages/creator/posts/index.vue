<script lang="ts" setup>

const {data: posts} = useAsyncData(() => useApi('/post'))

async function test() {
  const res = await useApi('/post')
  console.log(res.data)
}

</script>

<template>
  <div v-for="post in posts.data">
    <UCard >
      {{post}}
    </UCard>
  </div>
</template>

<style scoped>

</style>
