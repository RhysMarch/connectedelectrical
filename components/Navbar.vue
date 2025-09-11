<!-- Navbar.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

const mobileOpen = ref(false)
</script>

<template>
  <header class="fixed w-full px-6 py-4 bg-white text-black z-50 shadow border-b border-gray-200">
    <div class="flex items-center justify-between">
      <!-- Left: Logo + Phone -->
      <div class="flex items-center gap-4">
        <NuxtLink to="/" class="shrink-0" aria-label="Go to homepage">
          <img src="/LogoNoText.png" alt="Connected Electrical" class="h-12" />
        </NuxtLink>

        <!-- Desktop: phone link -->
        <a
            href="tel:+447447958382"
            class="hidden md:inline text-base font-semibold text-gray-900 hover:text-primary transition-colors underline underline-offset-4"
            aria-label="Call Connected Electrical on 07447 958 382"
        >
          07447&nbsp;958&nbsp;382
        </a>

        <!-- Mobile: WhatsApp link, same phone text -->
        <a
            href="https://wa.me/447447958382?text=Hi%20Connected%20Electrical%2C%20I%27d%20like%20a%20quote."
            class="inline md:hidden text-base font-semibold text-gray-900 hover:text-primary transition-colors underline underline-offset-4"
            aria-label="Message Connected Electrical on WhatsApp"
        >
          07447&nbsp;958&nbsp;382
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex">
        <UNavigationMenu
            highlight
            highlight-color="neutral"
            :items="items"
            class="text-lg gap-5"
            :ui="{ link: 'transition-colors hover:text-gray-400' }"
        />
      </div>

      <!-- Mobile Hamburger -->
      <button
          class="md:hidden p-2 rounded hover:bg-gray-100"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle navigation"
      >
        <UIcon name="i-heroicons-bars-3" class="w-6 h-6" v-if="!mobileOpen" />
        <UIcon name="i-heroicons-x-mark" class="w-6 h-6" v-else />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
          v-if="mobileOpen"
          class="md:hidden mt-4 bg-white border-t border-gray-200 shadow-inner p-4 space-y-4"
      >
        <UNavigationMenu
            orientation="vertical"
            highlight
            highlight-color="neutral"
            :items="items"
            class="flex flex-col gap-3 text-lg"
            :ui="{ link: 'transition-colors hover:text-gray-400' }"
        />
      </div>
    </transition>
  </header>
</template>
