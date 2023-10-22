<script setup lang="ts">
const props = defineProps({
  baseColor: {
    type: String,
    default: "#ffa6c9aa",
    required: false,
  },
  deg: {
    type: Number,
    default: 30,
    required: false,
  },
});
const sectionStyle = computed(() => {
  return {
    background: `repeating-linear-gradient(${props.deg}deg, ${props.baseColor}, ${props.baseColor} 5px, #fff 5px, #fff 10px)`,
    border: `solid 3px ${props.baseColor}`,
  };
});
</script>

<template>
  <div class="striped-section" :style="sectionStyle">
    <div class="striped-section__content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.striped-section {
  border-radius: 2em;
}

.striped-section__content {
  padding: 1.5em;
}
</style>
