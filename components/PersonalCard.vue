<script lang="ts" setup>
const auth = useAuthStore()
const user = await auth.me()
</script>

<template>
  <div>
    <div v-if="user">
      {{user}}
      <UButton @click="auth.logout()">
        Logout
      </UButton>
    </div>
    <div v-else>
      Hi, Unauthorized user!
      Try to login <ULink to='/login'>here</ULink>
      Try to login <ULink to='/register'>here</ULink>
    </div>
  </div>
</template>

<style scoped></style>
