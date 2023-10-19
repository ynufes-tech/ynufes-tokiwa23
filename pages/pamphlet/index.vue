<script lang="ts" setup>
import BackToHome from "~/components/BackToHome.vue";
useHead({
  title: "学内マップ&パンフレット | 23常盤祭公式HP~未来航路~",
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="学内マップ&amp;パンフレット" />
    <div class="content-root">
      <div class="inner-map">
        <SectionTitle class="upper-title" text="学内MAP" />
        <div class="inner-map-items">
          <p class="inner-map-text">
            PDFファイルはこちらからダウンロードできます
          </p>
          <a
            href="https://www.ynu.ac.jp/about/public/publish/ynumap/pdf/ynumap_2022.pdf"
          >
            <div class="map-download">
              <p>・学内MAPのダウンロード</p>
              <img
                alt=""
                class="pdf-icon"
                src="/images/pamphlet/PDF-icon.webp"
              />
            </div>
            <img alt="" class="map-img" src="/images/pamphlet/map-face.webp" />
          </a>
        </div>
      </div>
      <div class="inner-pamphlet">
        <SectionTitle class="upper-title" text="常盤祭パンフレット" />
        <div class="pamphlet-items">
          <img
            alt="pamphlet"
            class="pamphlet-img"
            src="/images/pamphlet/pamphlet-face.webp"
          />
          <div class="pamphlet-text">
            <p>下のボタンからパンフレットをダウンロードできます</p>
            <div class="pamphlet-download">
              <p>通常版（ーーM)</p>
              <a class="pamphlet-button" href="">
                <DownloadButton />
              </a>
            </div>
            <div class="pamphlet-download">
              <p>軽量版（ーーM）</p>
              <a class="pamphlet-button" href="">
                <DownloadButton />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-button">
        <BackToHome />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
