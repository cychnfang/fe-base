<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useCounterStore } from '@/store/index'
  import { isRef } from 'vue'

  const countStore = useCounterStore()
  const { count } = storeToRefs(countStore)

  const handleClick = async () => {
    countStore.increment()
  }
</script>

<template>
  <div id="test" @click="handleClick">current count: {{ count }}</div>
  <!-- <fe-dialog v-model="visible"></fe-dialog> -->
</template>

<style scoped></style>
