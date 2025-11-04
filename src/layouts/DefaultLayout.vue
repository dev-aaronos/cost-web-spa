<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface DefaultLayoutProps {
  header?: string;
}

const { header = 'dev-aaronos' } = defineProps<DefaultLayoutProps>();
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="navbar bg-base-200 shadow-sm text-xl font-semibold link">
      <RouterLink to="/" class="hover:underline" title="Ir al inicio">
        {{ header }}
      </RouterLink>
    </header>

    <main class="flex-1">
      <div class="container mx-auto px-4 py-6">
        <slot />
      </div>
    </main>

    <footer class="p-4 bg-base-200 shadow-sm text-center text-sm">
      © {{ new Date().getFullYear() }} dev-aaronos
    </footer>
  </div>
</template>
