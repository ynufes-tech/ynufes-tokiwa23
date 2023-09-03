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
                'Noto+Sans+JP': [300, 400, 500, 600],
            }
        }],
    ],
    app: {
        baseURL: process.env.BASE_URL ? process.env.BASE_URL : '/',
        head: {
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: ''},
                {property: 'og:type', content: 'website'},
                {property: "og:site_name", content: "常盤祭2023 - 横浜国立大学大学祭"},
                {property: "keywords", content: "常盤祭,横浜国立大学,大学祭,文化祭,横国,常磐祭,ときわさい,2023"},
                // {property: 'og:image', content: 'localhost:3000/favicon.ico'},
                // {property: 'og:image:width', content: '1200'},
                // {property: 'og:image:height', content: '630'},
            ]
        }
    }
})
