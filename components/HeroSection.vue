<!-- HeroSection.vue -->
<script setup>
import carousel from '~/components/carousel.vue'
</script>

<template>
  <div class="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 pt-24 px-4 border-t border-gray-200 shadow md:min-h-[100vh]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1">

      <!-- Left: Welcome Text -->
      <div class="flex flex-col justify-center md:min-h-[80vh] pl-10 md:pl-30">
        <div>
          <h1 class="text-5xl font-bold mb-4 text-black leading-tight">
            Welcome to Connected Electrical Contractors
          </h1>
          <p class="text-lg text-black mb-6">
            COMMERCIAL, DOMESTIC & INDUSTRIAL SPECIALISTS
          </p>
          <NuxtLink
              to="/contact"
              class="inline-block bg-zinc-900 text-white font-semibold px-6 py-3 rounded hover:bg-zinc-800 transition"
          >
            Get a Quote
          </NuxtLink>
        </div>
      </div>

      <!-- Right: Carousel -->
      <div class="flex justify-center items-center md:min-h-[80vh]">
        <carousel />
      </div>

    </div>
  </div>
</template>



