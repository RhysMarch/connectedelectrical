<!-- pages/portfolio.vue -->
<script setup>
useHead({
  title: 'Our Work | Connected Electrical Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Explore a selection of our completed electrical projects across North Devon and the South West, from domestic rewires to full commercial installations.'
    },
    {
      property: 'og:title',
      content: 'Connected Electrical Portfolio'
    },
    {
      property: 'og:description',
      content: 'See our quality workmanship in past residential, commercial, and industrial projects.'
    }
  ]
})

const projects = [
  {
    title: 'Underfloor Heating & Lights Installation',
    location: 'Woolacombe',
    images: ['/IMG_2907.jpg', 'IMG_2569.jpg', 'IMG_2918.jpg', 'IMG_2913.jpg', 'IMG_2576.jpg', 'IMG_2922.jpg'],
    description: 'Description Here'
  },
  {
    title: 'Consumer Unit Installation',
    location: 'Fairfield',
    images: ['/IMG_2985.jpg', 'IMG_2986.jpg', 'IMG_2984.jpg'],
    description: 'Description Here'
  },
  {
    title: 'Wiring & Lighting',
    location: 'Simonsbath',
    images: ['/IMG_2710.jpg', 'IMG_2712.jpg', 'IMG_2713.jpg', 'IMG_1858.jpg', 'IMG_1853.jpg', 'IMG_2711.jpg'],
    description: 'Description Here'
  },
  {
    title: 'Outdoor Lighting',
    location: 'Croyde',
    images: ['/IMG_0.jpg', 'IMG_13.jpg', 'IMG_14.jpg'],
    description: 'Description Here'
  },
  {
    title: 'Kitchen Rewire',
    location: 'Woolacombe',
    images: ['/IMG_123.jpg', 'IMG_124.jpg', 'IMG_125.jpg', 'IMG_126.jpg'],
    description: 'Description Here'
  },
  {
    title: 'Sub-Main Installation & Consumer Unit Upgrade',
    location: 'Ilfracombe',
    images: ['/IMG_15.jpg', '/IMG_16.jpg', 'IMG_17.jpg'],
    description: 'Description Here'
  },
  {
    title: 'New Build Wiring',
    location: 'Ilfracombe',
    images: ['/IMG_234.jpg', '/IMG_235.jpg', 'IMG_236.jpg', 'IMG_237.jpg'],
    description: 'Description Here'
  },
  {
    title: 'Kitchen Renovation',
    location: 'Wellington',
    images: ['/IMG_2.jpeg', 'IMG_323.jpg', 'IMG_324.jpg'],
    description: 'Description Here'
  },
  {
    title: 'Metal Conduit Install & Circuit Additions',
    location: 'Barnstaple',
    images: ['/IMG_445.jpg', 'IMG_446.jpg'],
    description: 'Description Here'
  },
  {
    title: 'Bathroom Wiring, Lighting & Underfloor Heating',
    location: 'Ilfracombe',
    images: ['/IMG_555.jpg', 'IMG_556.jpg', 'IMG_557.jpg'],
    description: 'Description Here'
  },
  {
    title: 'Flood Lighting',
    location: 'Ilfracombe',
    images: ['/IMG_666.jpg', 'IMG_667.jpg', 'IMG_668.jpg', 'IMG_669.jpg'],
    description: 'Description Here'
  },
  {
    title: 'EV Charger Supply',
    location: 'Lee, Devon',
    images: ['/IMG_888.jpg', 'IMG_889.jpg', 'IMG_668.jpg', 'IMG_890.jpg'],
    description: 'Description Here'
  },
]
</script>

<template>
  <section class="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 px-6 py-50 ">
    <div class="max-w-7xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold text-zinc-900 mb-4">Our Portfolio</h1>
      <p class="text-gray-700 max-w-2xl mx-auto">
        Take a look at some of the electrical work we've completed across the South West — from small domestic installs to complex commercial projects.
      </p>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition"
      >
        <!-- Carousel -->
        <UCarousel
            v-slot="{ item }"
            :items="project.images"
            loop
            :autoplay="{ delay: 5000 + index * 2000 }"
            :ui="{ item: 'basis-full' }"
            class="w-full"
        >
          <div class="h-96 w-full overflow-hidden rounded-t-xl">
            <img
                :src="item"
                alt=""
                class="w-full h-full object-cover"
            />
          </div>
        </UCarousel>

        <!-- Content -->
        <div class="p-4">
          <h2 class="text-lg font-semibold text-zinc-900">{{ project.title }}</h2>
          <p class="text-sm text-gray-500 mb-2">{{ project.location }}</p>
          <p class="text-sm text-gray-700">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
