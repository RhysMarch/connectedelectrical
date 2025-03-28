<template>
  <section class="bg-white px-6 py-16 pt-30">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-10 text-zinc-900">Get in Touch</h1>

      <form
          action="https://formsubmit.co/info@connectedelectricalSW.co.uk"
          method="POST"
          class="space-y-6 bg-white p-2 rounded-xl shadow"
      >
        <!-- Hidden config fields -->
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="true" />
        <input type="hidden" name="_next" value="https://connectedelectrical.co.uk/thank-you" />

        <!-- Honeypot field -->
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
              rows="3"
              class="w-full border border-zinc-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-zinc-400"
          ></textarea>
        </div>

        <!-- reCAPTCHA -->
        <div class="pt-4">
          <div class="g-recaptcha" data-sitekey="6LcFAwMrAAAAAJJwQT8gWVHb9lNSRXj_UoRLXVM-"></div>
        </div>

        <!-- Submit -->
        <div class="text-center pt-6">
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

<!-- Load reCAPTCHA script -->
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
