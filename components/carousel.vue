<!-- carousel.vue -->
<script setup lang="ts">
const items = [
  '/IMG_2907.jpg',
  '/IMG_2569.jpg',
  '/IMG_2918.jpg',
  '/IMG_2985.jpg',
]
</script>

<template>
  <UCarousel
      v-slot="{ item }"
      loop
      :autoplay="{ delay: 5000 }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="w-full"
  >
    <div class="flex justify-center items-center md:h-[80vh] py-4">
      <img
          :src="item"
          class="max-h-[60vh] max-w-[90vw] object-contain rounded-xl"
          alt="Project Image"
      />
    </div>
  </UCarousel>
</template>