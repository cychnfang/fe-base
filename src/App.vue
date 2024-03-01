<script setup lang="ts">
  import { useQrcode } from '@/hooks/useQrcode'
  import { ref } from 'vue'

  const url = ref('1231')
  const [qrcode] = useQrcode(url)
</script>

<template>
  <div :class="['qrcode-ganerate']">
    <img class="qrcode" :src="qrcode" alt="" />
    <el-input type="textarea" v-model="url" class="url-input"></el-input>
  </div>
</template>

<style lang="scss">
  @import '@/scss/themes.scss';
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .qrcode-ganerate {
    padding: 10px;
    width: 300px;
    height: 500px;
    overflow: hidden;
    border-radius: 5px;
    .qrcode {
      width: 280px;
      height: 280px;
      width: 100%;
      display: block;
      margin: 10px auto;
    }
  }

  @media (prefers-color-scheme: light) {
    body .qrcode-ganeratee {
      @include theme-light;
    }
  }

  @media (prefers-color-scheme: dark) {
    body .qrcode-ganeratee {
      @include theme-dark;

      .url-input {
        @include theme-grey;
      }
    }
  }
</style>
