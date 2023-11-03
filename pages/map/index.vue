<script setup lang="ts">
import BackToHome from "~/components/BackToHome.vue";
import BreadCrumbsList from "~/components/BreadCrumbsList.vue";

useHead({
  title: "学内マップ | 23常盤祭公式HP~未来航路~",
  meta: [
    {
      name: "description",
      content: "学内マップのダウンロードはこちらから!!",
    },
  ],
});

const { gtag } = useGtag();

gtag("event", "screen_view", {
  app_name: useRuntimeConfig().public.app_name,
  screen_name: "Map",
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="学内マップ" />
    <BreadCrumbsList />
    <div class="content-root">
      <div class="inner-map">
        <div class="inner-map-items">
          <img alt="" class="map-img" src="/images/pamphlet/map-face.webp" />
          <p class="inner-map-text">
            こちらのマップは、パンフレットの2-3ページに掲載されているのものです。
          </p>
          <NuxtLink to="/pamphlet" class="link-text-holder">
            <p class="link-text">・パンフレットのダウンロードページはこちら→</p>
          </NuxtLink>
        </div>
      </div>
      <div class="bottom-button">
        <BackToHome />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
}

.inner-map {
  color: var(--thick-font-color);

  .inner-map-items {
    padding: 0 2em;
    box-sizing: border-box;
    width: 100%;
    margin-top: 2em;

    .map-img {
      width: 100%;
    }

    .inner-map-text {
      margin: 2em 0;
    }

    .map-download {
      width: fit-content;
      display: flex;
      margin: 1em 0;

      > p {
        text-decoration: none;
        color: var(--thick-font-color);
      }

      > img {
        width: 1em;
      }
    }
  }
}

.bottom-button {
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link-text-holder {
  text-decoration: underline var(--thick-font-color);
  color: var(--thick-font-color);
}
</style>
