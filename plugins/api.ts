export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: 'http://localhost/api',
    onRequest({ request, options, error }) {
      const headers = options.headers ||= {
        Accept: 'application/json'
      }
      const token = useCookie('XSRF-TOKEN')
      if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value as string
      }
    },
    async onResponseError({ response }) {
      if (response.status < 200 || response.status >= 300) {
        console.log(response.error)
        // await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    }
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api
    }
  }
})