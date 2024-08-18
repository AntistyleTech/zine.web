// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxt/ui',
        "@nuxt/image",
        "@nuxt/icon"
    ],
    // experimental: {
    //     viewTransition: true
    // },
    icon: {
        provider: 'iconify'
    },
    ui: {
        icons: ['majesticons']
    },


})