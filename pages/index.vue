<!-- index.vue -->
<script setup>
import HeroSection from '~/components/HeroSection.vue'
import ServicesOverview from "~/components/ServicesOverview.vue"
import AboutOverview from "~/components/AboutOverview.vue"
import LinkBoxGrid from "~/components/LinkBoxGrid.vue"
import MapSection from "~/components/MapSection.vue"

useHead({
  title: 'Connected Electrical | Trusted Electricians in North Devon',
  meta: [
    {
      name: 'description',
      content: 'Connected Electrical provides expert electrical services for domestic, commercial, and industrial clients across North Devon and the South West.'
    },
    {
      property: 'og:title',
      content: 'Connected Electrical | Trusted Electricians in North Devon'
    },
    {
      property: 'og:description',
      content: 'From rewires to full installations — we deliver high-quality, compliant electrical solutions.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<template>
  <HeroSection />
  <ServicesOverview />
  <AboutOverview />
  <LinkBoxGrid />
  <MapSection />
</template>
