<script setup lang="ts">
import { reactive, watch } from 'vue';

interface Filter {
  search: string;
  role: string;
  activeOnly: boolean;
}

const props = defineProps<{ filter: Filter }>();
const emit = defineEmits<{ change: [Partial<Filter>] }>();

const localFilter = reactive({ ...props.filter });
const roles = [
  { label: 'Todos', value: '' },
  { label: 'Admin', value: 'Admin' },
  { label: 'User', value: 'User' },
  { label: 'Editor', value: 'Editor' }
];

// 🔄 Watch: cuando cambian inputs, emitimos el cambio al padre
watch(localFilter, (newVal) => emit('change', newVal), { deep: true });
</script>

<template>
  <div class="flex items-center gap-4 ">
    <input type="text" placeholder="Buscar..." v-model="localFilter.search" class=" grow border p-2 rounded" />

    <select v-model="localFilter.role" class=" grow border p-2 rounded">
      <option v-for="role in roles" :key="role.label" :value="role.value">{{ role.label }}</option>
    </select>

    <label class=" grow flex items-center gap-2">
      <input type="checkbox" v-model="localFilter.activeOnly" />
      Solo activos
    </label>
  </div>
</template>
