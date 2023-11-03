<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue"; // 以下swiperの設定
import type { Event } from "~/model/event";
import { Area } from "~/model/area";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import BreadCrumbsList from "~/components/BreadCrumbsList.vue";
import { placeToString } from "~/model/area";
import BackToEvent from "~/components/BackToEvent.vue";

const route = useRoute();
const id = route.params.id; // idが数値でない場合はトップページにリダイレクト
if (Number.isNaN(id)) {
  useRouter().push("/");
}
// fetch data from /api/events/:id
const event = await useFetch(`/api/event/${id}`)
  .then((res) => {
    return res.data.value as Event;
  })
  .catch(() => null);
if (!event) {
  useRouter().push("/events");
}
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
      event?.id +
      "-" +
      i,
  );
}
const area_id = event?.area ?? 0;

const { gtag } = useGtag();
gtag("event", "screen_view", {
  app_name: useRuntimeConfig().public.app_name,
  screen_name:
    "EventDetail - " + event?.id ?? "" + " - " + event?.event_name ?? "",
});
</script>

<template>
  <div class="page-root">
    <PageTitle :title="event?.event_name ?? ''" />
    <div class="page-content">
      <bread-crumbs-list class="bread-crumbs" />
      <div class="event-tag">
        <EventTag :event-type="event?.event_genre ?? 0" class="EventTag" />
      </div>
      <p class="group-name" v-text="event?.org_name ?? ''" />
      <p
        class="place"
        v-text="'企画場所: ' + placeToString(area_id) + event?.place_name ?? ''"
      />
      <img
        :src="`https://storage.googleapis.com/tokiwa23-assets/icons/${id}`"
        class="event-image"
      />
      <SectionTitle text="企画説明" />
      <p class="event-description" v-text="event?.event_description" />
      <div v-if="event?.org_description" class="org-description-sec">
        <SectionTitle text="企画団体紹介" />
        <h2 class="org-name">{{ event?.org_name }}</h2>
        <p class="org-description" v-text="event?.org_description" />
        <div
          v-if="event?.activity_images && event?.activity_images > 0"
          class="activity-images"
        >
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
          <img
            v-if="event?.activity_images == 1"
            :src="urls[0]"
            alt=""
            class="group-image"
          />
        </div>
        <div
          v-if="event?.x_id || event?.instagram_id || event?.facebook_id"
        ></div>
        <SponsorsListTitle text="各種リンク" />
        <div class="link-icons">
          <a
            v-if="event?.x_id"
            :href="`https://x.com/${event.x_id}`"
            class="link-icon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="X" src="/images/icons/x-logo.webp" />
          </a>
          <a
            v-if="event?.instagram_id"
            :href="`https://instagram.com/${event.instagram_id}`"
            class="link-icon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="instagram" src="/images/icons/instagram-logo.webp" />
          </a>
          <a
            v-if="event?.facebook_id"
            :href="`https://instagram.com/${event.facebook_id}`"
            class="link-icon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="facebook" src="/images/icons/facebook-logo.webp" />
          </a>
        </div>
      </div>
      <div v-if="event?.website" class="website-section">
        <SponsorsListTitle text="団体ホームページ" />
        <a
          :href="event?.website"
          class="website-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ event?.website }}
        </a>
      </div>
      <BackToEvent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/scss/_breakpoint.scss" as *;

.page-root {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page-content {
  font-size: min(1rem, 4svw);
  width: min(800px, 85svw);
  display: flex;
  flex-direction: column;

  @include sm {
    width: 100%;
  }

  .section-title {
    width: 100%;
    min-width: 400px;
    font-size: 2em;
  }
}

.event-tag {
  width: fit-content;
  margin-top: 1em;
  align-self: center;
}

.group-name {
  margin: 0.5em;
  align-self: center;
  font-size: 1.2em;
  color: var(--thick-font-color);
  font-weight: bold;
}

.place {
  align-self: center;
  font-size: 1.2em;
  font-weight: bold;
}

.event-image {
  aspect-ratio: 1;
  width: min(80svw, 300px);
  margin-top: 1em;
  align-self: center;
}

.about-event,
.about-group {
  width: min(1024px, 80svw);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}

.org-name {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  margin: 2em 0 1em;

  @include md {
    font-size: 1.5em;
    margin: 0.5em 0;
  }
}

.event-description,
.org-description {
  padding: 1em 0;
  font-size: 1.3em;
  line-height: 1.5em;
  white-space: pre-wrap;

  @include md {
    padding: 1em;
  }
}

.org-description-sec {
  display: flex;
  flex-direction: column;
}

.activity-images {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(100%, 600px);
  align-self: center;

  .group-image {
    width: 100%;
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

.website-section {
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-size: 1.3em;
  }
}

.swiper {
  width: min(90svw, 600px);
  aspect-ratio: 16 / 9;

  .swiper-slide {
    text-align: center;
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
}

.back-to-home {
  margin: 2rem auto;
}
</style>