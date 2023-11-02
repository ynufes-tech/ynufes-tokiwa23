<script lang="ts" setup>
import BreadCrumbsList from "~/components/BreadCrumbsList.vue";

useHead({
  title: "東京ホテイソン降臨！横浜ナショナルクラッシュ！",
  meta: [
    {
      name: "description",
      content:
        "今年の常盤祭にあのお笑い芸人「東京ホテイソン」が降臨!!チケットはお早めに！",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <PageTitle :title="'東京ホテイソン降臨！\n横浜ナショナルクラッシュ！'" />
    <BreadCrumbsList />
    <div class="top-images">
      <img src="/images/comedian/logo.webp" />
      <img src="/images/comedian/guest.webp" />
    </div>
    <div class="striped-sections">
      <StripedSection base-color="#fca14c44">
        今年の常盤祭にあのお笑い芸人「東京ホテイソン」が降臨！！<br />
        漫才や様々なコーナーで皆さまと楽しい時間を作っていきます！
        チケットはお早めに！ 秋を笑いで飾りましょう。
      </StripedSection>
      <StripedSection base-color="#a8f59588">
        【日時】<br />
        11月3日（金祝）14:10～15:20 70分<br />
        当日開場13:25～(来場者順での自由席)<br />
        【会場】<br />
        横浜国立大学 経営学部棟2号館 109教室特設ステージ<br />
        【チケット代金】<br />
        一律1600円
      </StripedSection>
      <StripedSection base-color="#fca14c44">
        <a
          href="https://eplus.jp/sf/detail/3954430001-P0030001"
          rel="noopener noreferrer"
          target="_blank"
          >チケット購入ページはこちら</a
        ><br />
        <br />
        ※必ず注意事項をご確認の上、お買い求め下さい。
      </StripedSection>
      <StripedSection id="section-caution" base-color="#a8f59588">
        【⚠注意事項⚠】<br />
        <ol>
          <li>企画内容について、予告なく変更・中止になる場合がございます。</li>
          <li>中止の場合、チケットに関しまして返金対応いたします。</li>
          <li>
            参加の際、持ち物検査等安全に関わるお願いに従っていただけない場合、参加をお断りする場合がございます。内容につきましてはチケット購入ページを御覧ください。
          </li>
          <li>
            お問い合わせにつきましては当該HPでは対応いたしかねます。<br />
            ynu23kikaku@gmail.com<br />
            までお問い合わせお願い致します。
          </li>
        </ol>
      </StripedSection>
    </div>
    <div class="bottom-button-holder">
      <BackToHome class="bottom-button" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/scss/_breakpoint.scss" as *;

.page-root {
  overflow: hidden;

  .page-title {
    width: 100vw;
    @include md {
      font-size: 0.8rem;
    }
  }

  .top-images {
    display: flex;
    height: 200px;
    width: fit-content;
    margin: 2em auto;

    > img {
      aspect-ratio: 1.5;
      object-fit: contain;
    }

    @include md {
      flex-direction: column;
      height: unset;
      width: min(350px, 90vw);
    }
  }

  .striped-sections {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;

    .striped-section {
      font-weight: bold;
      width: min(75vw, 35em);
      color: black;

      &:nth-child(2n + 1) {
        transform: translateX(-10%);
      }

      &:nth-child(2n) {
        transform: translateX(10%);
      }
    }
  }
}

#section-caution {
  list-style-type: none;
  counter-reset: list-counter;

  li {
    counter-increment: list-counter;
  }

  li::before {
    content: "※" counter(list-counter);
    margin-right: 0.5em;
  }
}

.bottom-button-holder {
  margin-top: 2em;
  display: flex;
  justify-content: center;

  .bottom-button {
    width: 10em;
  }
}
</style>