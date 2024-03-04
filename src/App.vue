<script setup lang="ts">
  import { useQrcode } from '@/hooks/useQrcode'
  import { ref } from 'vue'

  const url = ref('Hello world')
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
    @include theme-grey;

    .qrcode {
      width: 280px;
      height: 280px;
      width: 100%;
      display: block;
      margin: 10px auto;
      border-radius: 5px;
    }

    .url-input {
      .el-textarea__inner {
        @include theme-dark;
        color: #fff;
      }
    }
  }
</style>
