<script lang="ts" setup></script>

<template>
  <div class="layout-root">
    <div class="header">
      <NuxtLink to="/">
        <LogoPrime />
      </NuxtLink>
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
    width: min(1024px, 95%);
    margin: 0 auto;

    .navigation-menu {
      text-align: right;
    }

    a {
      text-decoration: none;
      color: #1d2630;
    }
  }
}
</style>
