<script setup lang="ts">
import type { User } from '@/pages/user-crud/composables/useUsers';

const props = defineProps<{ users: User[] }>();
const emit = defineEmits<{ edit: [number]; delete: [number] }>();
</script>

<template>
  <table class="table border">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Rol</th>
        <th>Activo</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody v-if="users.length === 0">
      <tr>
        <td colspan="3">No se han encontrado datos</td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr v-for="u in users" :key="u.id">
        <td>{{ u.id }}</td>
        <td>{{ u.name }}</td>
        <td>{{ u.role }}</td>
        <td>
          <input
            class="checkbox"
            type="checkbox"
            disabled
            :checked="u.active"
          />
        </td>
        <td class="flex flex-wrap gap-1.5">
          <button class="btn btn-primary" @click="emit('edit', u.id)">
            Editar
          </button>
          <button class="btn btn-error" @click="emit('delete', u.id)">
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
