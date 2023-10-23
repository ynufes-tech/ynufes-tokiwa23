<script lang="ts" setup>
useHead({
  title: "About | 23常盤祭公式HP~未来航路~",
  meta: [
    { name: "description", content: "23常盤祭についての情報を掲載しています" },
  ],
});
</script>

<template>
  <div class="about-page">
    <div class="about-title">
      <PageTitle title="ABOUT" />
    </div>
    <div class="inner-about-page">
      <div class="tokiwa-about">
        <sectionTitle class="upper-title" text="常盤祭について" />
        <h1 class="child-title">常盤祭とは</h1>
        <SectionParagraph
          :text-list="[
            '常盤祭は横浜国立大学の年2回の大学祭のうち、秋に開催される大学祭です。',
            '3日間を通して、ミスミスターコンをはじめとして様々なイベントが盛りだくさんです。また、本年度は有料ステージにてお笑い芸人の「東京ホテイソン」さんと、声優の梶裕貴さん・岡本信彦さんがゲストとしていらっしゃいます！',
            '例年以上に盛り上がること間違いなしの３日間、ぜひ足を運んでみてください！',
          ]"
        />
        <h1 class="child-title">開催日時</h1>
        <SectionParagraph
          :text-list="[
            '1日目：11月3日(金) 13時〜21時',
            '2日目：11月4日(土) 9時〜21時',
            '3日目：11月5日(日) 9時〜15時',
          ]"
        />
      </div>
      <div class="theme-about">
        <SectionTitle class="upper-title" text="テーマについて" />
        <h1 class="child-title">未来航路</h1>
        <SectionParagraph
          :text-list="[
            '23常盤祭のテーマは「未来航路」。学生や来場者の方々が未来へ向かって航海をするように、希望を持てるような大学祭にしたいという願いを込めて、横浜のイメージに重ね合わせたテーマです。',
          ]"
        />
      </div>
      <div class="committee-about">
        <SectionTitle class="upper-title" text="実行委員会について" />
        <h1 class="child-title">大学祭実行委員会とは</h1>
        <SectionParagraph
          :text-list="[
            '年２回開催される横浜国立大学の大学祭を企画・運営しています。大学祭を楽しく安全に開催するために年間を通して100人規模で活動を行っています。',
            '大学祭実行委員会は、7つの部局と4つの部会で構成されています。部局は「会場・企画・技術・経理・総務・物品・編集」、部会は「協賛・広報・新歓・ミスコン」に分かれています。',
            '大学祭の開催にあたっては、数多くのサークル・団体や、協賛企業様などにご助力頂いております。',
            '実行委員会では、より良い大学祭を共に築き上げていくパートナーとして、ご協賛いただける企業様を募集しております。',
          ]"
        />
        <div class="ynufes-photo" style="display: none">
          <img
            alt="pleceholder"
            class="committee-photo"
            src="https://placehold.jp/350x350.png"
          />
          <img
            alt="pleceholder"
            class="committee-photo"
            src="https://placehold.jp/350x350.png"
          />
        </div>
      </div>
    </div>
    <FloatingButton />
    <BackToHome />
    <div class="spacer"></div>
  </div>
</template>

<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}

.inner-about-page {
  width: min(1024px, 100svw);
  margin: 0 auto;
}

.dashed-line {
  border: none;
  border-top: #575f6a 2px dashed;
  width: 90%;
  margin: 1.2rem auto;
}

.child-title {
  color: #575f6a;
  font-size: 2rem;
  font-weight: bold;
  margin: 0.75em 0 0.75em 5%;
}

.section-paragraph {
  width: 90%;
  margin: 1rem auto;
}

.dashed-line {
  border: none;
  border-top: #575f6a 2px dashed;
  width: 75%;
}

.ynufes-photo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .committee-photo {
    margin: 1.5em;
    border-radius: 1em;
    max-width: 80svw;
  }
}

.spacer {
  width: 100%;
  height: 120px;
}

.back-to-home {
  margin: 0 auto;
}
</style>
