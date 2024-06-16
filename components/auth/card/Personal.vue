<script lang="ts" setup>
const auth = useAuthStore()
const user = auth.user
</script>

<template>
  <div>
    <UCard>
      <div v-if="user">
        <h5>👋 Hi, Authorized user {{ user.username }}</h5>
        <p>
          {{ user }}
        </p>
        <UButton @click="auth.me()">
          Update
        </UButton>
        <UButton @click="auth.logout()">
          Logout
        </UButton>
      </div>
      <div v-else>
        <h5>👋 Hi, Unauthorized user!</h5>
        <p>
          Try to login
          <ULink to='/login' class="text-primary">here</ULink>
          <br>
          Or register
          <ULink to='/register' class="text-primary">here</ULink>
          <br>
        </p>
      </div>
    </UCard>
  </div>
</template>

<style scoped></style>
