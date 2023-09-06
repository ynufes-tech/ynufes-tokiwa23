<script lang="ts" setup>
definePageMeta({
  layout: "voice-actor",
});
</script>

<template>
  <div class="page-root">
    <PageTitle :title="'声優トークライブ in YNU 2023'" />
    <div class="main-stamp-wrapper">
      <img src="/images/main-stamp.svg" />
    </div>
    <div class="icon-wrapper">
      <img src="/images/voice-actor-icon.jpg" />
    </div>
    <div class="section-wrapper">
      <h2 class="section-title">企画説明</h2>
      <SectionParagraph
        :textList="[
          '2023年常盤祭に大人気声優の岡本信彦さん、梶裕貴さんが登壇します！！',
          '様々なコーナーで皆さまと楽しい時間を作っていきます！来場者全員に限定グッズのプレゼントやサイン色紙が当たるかも!?',
          'チケットの購入はお早めに！',
        ]"
      />
    </div>
    <div class="section-wrapper">
      <h2 class="section-title">日時</h2>
      <h3 class="section-emphasize">11月4日(土) 14:00～15:15 (75分)</h3>
      <p class="section-annotation">※開場13:15 13：55～14：00の間一時的に入場を制限(109教室のみ)</p>
      <h2 class="section-title">企画説明</h2>
      <SectionParagraph
        :textList="[
          '2023年常盤祭にあの大人気声優のお二人が登壇します！！',
          '様々なコーナーで皆さまと楽しい時間を作っていきます！来場者全員に限定グッズのプレゼントやサイン色紙が当たるかも!?',
          'チケットの購入はお早めに！',
        ]"
      />
    </div>
    <div class="section-wrapper">
      <h2 class="section-title">チケット代金</h2>
      <h3 class="section-emphasize">特設ステージ 4500円</h3>
      <h3 class="section-emphasize">ライブビューイング会場 2300円</h3>
      <p class="section-annotation">※購入に関しまして、注意事項が多くございます。<br>よくご確認を頂いた上でお買い求めいただけますと幸いです。</p>
      <h2 class="section-title">⚠注意事項⚠</h2>
      <SectionParagraph
        :textList="[
          '※1 企画内容について、予告なく変更・中止になる場合がございます。',
          '※2 中止の場合、チケットに関しまして返金対応いたします。',
          '※3 参加の際、持ち物検査等安全に関わるお願いに従っていただけない場合、参加をお断りする場合がございます。内容につきましてはチケット購入ページを御覧ください。',
          '※4 お問い合わせにつきましては当該HPでは対応いたしかねます。チケット販売ページのお問合せ先までお問い合わせお願い致します。'
        ]"
      />
    </div>
    <div class="spacer"></div>
  </div>
</template>

<style scoped lang="scss">
@use "assets/scss/variables.scss" as *;
* {
  // outline: 1px solid red;
  box-sizing: border-box;
}
.page-root {
  .page-title {
    width: 100vw;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  .main-stamp-wrapper {
    width: min(1024px, 80vw);
    margin: 0 auto;
    > img {
      width: 30vw;
    }
  }
  .icon-wrapper {
    display: block;
    margin: 0 auto;
    > img {
      width: min(360px, 50vw);
      display: block;
      margin: 0 auto;
      border-radius: 36px;
    }
  }
}
/* ユーティリティークラス */
.section-paragraph {
  margin-top: 2rem;
  color: #fff;
}
.section-title {
  color: #fff;
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: bold;
  margin: 1em auto;
  text-align: center;
}
.section-wrapper {
  width: min(768px, 100vw);
  margin: 36px auto 0;
  padding: 2rem 4rem;
  background-color: rgba(217, 217, 217, 0.1);
  border-radius: 24px;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
}
.section-emphasize {
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: bold;
}
.section-annotation {
  color: #fff;
  padding: 0.2rem;
}
.spacer {
  height: 10vh;
}
</style>