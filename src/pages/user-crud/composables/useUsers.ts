import { ref, reactive, computed, watch, watchEffect } from 'vue';

export interface User {
  id: number;
  name: string;
  role: string;
  active: boolean;
}

interface Filter {
  search: string;
  role: string;
  activeOnly: boolean;
}

export function useUsers() {
  const users = ref<User[]>([
    { id: 1, name: 'Alice', role: 'Admin', active: true },
    { id: 2, name: 'Bob', role: 'User', active: false },
    { id: 3, name: 'Carlos', role: 'Editor', active: true },
  ]);

  const filter = reactive<Filter>({
    search: '',
    role: '',
    activeOnly: false,
  });

  const selectedUser = ref<User | null>(null);
  const isEditing = ref(false);

  // ✅ Computed: valores derivados (automáticamente reactivos)
  const filteredUsers = computed(() => {
    return users.value.filter((u) => {
      const matchesSearch = u.name
        .toLowerCase()
        .includes(filter.search.toLowerCase());
      const matchesRole = !filter.role || u.role === filter.role;
      const matchesActive = !filter.activeOnly || u.active;
      return matchesSearch && matchesRole && matchesActive;
    });
  });

  // ✅ Watch: ejecuta cuando cambian valores específicos
  watch(filter, () => {
    console.log('Filtros cambiaron:', filter);
  });

  // ✅ WatchEffect: ejecuta inmediatamente y cada vez que algo reactivo dentro cambie
  watchEffect(() => {
    document.title = `Usuarios activos: ${
      users.value.filter((u) => u.active).length
    }`;
  });

  function handleFilter(newFilter: Partial<Filter>) {
    Object.assign(filter, newFilter);
  }

  function handleCreate(user: User) {
    user.id = users.value.length + 1;
    users.value.push(user);
  }

  function handleEdit(id: number) {
    const user = users.value.find((u) => u.id === id);
    if (user) {
      selectedUser.value = { ...user };
      isEditing.value = true;
    }
  }

  function handleDelete(id: number) {
    users.value = users.value.filter((u) => u.id !== id);
  }

  function handleSave(user: User) {
    if (isEditing.value && selectedUser.value) {
      const index = users.value.findIndex(
        (u) => u.id === selectedUser.value!.id,
      );
      users.value[index] = { ...user, id: selectedUser.value.id };
    } else {
      handleCreate(user);
    }
    isEditing.value = false;
    selectedUser.value = null;
  }

  function handleCancel() {
    isEditing.value = false;
    selectedUser.value = null;
  }

  return {
    users,
    filteredUsers,
    filter,
    selectedUser,
    isEditing,
    handleFilter,
    handleCreate,
    handleEdit,
    handleDelete,
    handleSave,
    handleCancel,
  };
}
