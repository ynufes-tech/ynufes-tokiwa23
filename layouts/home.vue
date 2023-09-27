<script lang="ts" setup>
</script>

<template>
  <div id="layout-root">
    <slot/>
    <div id="background-container">
      <!--      <WaveBackground/>-->
      <img src="@/assets/svg/color_smoke.svg" id="wave-background"/>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import "assets/scss/_breakpoint.scss";

#layout-root {
  position: relative;
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
  font-family: 'Noto Sans JP', sans-serif;
  color: var(--thick-font-color);
  .logo-prime {
  font-size: min(12px, 3vw);
}
}
</style>