<script lang="ts" setup>
</script>

<template>
  <div>
    <slot/>
    <WaveBackground/>
  </div>

</template>

<style scoped lang="scss">
@import "assets/scss/_breakpoint.scss";

#wave-background {
  z-index: -100;
  position: absolute;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1440 / 1339;
  top: 0;
  left: 0;
  right: 0;
}

@include sm {

}

#wave-background {
  aspect-ratio: 1440 / 1339;
}
</style>

<style lang="scss">
body {
  background: #FCF9EF;
  font-family: 'Noto Sans JP', sans-serif;
  color: var(--thick-font-color);
}
</style>