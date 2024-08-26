<script setup lang="ts">
const {data: socials} = await useAsyncData(() => useSocial().getAvailable())
const {data: accounts} = await useAsyncData(() => useSocial().getAccounts())
</script>

<template>
  <div>
    <UCard>
      <UButton
          v-for="social in socials"
          v-text="social.socialNetwork"
          @:click="navigateTo(social.authUrl, {external: true})"
      />
    </UCard>
    <UCard>
      {{accounts}}
    </UCard>
  </div>
</template>

<style scoped></style>
