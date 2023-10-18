<script lang="ts" setup>
import events from "~/assets/data/events.json";
useHead({
  title: "企画団体紹介ページ",
  meta: [
    {
      name: "description",
      content:
        "企画団体の紹介をしております！",
    },
  ],
});
</script>

<template>
  <div class="events">
    <PageTitle title="EVENTS"/>
    <div class="layout">
      <SectionTitle text="企画団体"/>
      <div class="card-wrapper">
        <NuxtLink
          v-for="event in events"
          :to="`/event/${event.id}`"
          :key="event.id"
          class="card"
        >
        <ProjectCard :event-data="event" />
        </NuxtLink>
         <p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p>
         <p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p><p class="a">aa</p>
      </div>
     
    </div>


  </div>
</template>

<style  lang="scss" scoped>
.layout{
  margin: 0 auto;
  max-width: 1024px;
}
.card-wrapper{
  margin-top: 100px;
  justify-content: center;
  background-position-x: center;
  background-image:url(/images/background.svg) ;
  background-size: contain;
  background-repeat: round;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  
}
.card{
  margin-top: 100px;
}
.a{
  width: 50svw;
  font-size: 500px;
}
</style>
