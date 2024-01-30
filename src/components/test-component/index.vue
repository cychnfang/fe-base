<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const handleClick = () => {
  count.value++
}
</script>

<template>
  <div id="test" @click="handleClick">current count: {{ count }}</div>
</template>

<style scoped></style>
