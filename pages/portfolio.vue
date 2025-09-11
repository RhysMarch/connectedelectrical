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
      title: 'Mullacott Parks',
      location: 'North Devon',
      images: ['/Mullacott Parks 1.jpg', '/Mullacott Parks 2.jpg', '/Mullacott Parks 3.jpg', '/Mullacott Parks 4.jpg', '/Mullacott Parks 5.jpg', '/Mullacott Parks 6.jpg'],
      description: 'We liaised with the DNO to arrange a new three-phase, 200-amp-per-phase supply for a new field, providing the infrastructure for a future caravan site development. \n' +
          'Our team installed two 70mm five-core SWA cables, trenched to feed two distribution boards housed within an IP-rated GRP kiosk. Cabling was then installed to deliver power to 41 units across the field with each lodge installed on a TT stake [earth electrode] '
    },
    {
      title: 'Thatched Roof Rewiring',
      location: 'Devon',
      images: ['/Thatched Roof Rewiring 2.jpg', '/Thatched Roof Rewiring 1.jpg', '/Thatched Roof Rewiring 3.jpg', '/Thatched Roof Rewiring 4.jpg', '/Thatched Roof Rewiring 5.jpg'],
      description: 'Being based in Devon, thatched roof properties are a common feature. Our electricians have extensive knowledge of the specific regulations required when working on these homes or commercial properties. Shown here are a few examples of circuits we have rewired using metal containment to ensure both safety and compliance '
    },
    {
      title: 'Electrical Testing',
      location: 'Devon',
      images: ['/Electrical Testing 1.jpg'],
      description: 'Whether it’s a caravan lodge, home, school, or factory, we provide comprehensive electrical inspections for all types of premises. Our inspections can be carried out for insurance requirements, regulatory compliance, or simply to give you complete peace of mind about the safety of your installation. '
    },
    {
    title: 'Kitchen Renovations',
    location: 'North Devon',
    images: ['/Kitchen Renovations 1.jpg', '/Kitchen Renovations 2.jpg', '/Kitchen Renovations 3.jpg', '/Kitchen Renovations 4.jpg', '/Kitchen Renovations 5.jpg', '/Kitchen Renovations 6.jpg', '/Kitchen Renovations 7.jpg', '/Kitchen Renovations 8.jpg'],
    description: 'We work in close partnership with a number of kitchen fitters and builders across Devon, supporting both domestic and commercial projects. Our role typically includes installing new circuits, upgrading distribution boards, and ensuring that all electrical work meets the latest safety standards while complementing the design and functionality of each kitchen. Below is a selection of photos showcasing some of the kitchens we’ve had the privilege to work on. '
  },
  {
    title: 'Consumer Unit Installations',
    location: 'Devon',
    images: ['/Consumer unit Installation 1.jpg', 'Consumer unit Installation 2.jpg', 'Consumer unit Installation 3.jpg', 'Consumer unit Installation 4.jpg', 'Consumer unit Installation 5.jpg', 'Consumer unit Installation 6.jpg', 'Consumer unit Installation 7.jpg', 'Consumer unit Installation 8.jpg', 'Consumer unit Installation 9.jpg', 'Consumer unit Installation 10.jpg', 'Consumer unit Installation 11.jpg', 'Consumer unit Installation 12.jpg', "Consumer unit Installation 13.jpg"],
    description: 'These projects involved the replacement of the existing consumer unit with a modern 18th Edition–compliant metal unit, complete with full RCBO protection as standard and an integrated Surge Protection Device (SPD). This upgrade provides enhanced safety, reliability, and full compliance with current wiring regulations. '
  },
  {
    title: 'Extension and Kitchen Renovation',
    location: 'Simonsbath',
    images: ['/IMG_2710.jpg', 'IMG_2712.jpg', 'IMG_2713.jpg', 'IMG_1858.jpg', 'IMG_1853.jpg', 'IMG_2711.jpg'],
    description: 'For this home extension, we installed new electrical circuits to suit the updated layout. This included dedicated circuits for sockets, lighting, and key appliances like the oven and hob, ensuring a safe and efficient power supply for their growing family'
  },
  {
    title: 'Outdoor Lighting',
    location: 'Croyde',
    images: ['/Outdoor Light 1.jpg', 'Outdoor Light 2.jpg', 'Outdoor Light 3.jpg', 'Outdoor Light 4.jpg', 'Outdoor Light 5.jpg'],
    description: 'We were fortunate to work on this project for a client with a fantastic eye for detail. The installation of feature lighting was designed to beautifully enhance and amplify this outdoor dining space. '
  },
  {
    title: 'Sub-Main Installation for Double Garage',
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
    title: 'Metal Conduit Install and Joinery Equipment Install',
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
    images: ['/Flood Lighting 1.jpg', 'Flood Lighting 2.jpg', 'Flood Lighting 3.jpg', 'Flood Lighting 4.jpg', 'Flood Lighting 5.jpg'],
    description: 'I’m proud to volunteer with Ilfracombe Football Club, supporting the local community. Our work includes maintaining the pitch floodlighting, replacing metal halide lamps, and fitting new capacitors to ensure the pitch is fully illuminated once again. '
  },
  {
    title: 'EV Chargers',
    location: 'Lee, Devon',
    images: ['/EV Chargers 1.jpg', 'EV Chargers 2.jpg', 'EV Chargers 4.jpg'],
    description: 'Description Here'
  }
]

// Track autoplay state for each project carousel
const autoplayStates = ref({})

function startAutoplay(index) {
  autoplayStates.value[index] = { delay: 3000 } // autoplay only while hovered
}

function stopAutoplay(index) {
  autoplayStates.value[index] = false
}
</script>

<template>
  <section class="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 px-6 py-50">
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
          @mouseenter="startAutoplay(index)"
          @mouseleave="stopAutoplay(index)"
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
