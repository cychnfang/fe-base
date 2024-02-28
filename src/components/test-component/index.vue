<script setup lang="ts">
  import useCounter from '@/hooks/useCount'
  import FeDialog from '@/components/confirm-dialog/index'
  const [count, update] = useCounter(1)

  const handleClick = async () => {
    const res = await FeDialog({ count: 2342 })
    console.log(res, '----')
  }
</script>

<template>
  <div id="test" @click="handleClick">current count: {{ count }}</div>
  <!-- <fe-dialog v-model="visible"></fe-dialog> -->
</template>

<style scoped></style>
