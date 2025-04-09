<!-- pages/services.vue -->
<script setup>
useHead({
  title: 'Electrical Services | Connected Electrical',
  meta: [
    {
      name: 'description',
      content: 'Discover the full range of electrical services we offer for domestic, commercial, and industrial clients in North Devon and the South West.'
    },
    {
      property: 'og:title',
      content: 'Electrical Services'
    },
    {
      property: 'og:description',
      content: 'From installations to inspections, we offer trusted electrical solutions across all sectors.'
    }
  ]
})

const services = [
  {
    title: 'Full & Partial Rewires',
    description: 'Whether it is re-wiring an existing premises or a single room, we offer safe and compliant re-wiring services for commercial and residential premises.'
  },
  {
    title: 'Consumer Unit Upgrades',
    description: 'We replace outdated fuse boards with new consumer units that meet current standards and increase safety.'
  },
  {
    title: 'Lighting Installation',
    description: 'From modern indoor lighting to secure outdoor fittings, we design and install lighting to meet your needs.'
  },
  {
    title: 'EV Charger Installation',
    description: 'We install electric car charging points for residential and commercial premises.'
  },
  {
    title: 'Fault Finding & Repairs',
    description: 'We diagnose and repair electrical faults with effectiveness in restoring safety and functionality to your property.'
  },
  {
    title: 'New Builds & Extensions',
    description: 'We undertake complete electrical installations for new developments, extensions, and refurbishments.'
  }
]
</script>

<template>
  <section class="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 px-6 py-50">
    <div class="max-w-7xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold text-zinc-900 mb-4">Our Services</h1>
      <p class="text-gray-700 max-w-2xl mx-auto">
        We offer a complete range of electrical services across North Devon and the South West — tailored for both residential, commercial and industrial clients.
      </p>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition duration-300"
      >
        <h2 class="text-lg font-semibold text-zinc-900 mb-2">{{ service.title }}</h2>
        <p class="text-sm text-gray-700">{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>
