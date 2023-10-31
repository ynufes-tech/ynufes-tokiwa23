<script setup lang="ts">
import BreadCrumbsList from "~/components/BreadCrumbsList.vue";

useHead({
  title: "LOVE SHOT",
  meta: [
    {
      name: "description",
      content:
        "本学の学生が撮影した友人や動物の写真を使ったフォトコンテスト企画です!Xにて「#23常盤フォトコンテスト」で写真を投稿して応募しよう!",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="Smile Shot♡" />
    <BreadCrumbsList />
    <div class="content-root">
      <div class="photo-explanation">
        <SectionTitle text="企画説明" />
        <div class="photo-contents">
          <h2 class="catch-phrase">
            <span>写真×大喜利!!</span>
            <span>あなたの笑顔で大学祭を彩ろう！</span>
          </h2>
          <p>
            本学の学生が撮影した友人や動物の写真を使ったフォトコンテスト企画です。<br />
            また、当日の来場者の皆様も写真に対する突っ込み・感想等を紙に記入してもらうことで大喜利企画に参加していただけますので、ぜひご来場ください。
          </p>
        </div>
      </div>
      <div class="card-wrapper">
        <SponsorsWaveLine />
        <SponsorsListTitle text="写真部門最優秀賞" />
        <ul>
          <li>
            <img src="~/assets/images/ねこ待つねこ.webp" />
            <div class="card-script">
              <div>
                <h3>タイトル</h3>
                <p>ねこ待つねこ</p>
              </div>
              <div>
                <h3>撮影者</h3>
                <p>ぷる</p>
              </div>
            </div>
          </li>
        </ul>
        <SponsorsWaveLine />
        <SponsorsListTitle text="入選作品" />
        <ul>
          <li>
            <img src="~/assets/images/「エッフェル塔」.webp" />
            <div class="card-script">
              <div>
                <h3>タイトル</h3>
                <p>「エッフェル塔」</p>
              </div>
              <div>
                <h3>撮影者</h3>
                <p>δ︶δ</p>
              </div>
            </div>
          </li>
          <li>
            <img src="~/assets/images/夜のシャンデリゼ.webp" />
            <div class="card-script">
              <div>
                <h3>タイトル</h3>
                <p>夜のシャンデリゼ</p>
              </div>
              <div>
                <h3>撮影者</h3>
                <p>δ︶δ</p>
              </div>
            </div>
          </li>
          <li>
            <img src="~/assets/images/十月、或いは.webp" />
            <div class="card-script">
              <div>
                <h3>タイトル</h3>
                <p>十月、或いは</p>
              </div>
              <div>
                <h3>撮影者</h3>
                <p>横浜国立大学市街化調整区域愛好会</p>
              </div>
            </div>
          </li>
          <li>
            <img src="~/assets/images/虹の足元.webp" />
            <div class="card-script">
              <div>
                <h3>タイトル</h3>
                <p>虹の足元</p>
              </div>
              <div>
                <h3>撮影者</h3>
                <p>δ︶δ</p>
              </div>
            </div>
          </li>
          <li>
            <img src="~/assets/images/夕日と漁船.webp" />
            <div class="card-script">
              <div>
                <h3>タイトル</h3>
                <p>夕日と漁船</p>
              </div>
              <div>
                <h3>撮影者</h3>
                <p>ヤドカリくん</p>
              </div>
            </div>
          </li>
          <li>
            <img src="~/assets/images/森が勝つか、建物が勝つか.webp" />
            <div class="card-script">
              <div>
                <h3>タイトル</h3>
                <p>森が勝つか、建物が勝つか</p>
              </div>
              <div>
                <h3>撮影者</h3>
                <p>森</p>
              </div>
            </div>
          </li>
          <li>
            <img src="~/assets/images/未知との遭遇.webp" />
            <div class="card-script">
              <div>
                <h3>タイトル</h3>
                <p>未知との遭遇</p>
              </div>
              <div>
                <h3>撮影者</h3>
                <p>ピクリン酸</p>
              </div>
            </div>
          </li>
          <li>
            <img src="~/assets/images/i_do_(not)_love_you.webp" />
            <div class="card-script">
              <div>
                <h3>タイトル</h3>
                <p>I DO （NOT） LOVE YOU</p>
              </div>
              <div>
                <h3>撮影者</h3>
                <p>横浜国立大学市街化調整区域愛好会</p>
              </div>
            </div>
          </li>
          <li>
            <img src="~/assets/images/にらめっこ.webp" />
            <div class="card-script">
              <div>
                <h3>タイトル</h3>
                <p>にらめっこ</p>
              </div>
              <div>
                <h3>撮影者</h3>
                <p>keito</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="back-button">
        <DarkButton text="⇐ ホームに戻る" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "assets/scss/variables.scss" as *;

.content-root {
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 1em;
  color: var(--thick-font-color);
  font-size: 2.5em;
}

p {
  color: var(--thick-font-color);
  line-height: 1.5em;
  font-size: 1.5em;
  margin: 10px auto;
  @include md {
    margin: 0 0;
  }
}

.sponsors-list-title {
  margin: 0 auto;
}

a {
  font-size: 1.2rem;
  font-weight: bold;
}

ul {
  list-style: disc;
}

li {
  display: flex;
  flex-direction: row;
  color: var(--thick-font-color);
  line-height: 1.5em;
  margin-bottom: 30px;

  > img {
    width: 50%;
  }

  > .card-script {
    width: 40%;
    padding: 10px;
    border: 1px solid var(--thick-font-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto auto;
    gap: 1.5em;

    h3 {
      text-decoration: underline;
      font-weight: bold;
    }

    p {
      margin: 0;
    }
  }

  @include md {
    > img {
      width: 90%;
      margin: 0 auto;
      max-height: 350px;
      object-fit: contain;
    }
    > .card-script {
      width: unset;
      border: unset;
      gap: 0.8em;
    }
    border: 1px solid var(--thick-font-color);
    border-radius: 10px;
    padding: 15px;
    flex-direction: column;
  }
}

.card-wrapper {
  margin: 60px auto;
  width: 90%;

  h2 {
    text-align: center;
  }
}

.photo-contents {
  // 左右に10%ずつ
  margin: 2em 10% 0;
  width: 80%;
  justify-content: center;
  align-items: center;
}

.back-button {
  align-self: center;
  justify-self: center;
  text-align: center;
  margin: 1em auto;
  text-decoration: unset;
}
</style>
