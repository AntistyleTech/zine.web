<script lang="ts" setup>

const { data: posts } = await useAsyncData('posts', () =>
    $fetch('https://fake-json-api.mock.beeceptor.com/users')
    // $fetch('http://localhost/api/post', {
    //   method: 'GET',
    //   headers: { Accept: 'application/json' }
    // })
);

async function test()
{
  let res = await $fetch('http://localhost/api/post', {
    method: 'GET',
    headers: { Accept: 'application/json' }
  });

  console.log(res.data)
}

// Logging data to the console for debugging
console.log(posts.value);
</script>

<template>
  <div>

    <div v-on:click="test()">Test</div>

    <!-- Handle loading state -->
    <div v-if="pending">Loading...</div>

    <!-- Handle error state -->
    <div v-else-if="error">Error: {{ error.message }}</div>

    <!-- Display posts once fetched -->
    <div v-else>
      <PostView
          v-for="post in posts"
          :key="post.id"
          :post="post"
      />
    </div>
  </div>
</template>

<style scoped>
/* Add any styles here if needed */
</style>
