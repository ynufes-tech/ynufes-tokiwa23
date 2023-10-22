<script lang="ts" setup></script>

<template>
  <div id="layout-root">
    <div class="header">
      <NuxtLink to="/">
        <LogoPrime />
      </NuxtLink>
      <NavigationMenu />
    </div>
    <slot />
    <div id="background-container">
      <!--      <WaveBackground/>-->
      <img id="wave-background" src="@/assets/svg/color_smoke.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/_breakpoint.scss";

#layout-root {
  position: relative;

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

#background-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-height: 100svh;
  overflow: hidden;
  z-index: -100;
  background: var(--main-background-color);
}

#wave-background {
  aspect-ratio: 1440 / 1339;
  width: 100%;
}
</style>

<style lang="scss">
body {
  background: var(--main-background-color);
  font-family: "Noto Sans JP", sans-serif;
  color: var(--thick-font-color);
}
</style>
