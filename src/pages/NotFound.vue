<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="bg-emerald-700 text-neutral-50 rounded-md gap-y-1.5">
    <div class="flex justify-center">
      <h6 class="font-bold">Contenido no encontrado!</h6>
    </div>
    <div class="flex justify-center">
      <p>Al parecer la ruta que estas buscando no existe...</p>
    </div>
    <div class="flex justify-center">
      <RouterLink to="/" class="underline font-bold" title="Ir al inicio">
        Volver
      </RouterLink>
    </div>
  </div>
</template>
