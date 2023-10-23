<script lang="ts" setup>
import events from "~/assets/data/events.json";

useHead({
  title: "企画団体紹介ページ",
  meta: [
    {
      name: "description",
      content: "企画団体の紹介をしております！",
    },
  ],
});
</script>

<template>
  <div class="events">
    <PageTitle title="EVENTS" />
    <div class="layout">
      <SectionTitle text="企画団体" />
      <div class="card-wrapper">
        <NuxtLink
          v-for="event in events"
          :key="event.id"
          :to="`/event/${event.id}`"
          class="card"
        >
          <ProjectCard :event-data="event" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  margin: 0 auto;
  max-width: 1024px;
}

.card-wrapper {
  margin-top: 100px;
  justify-content: center;
  background-position: initial;
  background-image: url(/images/background.png);
  background-repeat: repeat-y;
  background-size: contain;
  background-clip: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
}

.card {
  margin-top: 100px;
}
</style>
