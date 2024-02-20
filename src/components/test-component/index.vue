<script setup lang="ts">
import { ref } from 'vue'
import useCounter from '@/hooks/useCount'
import feDialog from '@/components/confirm-dialog/index.vue'
const [count, update] = useCounter(1)

const visible = ref(false)

const handleClick = () => {
  visible.value = true
}
</script>

<template>
  <div id="test" @click="handleClick">current count: {{ count }}</div>
  <fe-dialog v-model="visible"></fe-dialog>
</template>

<style scoped></style>
