<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="sponsors-list-title">
    <h2>{{ props.text }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.sponsors-list-title {
  height: 130px;
  text-align: center;
  display: flex;
  align-items: center;

  > h2 {
    min-width: 8em;
    width: 100%;
    text-align: center;
    position: relative;
    font-size: 2em;
    font-weight: bold;
    z-index: 10;
    color: var(--thick-font-color);

    &:before {
      z-index: -1;
      content: "";
      position: absolute;
      bottom: -0.5em;
      display: block;
      height: 1em;
      width: 100%;
      background: url("/images/sponsors/sponsors-list-title.webp") no-repeat
        center bottom / contain;
      margin-top: 0.5em;
    }
  }
}
</style>
