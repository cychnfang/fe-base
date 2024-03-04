<template>
  <div class="page">
    <div class="page-header"></div>
    <div class="page-silder"></div>
    <div class="page-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page {
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-rows: 80px 1fr;
    grid-template-columns: 200px 1fr;
    grid-template-areas:
      'header header header'
      'silder main main';
    &-header {
      grid-area: header;
      height: 80px;
    }
    &-silder {
      grid-area: silder;
    }
    &-main {
      grid-area: main;
    }
  }
</style>
