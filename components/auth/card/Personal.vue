<script lang="ts" setup>
const auth = useAuthStore()
const user = useAuthStore().user
</script>

<template>
  <div>
    <UCard>
      <div v-if="user">
        {{ user }}
        <UButton @click="auth.logout()">
          Logout
        </UButton>
      </div>
      <div v-else>
        <p>
          Hi, Unauthorized user!
          Try to login
          <ULink to='/login' class="text-primary">here</ULink>
          Try to register
          <ULink to='/register' class="text-primary">here</ULink>
        </p>
      </div>
    </UCard>
  </div>
</template>

<style scoped></style>
