<script setup lang="ts">
const items = [
  { label: 'About', to: 'https://github.com/nuxtaid' },
]
</script>

<template>
  <div class="fixed h-auto w-full z-50">
    <nav class="flex justify-center w-full p-8">
      <div class="max-w-2xl w-full rounded-lg border border-neutral-400/20 p-4 backdrop-blur">
        <div class="flex justify-between items-center px-2">
          <NuxtLink to="/">
            <img
              src="/icon-green.svg"
              alt="Logo"
              class="w-8"
            >
          </NuxtLink>
          <ul class="grid grid-flow-col auto-cols-fr gap-1 text-sm text-center">
            <li
              v-for="item of items"
              :key="item.label"
            >
              <NuxtLink
                :to="item.to"
                :target="item.to.startsWith('http') ? '_blank' : undefined"
                class="hover:bg-gray-50/10 transition-colors duration-300 px-2 py-1.5 rounded-lg block"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
          <div class="flex items-center">
            <NuxtLink
              to="https://github.com/nuxtaid"
              target="_blank"
            >
              <Icon
                class="block w-6 h-6"
                name="i-mdi-github"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
