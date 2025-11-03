<script setup lang="ts">
import type { User } from '@/pages/user-crud/composables/useUsers';

const props = defineProps<{ users: User[] }>();
const emit = defineEmits<{ edit: [number]; delete: [number] }>();
</script>

<template>
  <table class="w-full border-collapse border my-2">
    <thead>
      <tr class="bg-gray-100">
        <th class="border p-2">ID</th>
        <th class="border p-2">Nombre</th>
        <th class="border p-2">Rol</th>
        <th class="border p-2">Activo</th>
        <th class="border p-2">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="u in users" :key="u.id">
        <td class="border p-2">{{ u.id }}</td>
        <td class="border p-2">{{ u.name }}</td>
        <td class="border p-2">{{ u.role }}</td>
        <td class="border p-2">
          <input type="checkbox" disabled :checked="u.active" />
        </td>
        <td class="border p-2 space-x-2">
          <button class="text-blue-600" @click="emit('edit', u.id)">Editar</button>
          <button class="text-red-600" @click="emit('delete', u.id)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
