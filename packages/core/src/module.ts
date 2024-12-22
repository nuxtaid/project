import { defineNuxtModule, createResolver, installModule, addComponentsDir } from '@nuxt/kit'

export interface ModuleOptions {
  devtools?: boolean
  components?: true | false | ComponentOptions
}

export interface ComponentOptions {
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxtaid/core',
    configKey: 'aid',
  },
  defaults: {
    devtools: true,
    components: true,
  },
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    await installModule('@nuxt/icon')
    await installModule('@nuxt/fonts')
    await installModule('@nuxtjs/seo')
    await installModule('@nuxtjs/color-mode', {
      hid: 'color-mode-script',
      globalName: '__COLOR_MODE__',
      storageKey: 'color-mode',
      preference: 'dark',
      classSuffix: '',
    })
    await installModule('@nuxtjs/tailwindcss', {
      viewer: false,
    })

    // prefix default is Aid and entries default is []
    if (_options.components) {
      const componentOptions: ComponentOptions = _options.components === true ? { prefix: 'Aid' } : _options.components

      addComponentsDir({
        path: resolve('./runtime/components'),
        prefix: componentOptions.prefix || 'Aid',
      })
    }
  },
})
