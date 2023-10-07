<script setup lang="ts">
import {EventType} from "~/.nuxt/types/event";

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
</script>

<template>
  {{ getTagColor(props.eventType) }}
</template>

<style scoped>

</style>