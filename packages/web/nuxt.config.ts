export default defineNuxtConfig({

  modules: [
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],

  devtools: {
    enabled: true,
  },

  colorMode: {
    hid: 'color-mode-script',
    globalName: '__COLOR_MODE__',
    storageKey: 'color-mode',
    preference: 'dark',
    classSuffix: '',
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
