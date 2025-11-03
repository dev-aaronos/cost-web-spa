<script setup lang="ts">
import { reactive, watch } from 'vue';
import type { User } from '@/pages/user-crud/composables/useUsers';

const props = defineProps<{
  user: User | null;
  isEditing: boolean;
}>();

const emit = defineEmits<{
  save: [User];
  cancel: [];
  close: [];
}>();

const form = reactive<User>({
  id: 0,
  name: '',
  role: '',
  active: false,
});

const passwords = reactive({ password: '', confirm: '' });

// Llenar el form si hay usuario seleccionado
watch(
  () => props.user,
  (u) => {
    if (u) Object.assign(form, u);
    else Object.assign(form, { id: 0, name: '', role: '', active: false });
  },
  { immediate: true }
);

function handleSubmit() {
  if (passwords.password !== passwords.confirm) {
    alert('Las contraseñas no coinciden');
    return;
  }
  emit('save', form);
  emit('close');
}
</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center">
    <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded shadow-lg space-y-4 w-96">
      <h2 class="text-lg font-semibold">
        {{ isEditing ? 'Editar usuario' : 'Nuevo usuario' }}
      </h2>

      <input type="text" placeholder="Nombre" v-model="form.name" class="w-full border p-2 rounded" required />

      <select v-model="form.role" class="w-full border p-2 rounded">
        <option value="">Seleccionar rol</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Editor">Editor</option>
      </select>

      <label class="flex items-center gap-2">
        <input type="checkbox" v-model="form.active" />
        Activo
      </label>

      <input type="password" placeholder="Contraseña" v-model="passwords.password" class="w-full border p-2 rounded" />
      <input type="password" placeholder="Confirmar contraseña" v-model="passwords.confirm"
        class="w-full border p-2 rounded" />

      <div class="flex justify-end gap-2">
        <button type="button" class="px-3 py-1 border rounded" @click="emit('cancel')">
          Cancelar
        </button>
        <button type="submit" class="px-3 py-1 bg-blue-600 text-white rounded">
          Guardar
        </button>
      </div>
    </form>
  </div>
</template>
