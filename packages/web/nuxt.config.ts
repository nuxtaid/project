export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxtaid/core',
  ],

  devtools: {
    enabled: true,
  },

  site: {
    url: 'http://localhost:3000/',
    name: 'Nuxt Aid',
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

  experimental: {
    componentIslands: true,
  },

  compatibilityDate: '2024-04-03',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  ogImage: {
    compatibility: {
      prerender: {
        chromium: false,
      },
    },
  },

})
