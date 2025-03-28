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
</script>

<style scoped>
div {
  font-family: Poppins, sans-serif;
}
</style>