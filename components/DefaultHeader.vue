<script lang="ts" setup>
const menu = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/login',
    label: 'Login',
  },
  {
    path: '/register',
    label: 'Register',
  },
  {
    path: '/me',
    label: 'Me',
  }
];
</script>

<template>
  <UContainer
    :ui="{
      base: 'flex items-center justify-between gap-5 px-8 py-3',
      padding: 'px-4 sm:px-6 lg:px-8'
    }"
  >
    <ULink
      v-for="item in menu"
      :to=item.path
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      {{ item.label }}
    </ULink>
  </UContainer>
</template>
