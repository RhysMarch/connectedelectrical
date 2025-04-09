<template>
  <section class="bg-gradient-to-r from-zinc-100 via-white to-zinc-100 border border-gray-300 text-black px-6 py-30">
    <div class="max-w-7xl mx-auto text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Our Services</h2>
      <p class="text-gray-600 text-base">
        We deliver high-quality electrical solutions across domestic, commercial, and industrial environments.
      </p>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Service Box -->
      <div
          v-for="(service, index) in services"
          :key="index"
          class="relative overflow-hidden bg-white text-black border border-black/20 rounded-xl p-6 shadow-sm hover:shadow-xl hover:ring-1 hover:ring-slate-100/30 transition-all duration-200 ease-in-out flex flex-col items-center text-center"
      >
        <!-- Sheen layer -->
        <div
            class="absolute inset-0 before:content-[''] before:absolute before:-left-full before:top-0 before:h-full before:w-1/3 before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent hover:before:animate-sheen"
        ></div>

        <!-- Icon & Text -->
        <Icon :name="service.icon" size="40" class="mb-4 text-black z-10" />
        <h3 class="text-xl font-semibold mb-2 z-10">{{ service.title }}</h3>
        <p class="text-sm text-gray-800 z-10 max-w-xs">
          {{ service.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Domestic',
    icon: 'mdi:home',
    description:
        'We provide safe, reliable domestic electrical services, including installations, rewiring, and energy-efficient upgrades.'
  },
  {
    title: 'Commercial',
    icon: 'mdi:office-building',
    description:
        'Tailored electrical solutions for offices, retail spaces, and commercial properties — designed for performance and compliance.'
  },
  {
    title: 'Industrial',
    icon: 'mdi:factory',
    description:
        'Robust electrical services for industrial sites — including maintenance, systems integration, and safety assessments.'
  }
]
</script>

<style scoped>
@keyframes sheen {
  0% {
    left: -100%;
  }
  100% {
    left: 150%;
  }
}

.hover\:before\:animate-sheen:hover::before {
  animation: sheen 1.5s ease-in-out forwards;
}
</style>
