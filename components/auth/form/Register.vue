<script setup lang="ts">

import {type InferType, object, string} from 'yup'
import type {FormSubmitEvent} from '#ui/types'

const schema = object({
  username: string().required('Required'),
  email: string().email('Invalid email').required('Required'),
  password: string()
      .min(6, 'Must be at least 6 characters')
      .required('Required'),
  passwordConfirm: string()
      .min(6, 'Must be at least 6 characters')
      .required('Required')
      .test('Match', 'Passwords must match',
          function (value: any) {
            return this.parent.password === value
          }
      )
})

type Schema = InferType<typeof schema>

const state = reactive({
  username: undefined,
  email: undefined,
  password: undefined,
  passwordConfirm: undefined
})

const authStore = useAuthStore()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await authStore.register(event.data.username, event.data.email, event.data.password)
}

</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Username" name="username">
      <UInput v-model="state.username"/>
    </UFormGroup>

    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email"/>
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password"/>
    </UFormGroup>

    <UFormGroup label="Confirm password" name="passwordConfirm">
      <UInput v-model="state.passwordConfirm" type="password"/>
    </UFormGroup>

    <UButton block type="submit">
      Register
    </UButton>
  </UForm>
</template>

<style scoped>

</style>
