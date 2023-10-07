<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="pre-guest-event-button">
    <div class="pre-guest-event-button-text">
      <p>{{ props.text }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pre-guest-event-button {
  width: fit-content;
  padding: 1rem 2rem;
  background-color: #ffffff;
  border-radius: 1.5em;
  border: solid 2px #8cb6de;
  font-size: 1.5em;
  transition: 0.7s;

  .pre-guest-event-button-text {
    font-weight: bold;
    text-align: center;
    justify-content: center;
  }
}
</style>
