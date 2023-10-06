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
body{
  font-family: 'Noto Sans JP', sans-serif;
}

.layout-root {
  background: var(--main-background-color);

  .logo-wrapper {
    width: min(1024px, 100%);
    margin: 0 auto;
  }
}
</style>
