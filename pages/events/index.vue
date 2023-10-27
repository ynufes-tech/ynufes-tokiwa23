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
    <SectionTitle text="企画団体" />
    <div class="card-wrapper-background">
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
@use "assets/scss/_breakpoint.scss" as *;
.section-title {
  max-width: 1024px;
  margin: 0 auto;
}
.card-wrapper-background {
  // background-position-y: 100px;
  background-image: url(/images/background.png);
  background-repeat: repeat-y;
  background-size: cover;
  background-clip: border-box;
}

.card-wrapper {
  max-width: 1024px;
  margin: 100px auto 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  @include md {
    margin-top: 20px;
  }
}

.card {
  margin-top: 100px;
  @include md {
    margin-top: 0px;
  }
}
</style>
