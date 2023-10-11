<script setup lang="ts">
import { EventType } from "~/.nuxt/types/event";

export type Props = {
  eventType: EventType
}
const props = defineProps<Props>()

function getTagColor(type: EventType): string {
  switch (type) {
    case EventType.FOOD:
      return "#FFC107"
    case EventType.EXHIBITION:
      return "#FF5722"
    case EventType.PERFORMANCE:
      return "#4CAF50"
  }
  return "#000000"
}
function getTagInfo(type: EventType): string {
  switch (type) {
    case EventType.FOOD:
      return "食事"
    case EventType.EXHIBITION:
      return "展示"
    case EventType.PERFORMANCE:
      return "パフォーマンス"
  }
  return ""
}
const tagStyle = computed(() => {
  return {
background: '${getTagColor(props.eventType)}'
  }
}
</script>

<template>
  <p class="event-tag" :style="tagStyle">{{ getTagInfo(props.eventType) }}</p>
</template>

<style scoped>
.event-tag {
  >p {
    font-size: 1.2em;
    line-height: 1.3em;
    font-weight: 400;
    padding: 1px;
  }
}
</style>