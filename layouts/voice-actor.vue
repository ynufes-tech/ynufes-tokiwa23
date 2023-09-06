<script lang="ts" setup></script>

<template>
  <div class="layout-root">
    <LogoPrime />
    <slot />
  </div>
</template>

<style lang="scss">
.layout-root {
  min-width: 100svw;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/sp-background.webp) no-repeat center center fixed;
  .logo-prime {
    color: white;
    margin: 0;

    > h1 {
      color: white !important;
    }
    > hr {
      border-color: white !important;
    }
    width: fit-content;
  }
}
</style>
