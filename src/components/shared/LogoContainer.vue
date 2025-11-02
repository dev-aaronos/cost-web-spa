<script setup lang="ts"></script>

<template>
  <div class="flex flex-wrap gap-1.5 justify-center align-middle">
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo" alt="Vue logo" />
    </a>
  </div>
</template>

<style scoped>
@reference "@/style.css";

.logo {
  @apply h-24 p-6 hover:drop-shadow-blue-600;
}
</style>
