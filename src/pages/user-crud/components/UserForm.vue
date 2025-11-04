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
  { immediate: true },
);

function handleSubmit() {
  if (passwords.password !== passwords.confirm) {
    alert('Las contraseñas no coinciden');
    return;
  }
  emit('save', form);
  emit('close');
}

const label: string = props.isEditing ? 'Editar usuario' : 'Nuevo usuario';
</script>

<template>
  <!-- Botón crear -->
  <button class="btn btn-outline my-2" onclick="modalForm.showModal()">
    {{ label }}
  </button>
  <dialog id="modalForm" class="modal">
    <div class="modal-box">
      <form @submit.prevent="handleSubmit" class="space-y-4 space-x-2">
        <h2 class="text-lg font-semibold">
          {{ label }}
        </h2>

        <div class="modal-action">
          <input
            class="input"
            type="text"
            placeholder="Nombre"
            v-model="form.name"
            required
          />

          <select class="select" v-model="form.role">
            <option value="">Seleccionar rol</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Editor">Editor</option>
          </select>

          <label class="flex items-center gap-2">
            <input class="checkbox" type="checkbox" v-model="form.active" />
            Activo
          </label>

          <input
            type="password"
            placeholder="Contraseña"
            v-model="passwords.password"
            class="input"
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            v-model="passwords.confirm"
            class="input"
          />

          <div class="flex justify-end gap-2">
            <button type="button" class="btn btn-error" @click="emit('cancel')">
              Cancelar
            </button>
            <button type="submit" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </form>
    </div>
  </dialog>
</template>
