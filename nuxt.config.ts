export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxt/icon'],
  css: [
    '~/assets/css/main.css'
  ],
  devtools: { enabled: true },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error']
    }
  }
})