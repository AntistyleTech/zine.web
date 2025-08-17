// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@pinia/nuxt', '@nuxt/ui', "@nuxt/icon", "@nuxt/image"],
    icon: {
        provider: 'iconify'
    },
    ui: {
        icons: ['majesticons']
    },
})