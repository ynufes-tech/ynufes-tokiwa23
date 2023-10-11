<script lang="ts" setup>
const props = defineProps({
  textList: {
    type: Array<string>,
    required: true,
  },
});
</script>

<template>
  <div class="section-paragraph">
    <p v-for="(text, index) in props.textList" :key="index">{{ text }}</p>
  </div>
</template>

<style scoped>
.section-paragraph {
  line-height: 1.7;
  font-size: 1.2rem;
  > p {
    margin-bottom: 1rem;
    text-align: justify;

    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 30rem) {
    > p {
      font-size: 1rem;
    }
  }
}
</style>
