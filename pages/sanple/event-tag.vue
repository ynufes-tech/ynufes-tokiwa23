<script setup lang="ts">
import TagSample from "~/components/EventTag.vue";
import {Event} from "~/.nuxt/types/event";

// データを受け取ったとして...
const sampleData: Event[] = [
  {
    title: "Event1",
    description: "Event1 is awesome!",
    eventType: 1
  },
  {
    title: "Event2",
    description: "Event2 is awesome!",
    eventType: 2
  },
  {
    title: "Event3",
    description: "Event3 is awesome!",
    eventType: 3
  },
]
</script>
<template>
  <TagSample v-for="event in sampleData" :eventType="event.eventType" />
</template>