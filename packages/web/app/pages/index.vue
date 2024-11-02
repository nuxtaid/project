<script setup lang="ts">
useServerSeoMeta({
  title: 'Nuxt Aid',
  description: 'A community for developers and non-profits to learn, share, and build impactful solutions with Nuxt.',
})

defineOgImage({
  component: 'OgImageBase',
})
</script>

<template>
  <main>
    <section class="relative h-screen">
      <PlusAurora />
      <div class="relative flex flex-col gap-4 items-center h-full justify-center max-w-6xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight max-w-4xl">
          Building
          <span class="text-transparent bg-gradient-to-r from-[#00DC82] to-green-600 bg-clip-text">
            Meaningful
          </span>
          Solutions for a Better World
        </h1>
        <p class="mt-2 max-w-4xl text-neutral-400 text-lg">
          A community for developers and non-profits to learn, share, and build impactful solutions with Nuxt.
          <br>
          Stay tuned for updates and join us on this journey!
        </p>
      </div>
    </section>
  </main>
</template>
