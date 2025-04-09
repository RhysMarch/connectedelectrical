<template>
  <section class="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 px-6 pb-32 ">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div
            v-for="(item, index) in links"
            :key="index"
            class="bg-white text-black p-6 rounded-xl border border-black/20 shadow-sm hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
        >
          <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 class="text-2xl font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-sm text-gray-700 mb-6">
            {{ item.description }}
          </p>
          <NuxtLink
              :to="item.link"
              class="mt-auto text-sm bg-zinc-900 text-white font-semibold px-4 py-2 rounded hover:bg-zinc-800 transition"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const links = [
  {
    title: 'About Us',
    description:
        'Learn more about our team, values, and commitment to delivering quality electrical services.',
    link: '/about',
    image: '/IMG_5.jpg',
  },
  {
    title: 'Services',
    description:
        'Discover the full range of electrical services we offer for homes, businesses, and industrial clients.',
    link: '/services',
    image: '/IMG_9.jpg',
  },
  {
    title: 'Portfolio',
    description:
        'Explore our past projects across residential, commercial, and industrial sectors.',
    link: '/portfolio',
    image: '/IMG_1.jpeg',
  },
]
</script>
