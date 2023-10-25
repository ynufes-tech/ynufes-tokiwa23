<script setup lang="ts">
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
    <div class="content-root">
      <div class="photo-explanation">
        <SectionTitle text="企画説明" />
        <div class="photo-contents">
          <h2 class="catch-phrase">
            写真×大喜利！！あなたの笑顔で大学祭を彩ろう！
          </h2>
          <p>
            本学の学生が撮影した友人や動物の写真を使ったフォトコンテスト企画です。<br />また、当日の来場者の皆様も写真に対する突っ込み・感想等を紙に記入してもらうことで大喜利企画に参加していただけますので、ぜひご来場ください。
          </p>
        </div>
      </div>
      <ul class="card-wrapper">
        <h2>写真部門最優秀賞</h2>
        <li class="photo-card">
          <img src="~/assets/images/ねこ待つねこ.webp" />
          <div class="card-script">
            <p>タイトル<br/>ねこ待つねこ</p>
            <p>撮影者<br/>ぷる</p>
          </div>
        </li>
        <h2>入選作品</h2>
        <li class="photo-card">
          <img src="~/assets/images/「エッフェル塔」.webp" />
          <div class="card-script">
            <p>タイトル<br/>「エッフェル塔」</p>
            <p>撮影者<br/>δ︶δ</p>
          </div>
        </li>
        <li class="photo-card">
          <img src="~/assets/images/夜のシャンデリゼ.webp" />
          <div class="card-script">
            <p>タイトル<br/>夜のシャンデリゼ</p>
            <p>撮影者<br/>δ︶δ</p>
          </div>
        </li>
        <li class="photo-card">
          <img src="~/assets/images/十月、或いは.webp" />
          <div class="card-script">
            <p>タイトル<br/>十月、或いは</p>
            <p>撮影者<br/>横浜国立大学市街化調整区域愛好会</p>
          </div>
        </li>
        <li class="photo-card">
          <img src="~/assets/images/虹の足元.webp" />
          <div class="card-script">
            <p>タイトル<br/>虹の足元</p>
            <p>撮影者<br/>δ︶δ</p>
          </div>
        </li>
        <li class="photo-card">
          <img src="~/assets/images/夕日と漁船.webp" />
          <div class="card-script">
            <p>タイトル<br/>夕日と漁船</p>
            <p>撮影者<br/>ヤドカリくん</p>
          </div>
        </li>
        <li class="photo-card">
          <img src="~/assets/images/森が勝つか、建物が勝つか.webp" />
          <div class="card-script">
            <p>タイトル<br/>森が勝つか、建物が勝つか</p>
            <p>撮影者名<br/>森</p>
          </div>
        </li>
        <li class="photo-card">
          <img src="~/assets/images/未知との遭遇.webp" />
          <div class="card-script">
            <p>タイトル<br/>未知との遭遇</p>
            <p>撮影者<br/>ピクリン酸</p>
          </div>
        </li>
        <li class="photo-card">
          <img src="~/assets/images/I DO （NOT） LOVE YOU.webp" />
          <div class="card-script">
            <p>タイトル<br/>I DO （NOT） LOVE YOU</p>
            <p>撮影者<br/>横浜国立大学市街化調整区域愛好会</p>
          </div>
        </li>
        <li class="photo-card">
          <img src="~/assets/images/にらめっこ.webp" />
          <div class="card-script">
            <p>タイトル<br/>にらめっこ</p>
            <p>撮影者<br/>keito</p>
          </div>
        </li>
      </ul>
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
  font-size: 2rem;
  margin: 10px auto;
  @include md{
    margin: 0 0;
  }
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
  margin: 30px 0;
  > img {
    width: 50%;
  }
  @include md {
    > img {
      margin: 0 auto;
    }
    flex-direction: column;
  }
}
.card-wrapper {
  margin: 60px auto;
  width: 90%;
}
.card-script {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto auto;
  @include md {
    margin: 0 auto;
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
