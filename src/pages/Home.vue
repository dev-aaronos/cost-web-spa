<script setup lang="ts">
import LogoContainer from '@/components/shared/LogoContainer.vue';
import MenuGrid from '@/components/shared/MenuGrid.vue';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const welcomeMessage: string = 'Hola amigo';
</script>

<template>
  <div>
    <div>
      <LogoContainer />
    </div>
    <div>
      <h1 class="flex justify-center align-center font-bold mb-2">
        {{ welcomeMessage }}
      </h1>
      <MenuGrid />
    </div>
  </div>
</template>
