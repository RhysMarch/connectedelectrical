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
      images: ['/MullacottParks1.jpg', '/MullacottParks2.jpg', '/MullacottParks3.jpg', '/MullacottParks4.jpg', '/MullacottParks5.jpg', '/MullacottParks6.jpg'],
      description: 'We liaised with the DNO to arrange a new three-phase, 200-amp-per-phase supply for a new field, providing the infrastructure for a future caravan site development. \n' +
          'Our team installed two 70mm five-core SWA cables, trenched to feed two distribution boards housed within an IP-rated GRP kiosk. Cabling was then installed to deliver power to 41 units across the field with each lodge installed on a TT stake [earth electrode] '
    },
    {
      title: 'Thatched Roof Rewiring',
      location: 'Devon',
      images: ['/ThatchedRoofRewiring2.jpg', '/ThatchedRoofRewiring1.jpg', '/ThatchedRoofRewiring3.jpg', '/ThatchedRoofRewiring4.jpg', '/ThatchedRoofRewiring5.jpg'],
      description: 'Being based in Devon, thatched roof properties are a common feature. Our electricians have extensive knowledge of the specific regulations required when working on these homes or commercial properties. Shown here are a few examples of circuits we have rewired using metal containment to ensure both safety and compliance '
    },
    {
      title: 'Electrical Testing',
      location: 'Devon',
      images: ['/ElectricalTesting1.jpg'],
      description: 'Whether it’s a caravan lodge, home, school, or factory, we provide comprehensive electrical inspections for all types of premises. Our inspections can be carried out for insurance requirements, regulatory compliance, or simply to give you complete peace of mind about the safety of your installation. '
    },
    {
    title: 'Kitchen Renovations',
    location: 'North Devon',
    images: ['/KitchenRenovations1.jpg', '/KitchenRenovations2.jpg', '/KitchenRenovations3.jpg', '/KitchenRenovations4.jpg', '/KitchenRenovations5.jpg', '/KitchenRenovations6.jpg', '/KitchenRenovations7.jpg', '/KitchenRenovations8.jpg'],
    description: 'We work in close partnership with a number of kitchen fitters and builders across Devon, supporting both domestic and commercial projects. Our role typically includes installing new circuits, upgrading distribution boards, and ensuring that all electrical work meets the latest safety standards while complementing the design and functionality of each kitchen. Below is a selection of photos showcasing some of the kitchens we’ve had the privilege to work on. '
  },
  {
    title: 'Consumer Unit Installations',
    location: 'Devon',
    images: ['/ConsumerUnitInstallation1.jpg', 'ConsumerUnitInstallation2.jpg', 'ConsumerUnitInstallation3.jpg', 'ConsumerUnitInstallation4.jpg', 'ConsumerUnitInstallation5.jpg', 'ConsumerUnitInstallation6.jpg', 'ConsumerUnitInstallation7.jpg', 'ConsumerUnitInstallation8.jpg', 'ConsumerUnitInstallation9.jpg', 'ConsumerUnitInstallation10.jpg', 'ConsumerUnitInstallation11.jpg', 'ConsumerUnitInstallation12.jpg', "ConsumerUnitInstallation13.jpg"],
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
    images: ['/OutdoorLight1.jpg', 'OutdoorLight2.jpg', 'OutdoorLight3.jpg', 'OutdoorLight4.jpg', 'OutdoorLight5.jpg'],
    description: 'We were fortunate to work on this project for a client with a fantastic eye for detail. The installation of feature lighting was designed to beautifully enhance and amplify this outdoor dining space. '
  },
  {
    title: 'Sub-Main Installation for Double Garage',
    location: 'Ilfracombe',
    images: ['/IMG_15.jpg', '/IMG_16.jpg', 'IMG_17.jpg'],
    description: 'We were contracted to install the full electrical system for a new double garage. This included running a new SWA armoured sub-main cable from the main property, providing a reliable and safe power supply. From the new consumer unit in the garage, we fitted circuits for a small workshop, integrated LED strip lights, and general-purpose sockets, as well as installing external LED floodlights for enhanced security'
  },
  {
    title: 'New Build Wiring',
    location: 'Ilfracombe',
    images: ['/IMG_234.jpg', '/IMG_235.jpg', 'IMG_236.jpg', 'IMG_237.jpg'],
    description: 'From single homes to large developments, our team handles all aspects of new build electrical installations. We work directly from architectural plans and coordinate with other contractors to ensure a quality, on-time finish.'
  },
  {
    title: 'Metal Conduit Install and Joinery Equipment Install',
    location: 'Barnstaple',
    images: ['/IMG_445.jpg', 'IMG_446.jpg'],
    description: 'We installed new 3-phase power for a client\'s woodworking machinery. Our expertise includes working with metal containment, which we can manually fabricate to provide a bespoke and highly durable solution.'
  },
  {
    title: 'Bathroom Wiring, Lighting & Underfloor Heating',
    location: 'Ilfracombe',
    images: ['/IMG_555.jpg', 'IMG_556.jpg', 'IMG_557.jpg'],
    description: 'This project involved installing electric underfloor heating to create a modern, high-spec bathroom. We worked in close coordination with the tiler to ensure precise fitting and a flawless finish. Additionally, we altered the existing electrical circuits to accommodate the new layout and features, delivering a beautiful and functional space.'
  },
  {
    title: 'Flood Lighting',
    location: 'Ilfracombe',
    images: ['/FloodLighting1.jpg', 'FloodLighting2.jpg', 'FloodLighting3.jpg', 'FloodLighting4.jpg', 'FloodLighting5.jpg'],
    description: 'I’m proud to volunteer with Ilfracombe Football Club, supporting the local community. Our work includes maintaining the pitch floodlighting, replacing metal halide lamps, and fitting new capacitors to ensure the pitch is fully illuminated once again. '
  },
  {
    title: 'EV Chargers',
    location: 'Lee, Devon',
    images: ['/EVChargers1.jpg', 'EVChargers4.jpg'],
    description: 'From single domestic chargers to large car park installations, we can provide a complete and professional service. Our team offers a specialist design and tailored installation process to ensure the ideal solution for your specific needs, whether for a home, business, or public space.'
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
