<script lang="ts" setup></script>

<template>
  <div class="layout-root">
    <div class="header">
      <LogoPrime />
      <NavigationMenu />
    </div>
    <slot />
  </div>
</template>

<style lang="scss">
body {
  font-family: "Noto Sans JP", sans-serif;
}

.layout-root {
  background: var(--main-background-color);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(1024px, 100%);
    margin: 0 auto;
    .navigation-menu {
      text-align: right;
    }
  }
}
</style>
