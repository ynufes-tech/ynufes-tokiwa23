<script lang="ts" setup>
enum ButtonMode {
  Positive = 0,
  Negative = 1
}
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  mode: {
    type: Number,
    required: false,
    default: ButtonMode.Positive
  }
})
const defineMode = computed(() => {
  if (props.mode === ButtonMode.Positive) {
    return 'positive'
  } else if(props.mode === ButtonMode.Negative) {
    return 'negative'
  } else {
    return 'disabled'
  }
})
</script>

<template>
  <div :class="defineMode + '-button'" class="dark-button">
    {{ props.text }}
  </div>
</template>

<style scoped lang="scss">
.dark-button {
  font-weight: bold;
  letter-spacing: 2px;
  width: fit-content;
  padding: 1rem 2rem;
  border-radius: 2rem;
  transition: 1 all;
  color: #fff;
}
.positive-button {
  background-color: #d98a59;
  &:hover {
    background-color: #FFF;
    color: #d98a59;
  }
}
.negative-button {
  outline: 1px solid #FFF;
  &:hover {
    background-color: #fff;
    color: #3b3b3b;
    border: none;
  }
}
.disabled-button {
  outline: 1px solid #5f5f5f;
  color: #5f5f5f;
}
</style>
