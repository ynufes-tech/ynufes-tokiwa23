<script lang="ts" setup>
import { Genre } from "~/model/genre";

export type Props = {
  eventType: Genre;
};
const props = defineProps<Props>();

function getTagColor(type: Genre): string {
  switch (type) {
    case Genre.FOOD:
      return "#FFC107";
    case Genre.EXHIBITION:
      return "#FF5722";
    case Genre.PERFORMANCE:
      return "#4CAF50";
  }
  return "#000000";
}

function getTagInfo(type: Genre): string {
  switch (type) {
    case Genre.FOOD:
      return "食事";
    case Genre.EXHIBITION:
      return "展示";
    case Genre.PERFORMANCE:
      return "パフォーマンス";
  }
  return "";
}

const tagStyle = computed(() => {
  return {
    background: getTagColor(props.eventType),
  };
});
</script>

<template>
  <p :style="tagStyle" class="event-tag">{{ getTagInfo(props.eventType) }}</p>
</template>

<style scoped>
.event-tag {
  line-height: 1.3em;
  font-weight: 400;
  color: white;
  padding: 0.5em;
  border-radius: 0.8em;
}
</style>
