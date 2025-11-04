<script setup lang="ts">
import { ref } from 'vue';

interface IExample {
  id: number;
  name: string;
  description: string;
  path: string;
}

const examples = ref<IExample[]>([
  {
    id: 1,
    name: 'Ejercicio 1',
    description:
      'Este es un ejercicio para entender la reactividad entre componentes',
    path: '/ejercicio-1',
  },
  {
    id: 2,
    name: 'Ejercicio 2',
    description:
      'Este es un ejercicio para entender la reactividad entre componentes',
    path: '/ejercicio-2',
  },
  {
    id: 3,
    name: 'Ejercicio 3',
    description:
      'Este es un ejercicio para entender la reactividad entre componentes',
    path: '/ejercicio-3',
  },
  {
    id: 4,
    name: 'Ejercicio 4',
    description:
      'Este es un ejercicio para entender la reactividad entre componentes',
    path: '/ejercicio-4',
  },
  {
    id: 5,
    name: 'Ejercicio 5',
    description:
      'Este es un ejercicio para entender la reactividad entre componentes',
    path: '/ejercicio-5',
  },
  {
    id: 6,
    name: 'Ejercicio 6',
    description:
      'Este es un ejercicio para entender la reactividad entre componentes',
    path: '/ejercicio-6',
  },
]);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="item in examples"
      :key="item.id"
      class="bg-emerald-700 text-neutral-50 shadow-2xl hover:shadow-emerald-500/50 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-md"
    >
      <div class="card">
        <div class="card-body">
          <h6 class="font-bold">{{ item.name }}</h6>
          <p>{{ item.description }}</p>
          <RouterLink
            :to="item.path"
            class="flex justify-end font-bold link"
            title="Ir al inicio"
          >
            Vamos...
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
