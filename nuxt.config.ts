// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@pinia/nuxt', 
    '@pinia/colada-nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  css: [  
    '~/assets/css/reset.css',
    '~/assets/css/variables.css',
    '~/assets/css/index.css',
  ]
})