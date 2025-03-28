<template>
  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-zinc-200 via-white to-zinc-200 shadow-[inset_0_8px_12px_-6px_rgba(0,0,0,0.1),inset_0_-8px_12px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
    <div class="absolute inset-0">
      <img
          src="/STOCK_IMAGE.jpeg"
          alt="Electrician at work"
          class="w-full h-full object-cover opacity-30"
      />
    </div>
    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <h1 class="text-5xl font-bold text-black mb-4">About Connected Electrical</h1>
      <p class="text-lg text-black max-w-2xl mx-auto">
        Trusted electrical contractors serving North Devon and the South West, with a commitment to quality, professionalism, and customer satisfaction.
      </p>
    </div>
  </section>

  <!-- Who Are We -->
  <section class="bg-white px-6 py-20">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold text-zinc-900 mb-4">Who Are We</h2>
        <p class="text-gray-700 leading-relaxed">
          Connected Electrical Contractors maintain a consistent level of high-quality workmanship and professionalism throughout every stage of your journey with us. Our team is trained across all areas of the industry — domestic, commercial and industrial — so you know you can trust our judgement and skill, no matter the job.
        </p>
      </div>
      <div>
        <img src="/IMG_12.jpg" alt="Connected Electrical Team" class="rounded-lg shadow-md h-80 w-full object-cover" />
      </div>
    </div>
  </section>

  <!-- Where We Work -->
  <section class="bg-white w-full px-6 py-20 ">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <div class="rounded-lg shadow-md h-80 w-full overflow-hidden">
          <iframe
              class="w-full h-full"
              style="border:0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.4365945416257!2d-4.134119500000001!3d51.20155570000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c2697912c1ed5%3A0x39717beb6b1e09cc!2sLangleigh%20Park%2C%20Ilfracombe!5e1!3m2!1sen!2suk!4v1743183734698!5m2!1sen!2suk"
          ></iframe>
        </div>
      </div>
      <div>
        <h2 class="text-3xl font-bold text-zinc-900 mb-6">Where We Work</h2>
        <p class="text-gray-700 max-w-xl">
          Based in Ilfracombe, North Devon, we proudly serve clients throughout the South West. Whether it’s a small domestic job or a large-scale commercial project — we’re here to help.
        </p>
      </div>
    </div>
  </section>

  <!-- Idea to Handover Section -->
  <section class="bg-white px-6 py-20">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold text-zinc-900 mb-4">Idea to Handover</h2>
        <p class="text-gray-700 leading-relaxed">
          We don’t just carry out the work — we help bring your vision to life. From initial concepts through detailed planning and liaising with DNOs and ground workers, we manage full-scale installations right through to final handover. Whether it's a new build, a renovation, or even an entire campsite design, we’ve got the expertise to take your project from idea to reality.
        </p>
      </div>
      <div>
        <img src="/IMG_4.jpg" alt="Connected Electrical Team" class="rounded-lg shadow-md h-80 w-full object-cover" />
      </div>
    </div>
  </section>

  <!-- Accreditations -->
  <section class="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 px-6 py-20 shadow-[inset_0_8px_12px_-6px_rgba(0,0,0,0.1),inset_0_-8px_12px_-6px_rgba(0,0,0,0.1)]">
    <div class="max-w-4xl mx-auto text-center space-y-6">
      <h2 class="text-3xl font-bold text-zinc-900">Accreditations & Standards</h2>
      <p class="text-gray-700">
        All our electricians are qualified to the highest standards, working to the latest British Standards (BS 7671:2018) and regulations. We're a fully approved NICEIC contractor.
      </p>
      <div class="flex justify-center">
        <img src="/niceic-logo.png" alt="NICEIC Approved Contractor" class="h-40 object-contain" />
      </div>
    </div>
  </section>
</template>
