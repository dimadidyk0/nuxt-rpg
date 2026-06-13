// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@pinia/nuxt', 
    '@pinia/colada-nuxt'
  ],
  css: [  
    '~/assets/css/reset.css',
    '~/assets/css/variables.css',
    '~/assets/css/index.css',
  ]
})