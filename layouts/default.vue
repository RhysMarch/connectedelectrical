<!-- default.vue -->
<template>
  <div class="bg-white min-h-screen">
    <Navbar />
    <NuxtPage class="flex-grow" />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: (title) => (title ? `${title} | Connected Electrical` : 'Connected Electrical'),
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'description',
      content: 'Connected Electrical offers expert electrical services across North Devon and the South West.'
    },
    { name: 'author', content: 'Connected Electrical Contractors' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Connected Electrical' },
    { property: 'og:locale', content: 'en_GB' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ]
})
</script>


<style scoped>
div {
  font-family: Poppins, sans-serif;
}
</style>