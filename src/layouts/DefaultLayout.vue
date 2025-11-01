<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface DefaultLayoutProps { header?: string }

const { header = 'dev-aaronos' } = defineProps<DefaultLayoutProps>()


</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <header class="p-4 bg-gray-800 text-white text-xl font-semibold">
      <RouterLink to="/" class="hover:underline" title="Ir al inicio">
        {{ header }}
      </RouterLink>
    </header>

    <main class="flex-1">
      <div class="container mx-auto px-4 py-6">
        <slot />
      </div>
    </main>

    <footer class="p-4 text-center text-sm text-gray-500 border-t">
      © {{ new Date().getFullYear() }} dev-aaronos
    </footer>
  </div>
</template>
