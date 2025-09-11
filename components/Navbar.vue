<!-- Navbar.vue -->
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <header class="fixed w-full px-6 py-4 bg-white text-black z-50 shadow border-b border-gray-200">
    <div class="flex items-center justify-between">
      <!-- Left: Logo + WhatsApp -->
      <div class="flex items-center gap-4">
        <NuxtLink to="/" class="shrink-0" aria-label="Go to homepage">
          <img src="/LogoNoText.png" alt="Connected Electrical" class="h-12" />
        </NuxtLink>

        <!-- WhatsApp link with icon on the right -->
        <a
            href="https://wa.me/447447958382"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 text-base font-medium text-zinc-900 hover:text-green-600 whitespace-nowrap"
            aria-label="Chat with Connected Electrical on WhatsApp"
        >
          07447&nbsp;958&nbsp;382
          <UIcon name="i-mdi-whatsapp" class="w-5 h-5 text-green-500" />
        </a>
      </div>

      <!-- Right: Navigation Menu -->
      <UNavigationMenu
          highlight
          highlight-color="neutral"
          :items="items"
          class="text-lg gap-5"
          :ui="{ link: 'transition-colors hover:text-gray-400' }"
      />
    </div>
  </header>
</template>
