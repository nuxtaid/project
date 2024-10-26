export default defineNuxtConfig({

  modules: [
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],

  devtools: {
    enabled: true,
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
