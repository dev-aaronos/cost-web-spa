<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import LogoContainer from '@/components/LogoContainer.vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="flex justify-center align-middle">
    <Card>
      <CardHeader class="flex flex-wrap justify-center align-middle">
        <LogoContainer class="w-full" />
        <h1 class="font-medium">{{ msg }}</h1>
      </CardHeader>
      <CardContent class="flex flex-wrap justify-center align-middle">
        <div class="w-full flex justify-center">
          <Button @click="count++">count is {{ count }}</Button>
        </div>
      </CardContent>
      <CardContent class="flex flex-wrap justify-center align-middle">
        <p class="w-full flex justify-center">
          Edit
          <code>components/HelloWorld.vue</code> to test HMR
        </p>
        <p class="w-full flex justify-center">
          Check out
          <a variant="link" href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
          official Vue + Vite
          starter
        </p>
        <p class="w-full flex justify-center">
          Learn more about IDE Support for Vue in the
          <a variant="link" href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">
            Vue Docs Scaling up Guide
          </a>.
        </p>
        <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
