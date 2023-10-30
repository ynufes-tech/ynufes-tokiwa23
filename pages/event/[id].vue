<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"; // 以下swiperの設定
import { Event } from "~/model/event";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const route = useRoute();
const id = route.params.id; // idが数値でない場合はトップページにリダイレクト
if (Number.isNaN(id)) {
  await useRouter().push("/");
}
// fetch data from /api/events/:id
const event = await useFetch(`/api/event/${id}`).then((res) => {
  return res.data.value as Event;
});
useHead({
  title: `${event?.event_name ?? ""} | 23常盤祭公式HP~未来航路~`,
  meta: [
    {
      name: "description",
      content: `${event?.event_name ?? ""}の詳細ページです`,
    },
  ],
});

const urls = []; // swiperの複数の画像のURLを格納する配列

for (let i = 0; i < event?.activity_images; i++) {
  urls.push(
    "https://storage.googleapis.com/tokiwa23-assets/icons/" +
      event.id +
      "-" +
      i,
  );
}
</script>

<template>
  <div class="page-root">
    <PageTitle :title="event?.event_name ?? ''" />
    <div class="event-tag">
      <EventTag :event-type="event?.event_genre ?? 0" class="EventTag" />
    </div>
    <img
      :src="`https://storage.googleapis.com/tokiwa23-assets/icons/${id}`"
      class="event-image"
    />
    <div class="about-event">
      <SectionTitle text="企画説明" />
      <div class="about-event-text">
        <p>{{ event?.event_description }}</p>
      </div>
    </div>
    <div class="about-group">
      <SectionTitle text="企画団体紹介" />
      <div class="about-group-contents">
        <swiper
          v-if="event?.activity_images > 1"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="[Pagination, Autoplay]"
          :pagination="{
            dynamicBullets: true,
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="url in urls"
            ><img :src="{ url }"
          /></swiper-slide>
        </swiper>
        <img
          v-else
          :src="`https://storage.googleapis.com/tokiwa23-assets/icons/${id}-1`"
          class="group-image"
        />
        <h2 class="group-name">{{ event?.org_name }}</h2>
        <p>{{ event?.org_description }}</p>
        <h2>各種リンク</h2>
        <a :href="event?.website" class="home-page-link">
          ホームページリンク：{{ event?.website }}
        </a>
        <div class="link-icons">
          <a v-if="event?.x_id" :href="event.x_id" class="link-icon">
            <img alt="X" src="/images/icons/x-logo.webp" />
          </a>
          <a
            v-if="event?.instagram_id"
            :href="event.instagram_id"
            class="link-icon"
          >
            <img alt="instagram" src="/images/icons/instagram-logo.webp" />
          </a>
          <a
            v-if="event?.facebook_id"
            :href="event.facebook_id"
            class="link-icon"
          >
            <img alt="facebook" src="/images/icons/facebook-logo.webp" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-size: min(2.5rem, 5svw);
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 1em;
}

.page-root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-tag {
  width: min(1024px, 100svw);
  margin-top: 1em;

  .EventTag {
    margin-left: 10%;
    width: 9em;
    height: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
  }
}

.event-image {
  aspect-ratio: 1;
  width: min(512px, 50svw);
  margin-top: 2em;
}

.group-image {
  aspect-ratio: 16/9;
  width: min(512px, 50svw);
  margin-top: 2em;
}

.about-event {
  width: min(1024px, 100svw);
}
.about-group {
  width: min(1024px, 100svw);
}

.about-event-text {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-group-contents {
  margin-top: 1em;
  margin-bottom: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > a {
    margin-bottom: 1em;
    text-decoration: none;
    color: var(--thick-font-color);
  }
}

.link-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;

  .link-icon {
    width: 2em;
    margin: 0 1em;

    > img {
      width: 100%;
    }
  }
}

#app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family:
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 50svw;
  aspect-ratio: 16 / 9;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 16 / 9;
  width: 100%;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 9;
}
</style>
