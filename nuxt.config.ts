export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },

  // app: {
  //   baseURL: '/connectedelectrical/'
  // },

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error']
    }
  },

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: false,
      routes: [
        '/', '/about', '/services', '/portfolio', '/contact', '/thank-you'
      ]
    },
    storage: {
      'cache': {
        driver: 'memory'
      }
    }
  }
})
