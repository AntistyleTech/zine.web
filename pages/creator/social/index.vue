<script setup lang="ts">
const {data: socials} = await useAsyncData(() => useSocial().getAvailable())
const accounts = ref([])

onMounted(async () => {
  accounts.value = await useSocial().getAccounts()
})
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
      Accounts: <br>
      <p v-for="account in accounts">
        {{account.id}}
        {{account.social_network}}
      </p>
    </UCard>
  </div>
</template>

<style scoped></style>
