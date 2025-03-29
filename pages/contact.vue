<template>
  <section class="relative bg-gradient-to-r from-zinc-200 via-white to-zinc-200 px-6 py-16 pt-30 shadow-[0_-8px_12px_-6px_rgba(0,0,0,0.08),0_8px_12px_-6px_rgba(0,0,0,0.08)] overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img src="/ST_1.jpg" alt="Contact background" class="w-full h-full object-cover opacity-30" />
      <div class="absolute inset-0 bg-black/60"></div> <!-- Optional dark overlay -->
    </div>

    <div class="max-w-3xl mx-auto relative z-10">
      <form
          action="https://formsubmit.co/info@connectedelectricalSW.co.uk"
          method="POST"
          class="space-y-6 bg-white p-8 rounded-xl shadow"
      >
        <!-- Heading -->
        <h1 class="text-3xl font-bold text-center mb-6 text-zinc-900">Get in Touch</h1>

        <!-- Hidden config -->
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="true" />
        <input type="hidden" name="_next" value="https://connectedelectricalSW.co.uk/thank-you" />
        <input type="text" name="_honey" class="hidden" tabindex="-1" autocomplete="off" />

        <!-- Name -->
        <div>
          <label class="block text-sm font-medium text-zinc-700 mb-1">Name *</label>
          <input
              type="text"
              name="name"
              required
              class="w-full border border-zinc-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-zinc-400"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-zinc-700 mb-1">Email *</label>
          <input
              type="email"
              name="email"
              required
              class="w-full border border-zinc-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-zinc-400"
          />
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-sm font-medium text-zinc-700 mb-1">Phone Number *</label>
          <input
              type="tel"
              name="phone"
              required
              class="w-full border border-zinc-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-zinc-400"
          />
        </div>

        <!-- Message -->
        <div>
          <label class="block text-sm font-medium text-zinc-700 mb-1">Message *</label>
          <textarea
              name="message"
              required
              rows="6"
              class="w-full border border-zinc-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-zinc-400"
          ></textarea>
        </div>

        <!-- reCAPTCHA -->
        <div class="pt-2 flex justify-center">
          <div class="g-recaptcha" data-sitekey="6LcFAwMrAAAAAJJwQT8gWVHb9lNSRXj_UoRLXVM-"></div>
        </div>


        <!-- Submit -->
        <div class="text-center pt-1">
          <button
              type="submit"
              class="bg-zinc-900 text-white font-semibold px-6 py-3 rounded hover:bg-zinc-800 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
useHead({
  script: [
    {
      src: 'https://www.google.com/recaptcha/api.js',
      async: true,
      defer: true
    }
  ]
})
</script>
