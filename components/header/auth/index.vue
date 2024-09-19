<script lang="ts" setup>
  const auth = useAuthStore()
</script>

<template>

  <div class="flex items-center justify-end text-center">
    <div class="mr-2">
      <ButtonColorMode/>
    </div>
    <div v-if="auth.user">
      <HeaderAuthAccount/>
    </div>
    <div v-else>
      <HeaderAuthButtonGroup/>
    </div>
  </div>

</template>