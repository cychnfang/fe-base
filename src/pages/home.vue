<script setup lang="ts">
  import TestComponent from '@components/test-component/index.vue'
  import { useCounterStore } from '@/store'

  import URI from 'urijs'


  console.log(URI('?auth_appid=survey_CNpfmHCyWtIcz3v8z0KUL7iX-VKOLTrTBJECovvaG2xU&game_biz=plat_os&surveyId=1114451&format=1&format=2').query(true), '----')
  const store = useCounterStore()
</script>

<template>
  <test-component></test-component>
  <p>app: {{ store.count }}</p>
</template>

<style scoped></style>
