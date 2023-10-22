<script lang="ts" setup></script>

<template>
  <div class="layout-root">
    <div class="logo-wrapper">
      <NuxtLink to="/">
        <WhiteLogoPrime />
      </NuxtLink>
      <NavigationMenu />
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
body {
  font-family: "Noto Sans JP", sans-serif;
}

.layout-root {
  min-height: 100vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(/images/voice-actor/sp-background.webp) no-repeat center center fixed !important;
  background-size: cover;

  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(1024px, 100vw);
    margin: 0 auto;

    .navigation-menu {
      text-align: right;
    }

    a {
      text-decoration: none;
      color: white;
    }
  }
}

.logo-prime {
  color: white;
  margin: 0;

  > h1 {
    color: white !important;
  }

  > hr {
    border-color: white !important;
  }
}
</style>
