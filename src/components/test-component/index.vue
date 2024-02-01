<script setup lang="ts">
import useCounter from '@/hooks/useCount'
const [count, update] = useCounter(1)
</script>

<template>
  <div id="test" @click="update">current count: {{ count }}</div>
</template>

<style scoped></style>
