import type { UseFetchOptions } from 'nuxt/app'

export function useApi<T>(
  url: string | (() => string),
  options: object = {},
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api
  })
}