// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        '@/assets/scss/variables.scss',
        '@/assets/css/reset.css'
    ],
    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                'Noto+Sans+JP': [300, 400, 500],
            }
        }],
    ],
    app: {
        baseURL: process.env.BASE_URL ? process.env.BASE_URL : '/',
    }
})
