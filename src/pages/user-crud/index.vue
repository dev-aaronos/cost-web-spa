<script setup lang="ts">
import { ref } from 'vue';
import FilterArea from '@/pages/user-crud/components/FilterArea.vue';
import UserTable from '@/pages/user-crud/components/UserTable.vue';
import UserForm from '@/pages/user-crud/components/UserForm.vue';
import { useUsers } from '@/pages/user-crud/composables/useUsers';

const {
  // users,
  filteredUsers,
  filter,
  selectedUser,
  isEditing,
  handleFilter,
  // handleCreate,
  handleEdit,
  handleDelete,
  handleSave,
  handleCancel,
} = useUsers();

const showForm = ref(false);

function openCreateForm() {
  selectedUser.value = null;
  showForm.value = true;
}

function openEditForm(userId: number) {
  handleEdit(userId);
  showForm.value = true;
}
</script>

<template>
  <div>
    <div>
      <h1 class="text-2xl font-semibold">Gestión de usuarios</h1>
    </div>
    <div>
      <!-- Área de filtros -->
      <FilterArea :filter="filter" @change="handleFilter" />

      <!-- Botón crear -->
      <button class="px-4 py-2 my-2 bg-blue-600 text-white rounded" @click="openCreateForm">
        Nuevo usuario
      </button>

      <!-- Tabla -->
      <UserTable :users="filteredUsers" @edit="openEditForm" @delete="handleDelete" />

      <!-- Formulario modal -->
      <UserForm v-if="showForm" :user="selectedUser" :isEditing="isEditing" @save="handleSave" @cancel="handleCancel"
        @close="showForm = false" />
    </div>
  </div>
</template>
