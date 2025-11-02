<script setup lang="ts">
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { RouterLink } from 'vue-router';
</script>

<template>
  <Card class="bg-emerald-700 text-neutral-50">
    <CardHeader class="flex justify-center">
      <h6 class="font-bold">Contenido no encontrado!</h6>
    </CardHeader>
    <CardContent class="flex justify-center">
      <p>Al parecer la ruta que estas buscando no existe...</p>
    </CardContent>
    <CardFooter class="flex justify-center">
      <RouterLink to="/" class="underline font-bold" title="Ir al inicio">
        Volver
      </RouterLink>
    </CardFooter>
  </Card>
</template>
