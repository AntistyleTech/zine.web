<script lang="ts" setup>

const {data: posts} = useAsyncData(() => useApi('/post'))

async function test() {
  const res = await useApi('/post')
  console.log(res.data)
}

</script>

<template>
  <div>
    <div v-on:click="test">Test</div>
    {{posts}}
  </div>
</template>

<style scoped>

</style>
