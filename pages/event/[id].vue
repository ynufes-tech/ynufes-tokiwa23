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

const urls: string[] = []; // swiperの複数の画像のURLを格納する配列

for (let i = 1; i <= event?.activity_images; i++) {
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
    <div class="page-content">
      <div class="event-tag">
        <EventTag :event-type="event?.event_genre ?? 0" class="EventTag" />
      </div>
      <img
        :src="`https://storage.googleapis.com/tokiwa23-assets/icons/${id}`"
        class="event-image"
      />
      <SectionTitle text="企画説明" />
      <p class="event-description" v-text="event?.event_description" />
      <SectionTitle text="企画団体紹介" />
      <div class="about-group-contents">
        <swiper
          v-if="event?.activity_images > 1"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: false,
          }"
          :modules="[Pagination, Autoplay]"
          :pagination="{
            dynamicBullets: true,
          }"
          class="activity-images-swiper"
        >
          <swiper-slide v-for="url in urls"><img :src="url" /></swiper-slide>
        </swiper>
        <h2 class="group-name">{{ event?.org_name }}</h2>
        <p class="org-description" v-text="event?.org_description" />
        <img
          v-if="event?.activity_images == 1"
          :src="urls[0]"
          class="group-image"
        />
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-content {
  width: min(1024px, 85svw);
  display: flex;
  flex-direction: column;
}

.event-tag {
  width: fit-content;
  margin-top: 1em;
}

.event-image {
  aspect-ratio: 1;
  width: min(80svw, 300px);
  margin-top: 2em;
  align-self: center;
}

.group-image {
  aspect-ratio: 16/9;
  width: min(512px, 50svw);
  margin-top: 2em;
}

.about-event,
.about-group {
  width: min(1024px, 80svw);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}

.event-description,
.org-description {
  margin-bottom: 1em;
  font-size: min(1.5rem, 3.5svw);
  line-height: 1.5em;
  white-space: pre-wrap;
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

.swiper {
  width: min(70svw, 600px);
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

  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 16 / 9;
  }
}
</style>
