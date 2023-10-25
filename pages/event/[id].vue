<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"; // 以下swiperの設定
import { EventData } from "~/model/eventData";
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
const loader = await useDataLoader();
const events = loader.events_data;
const event = events.find((e) => e.id === Number(id)) as EventData;

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
    <SectionTitle text="企画説明" />
    <div class="about-event">
      <div class="about-event-text">
        <p>{{ event?.event_name }}</p>
      </div>
    </div>
    <div class="about-group">
      <SectionTitle text="企画団体紹介" />
      <div class="about-group-contents">
        <swiper
          v-if="event?.activity_images > 1"
          :pagination="{
            dynamicBullets: true,
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="[Pagination, Autoplay]"
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
        <a class="home-page-link" :href="event?.website">
          ホームページリンク：{{ event?.website }}
        </a>
        <div class="link-icons">
          <a v-if="event?.x_id" class="link-icon" :href="event.x_id">
            <img src="/images/icons/x-logo.webp" alt="X" />
          </a>
          <a
            v-if="event?.instagram_id"
            class="link-icon"
            :href="event.instagram_id"
          >
            <img src="/images/icons/instagram-logo.webp" alt="instagram" />
          </a>
          <a
            v-if="event?.facebook_id"
            class="link-icon"
            :href="event.facebook_id"
          >
            <img src="/images/icons/facebook-logo.webp" alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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

.about-event,
.about-group {
  width: min(1024px, 100svw);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > SectionTitle {
    width: 100%;
  }
}

.about-event-text {
  margin-top: 2em;
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
  height: 50svh;
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
