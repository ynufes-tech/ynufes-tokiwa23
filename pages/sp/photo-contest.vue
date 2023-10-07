<script setup lang="ts">
useHead({
  title: "東京ホテイソン降臨！横浜ナショナルクラッシュ！",
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
      <div class="photo-term">
        <SectionTitle text="募集期間について" />
        <div class="photo-contents">
          <p class="photo-thick-font">
            <span>10月7日（土）</span>
            <span>～10月20日（金）</span>
            <br />
            <span>X(旧Twitter)</span>
            <span>で募集！</span>
          </p>
        </div>
      </div>
      <div class="photo-entry">
        <SectionTitle text="応募詳細" />
        <div class="photo-contents">
          <ul>
            <li>
              X(旧Twitter)にて「#23常盤フォトコンテスト」をつけて応募する写真をツイートしてください。
            </li>
            <li>
              1人で複数作品の応募や、1投稿での複数作品の応募を可能とします。<br />投稿の際に、作品のタイトル・撮影場所・撮影日・展示の際に記載する撮影者名(ハンドルネーム可)・所属(任意)を添えてください。
            </li>
            <li>
              入賞者及び入選者に大学祭公式X(旧Twitter)のDMにて通知を行います。ただし、返信が2日以上なかった場合入賞は無効とします。
            </li>
            <li>写真であれば撮影機材を問いません。</li>
            <li>
              撮影日時は2023年内のものを対象とします。また、写真の向きは縦向き・横向きのいずれも可能とし、縦横比は3:2又は4:3とします。<br />縦横比16:9(iPhoneXシリーズ以降のiPhone各機種やAndroidの一部機種でサポートされているワイドスクリーン形式)など、縦横比が3:2又は4:3でないものは4:3にトリミングした上で応募可能とします。
            </li>
            <li>
              人物が写真に写っている際は許可を取ったうえで投稿してください。
            </li>
            <li>作品を掲示する際、アカウント名は載せません。</li>
          </ul>
        </div>
      </div>
      <div class="photo-privacy">
        <SectionTitle text="個人情報について" />
        <div class="photo-contents">
          <ul>
            <li>個人情報は必要用途以外には使用しません。</li>
            <li>企画が終了したのち速やかに破棄します。</li>
          </ul>
        </div>
      </div>
      <NuxtLink to="/" class="back-button">
        <DarkButton text="⇐ ホームに戻る" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-root {
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 1em;
  color: var(--thick-font-color);
  font-size: 2em;
}

p {
  color: var(--thick-font-color);
  line-height: 1.5em;
}

ul {
  list-style: disc;
}

li {
  color: var(--thick-font-color);
  line-height: 1.5em;
  margin-bottom: 0.5em;
}

.photo-contents {
  // 左右に10%ずつ
  margin: 2em 10% 0;
  width: 80%;
  justify-content: center;
  align-items: center;
}

.photo-thick-font {
  font-size: 2em;
  line-height: 1.3;
  font-weight: bold;

  > span {
    display: inline-block;
  }
}

.back-button {
  align-self: center;
  justify-self: center;
  text-align: center;
  margin: 1em auto;
  text-decoration: unset;
}
</style>
