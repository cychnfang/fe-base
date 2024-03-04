<script setup lang="ts">
  import TestComponent from '@components/test-component/index.vue'
  import { useCounterStore } from '@/store'

  const store = useCounterStore()
</script>

<template>
  <test-component></test-component>
  <p>app: {{ store.count }}</p>
</template>

<style scoped></style>
