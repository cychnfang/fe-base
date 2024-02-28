<script setup lang="ts">
  import { useQrcode } from '@/hooks/useQrcode'
  import { ref } from 'vue'

  const url = ref('1231')
  const [qrcode, updateQrcode] = useQrcode(url)

  const handleChangeQrcode = () => {
    updateQrcode('baidu.com')
  }
</script>

<template>
  <div class="qrcode-ganerate">
    <img class="qrcode" :src="qrcode" alt="" />
    <input type="text" v-model="url" />
    <span @click="handleChangeQrcode">click</span>
  </div>
</template>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .qrcode-ganerate {
    width: 300px;
    height: 500px;
    background-color: aqua;
    .qrcode {
      display: block;
      width: 250px;
      margin: 10px auto;
    }
  }
</style>
