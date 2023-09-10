<script lang="ts" setup></script>

<template>
  <div class="layout-root">
    <div class="logo-wrapper">
      <LogoPrime />
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
.layout-root {
  .logo-wrapper {
    width: min(1024px, 100%);
    margin: 0 auto;
  }
}
</style>
