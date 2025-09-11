// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/icon',
    'nuxt-simple-sitemap' // ✅ replaces @nuxtjs/sitemap
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
      crawlLinks: true, // auto-detect routes from <NuxtLink>
      routes: ['/', '/about', '/services', '/portfolio', '/contact', '/thank-you']
    }
  },

  site: {
    url: 'https://connectedelectricalsw.co.uk',
    trailingSlash: false
  },

  sitemap: {
    siteUrl: 'https://connectedelectricalsw.co.uk',
    exclude: ['/thank-you'], // optional: don’t index thank-you page
    autoLastmod: true
  },

  ssr: false, // ✅ static export for Cloudflare Pages
  compatibilityDate: '2025-03-31'
})
