<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="section-title">
    <h2>{{ props.text }}</h2>
  </div>
</template>

<style scoped>
.section-title {
  background: url("/images/section-title.webp") no-repeat left/contain;
  width: min(768px, 100svw);
  height: 130px;
  text-align: center;
  display: flex;
  align-items: center;
  font-size: min(2.5em, 5svw);

  > h2 {
    font-weight: bold;
    margin: 5% 0 0 25%;
    color: var(--thick-font-color);
  }
}
</style>
