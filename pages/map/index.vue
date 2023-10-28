<script setup lang="ts">
import BackToHome from "~/components/BackToHome.vue";

useHead({
  title: "学内マップ | 23常盤祭公式HP~未来航路~",
  meta: [
    {
      name: "description",
      content: "学内マップのダウンロードはこちらから!!",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="学内マップ&amp;パンフレット" />
    <div class="content-root">
      <div class="inner-map">
        <div class="inner-map-items">
          <p class="inner-map-text">
            PDFファイルはこちらからダウンロードできます
          </p>
          <a
            href="https://www.ynu.ac.jp/about/public/publish/ynumap/pdf/ynumap_2022.pdf"
            rel="noopener norefererr"
            target="_blank"
            class="map-download"
          >
            <p>・学内MAPのダウンロード</p>
            <img alt="" class="pdf-icon" src="/images/pamphlet/PDF-icon.webp" />
          </a>
          <a
            href="https://www.ynu.ac.jp/about/public/publish/ynumap/pdf/ynumap_2022.pdf"
            rel="noopener norefererr"
            target="_blank"
          >
            <img alt="" class="map-img" src="/images/pamphlet/map-face.webp" />
          </a>
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

.inner-pamphlet {
  .pamphlet-items {
    display: flex;
    width: 100%;
    padding: 0 2em;
    box-sizing: border-box;
    margin-top: 2em;

    .pamphlet-img {
      width: 40svw;
      height: 31.46svw; /*縦横比固定*/
    }

    .pamphlet-text {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 10%;
      width: 40svw;
      margin-top: 2em;

      .pamphlet-download {
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .pamphlet-button {
          color: var(--thick-font-color);
          text-decoration: none;
        }

        > p {
          margin-bottom: 1em;
        }
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

@media screen and (max-width: 768px) {
  .inner-pamphlet {
    .pamphlet-items {
      width: 100svw;
      margin-left: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .pamphlet-text {
        margin-left: 0;
        width: 100%;

        .pamphlet-download {
          margin-top: 1em;
        }

        > p {
          text-align: center;
          width: 80svw;
          margin-left: 10svw;
        }
      }
    }
  }
}
</style>
