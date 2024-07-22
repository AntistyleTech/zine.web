<script setup lang="ts">

</script>

<template>
  <div class="h-[50px] w-full flex items-center justify-end gap-5 px-8 py-3 px-4 sm:px-6 lg:px-8">

    <div class="flex items-center justify-end">
      <div class="mr-2">
        <ButtonColorMode/>
      </div>
      <div>
        <NuxtLink to="/register">
          <UButton variant="outline" class="mr-4" >Sign Up</UButton>
        </NuxtLink>
        <NuxtLink to="/login">
          <UButton>Sign In</UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
