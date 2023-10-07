<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="sponsors-list-title">
    <h2>{{ props.text }}</h2>
  </div>
</template>

<style scoped>
.sponsors-list-title {
  background: url("/images/sponsors/sponsors-list-title.webp") no-repeat left/contain;
  width: 20em;
  height: 130px;
  text-align: center;
  display: flex;
  align-items: center;

  > h2 {
    font-size: 2em;
    font-weight: bold;
    width: 100%;
    color: var(--thick-font-color);
  }
}
</style>
