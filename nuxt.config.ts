export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/sitemap'
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error']
    }
  },

  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: false,
      autoSubfolderIndex: false,
      routes: ['/', '/about', '/services', '/portfolio', '/contact', '/thank-you']
    },
    storage: {
      cache: {
        driver: 'memory'
      }
    }
  },

  site: {
    url: 'https://connectedelectricalsw.co.uk',
    trailingSlash: false,
    routes: ['/about', '/services', '/portfolio', '/contact']
  },

  compatibilityDate: '2025-03-31'
})