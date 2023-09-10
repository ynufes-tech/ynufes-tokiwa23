<script lang="ts" setup></script>

<template>
  <div class="layout-root">
    <div class="logo-wrapper">
      <LogoPrime/>
    </div>
    <slot/>
  </div>
</template>

<style lang="scss">
.layout-root {
  min-height: 100vh;
  background: var(--main-background-color);

  .logo-wrapper {
    width: min(1024px, 100vw);
    margin: 0 auto;
  }
}
</style>
