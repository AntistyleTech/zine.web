<script lang="ts" setup>

</script>

<template>
  <div class="flex items-center justify-between gap-5 px-8 py-3 px-4 sm:px-6 lg:px-8">
    <div>
      <NuxtLink
        to="/"
        class="font-bold text-xl">
        AntistyleTech
      </NuxtLink>
    </div>
    <div class="flex items-center justify-end">
      <NuxtLink to="/register">
        <UButton  variant="outline" class="mr-2" >Sign Up</UButton>
      </NuxtLink>
      <NuxtLink to="/login">
        <UButton>Sign In</UButton>
      </NuxtLink>
    </div>
  </div>
</template>
