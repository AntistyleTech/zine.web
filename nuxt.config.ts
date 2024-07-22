// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxt/ui',
        "nuxt-tiptap-editor",
        "@nuxt/image"
    ],
    tiptap: {
        prefix: "Tiptap"
    },
    ui: {
        icons: ['majesticons']
    }
})