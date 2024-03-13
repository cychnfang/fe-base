<script setup lang="ts">
  import TestComponent from '@components/test-component/index.vue'
  import { useCounterStore } from '@/store'

  const store = useCounterStore()
</script>

<template>
  <test-component></test-component>
  <svg-icon name="icon-copy"></svg-icon>

  <p>app: {{ store.count }}</p>
</template>

<style scoped></style>