<script lang="ts" setup>
</script>

<template>
  <div class="layout-root">
    <div class="logo-wrapper">
      <LogoPrime/>
    </div>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.layout-root {
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  url(/images/voice-actor/sp-background.webp) no-repeat center center fixed !important;
  background-size: cover;

  .logo-wrapper {
    width: min(1024px, 100vw);
    margin: 0 auto;
  }
}
</style>
<style lang="scss" >
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
