<!-- Navbar.vue -->
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio'},
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <header class="fixed w-full px-6 py-4 bg-white text-black z-50 shadow border-b border-gray-200">
    <div class="flex items-center justify-between">

      <!-- Left: Logo -->
      <div class="text-xl font-bold text-primary">
        <img src="/LogoNoText.png" alt="Connected Electrical" class="h-12 " />
      </div>

      <!-- Right: Navigation Menu -->
      <UNavigationMenu
          highlight
          highlight-color="neutral"
          :items="items"
          class="text-lg gap-5"
          :ui="{
              link: 'transition-colors hover:text-gray-400'
           }"
      />
    </div>
  </header>
</template>