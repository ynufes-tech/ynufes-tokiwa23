<script lang="ts" setup>
const donationList: Array<{
  name: string
}> = [
  // {
  //   name: "Donation1"
  // },
  // {
  //   name: "Donation2"
  // },
]
</script>

<template>
  <div class="page-root">
    <div class="sponsors-title">
      <PageTitle title="SPONSORS"/>
    </div>
    <div class="inner-sponsors-page">
      <div class="sponsors-about">
        <section-title class="upper-title" text="ご協賛について"/>
        <div class="sponsors-about-contents">
          <p class="text">
            「23常盤祭」を開催するにあたり、多くの企業の皆様より多大なご協力を賜りました。この場をお借りいたしまして、心より感謝申し上げます。</p>
          <p class="text">ご協賛いただきました企業を以下に掲載させていただきます。</p>
          <div class="banner-ads">
            <p>バナー広告</p>
          </div>
          <SponsorsWaveLine/>
        </div>

      </div>
      <div class="sponsors-list">
        <div class="ads-sponsor">
          <SponsorsListTitle text="広告協賛"/>
          <ul class="ads-sponsors-list">
            <li>ユニゾン英語学院　横浜綱島校</li>
            <li>寺田倉庫株式会社</li>
            <li>ファミーユデンタルクリニック</li>
            <li>横浜国立大学生活共同組合</li>
            <li>羽沢くぼた眼科</li>
            <li>JOINUS</li>
            <li>株式会社ねぎしフードサービス</li>
            <li>株式会社ロフトシステムズ</li>
            <li>ソフィアアカデミー</li>
            <li>サンデーペイント株式会社</li>
            <li>株式会社ライブパワー</li>
            <li>昭和建設株式会社</li>
            <li>マセマ出版社</li>
            <li>株式会社カレッジヤード</li>
            <li>ときた内科クリニック</li>
            <li>ホームステーションらいふ羽沢横浜国大</li>
            <li>オーラルプラン歯科クリニック</li>
            <li>トラベルクリニック新横浜</li>
            <li>Mare Profondo</li>
            <li>横浜ベイシェラトン ホテル＆タワーズ</li>
            <li>横浜そごう写真館</li>
            <li>株式会社トモノカイ</li>
            <li>ナッジカード</li>
            <li>横浜モアーズ</li>
            <li>アルムナイ株式会社</li>
            <li>株式会社アゴス・ジャパン</li>
            <li>佐野塾</li>
          </ul>
          <SponsorsWaveLine/>
        </div>
        <div v-if="donationList.length>0" class="donation">
          <SponsorsListTitle text="寄付"/>
          <ul class="donation-sponsors-list">
            <li v-for="d in donationList">{{ d.name }}</li>
          </ul>
          <SponsorsWaveLine/>
        </div>
        <div class="booth-sponsor">
          <SponsorsListTitle text="ブース協賛"/>
          <ul class="booth-sponsors-list">
            <li>株式会社ミニミニ神奈川　横浜西口店</li>
            <li>株式会社アットヨコハマ</li>
            <li>医療社団法人　伊純会　介護老人保険施設スカイ</li>
            <li>東洋水産株式会社</li>
            <li>保土ヶ谷区福祉保健課</li>
          </ul>
          <SponsorsWaveLine/>
        </div>
        <div class="goods-sponsor">
          <SponsorsListTitle text="物品協賛"/>
          <ul class="goods-sponsors-list">
            <li>株式会社ミツヱ</li>
            <li>コヤマドライビングスクール横浜校</li>
            <li>シーラン株式会社</li>
            <li>株式会社ウイッシュボン</li>
            <li>アンカー・ジャパン株式会社</li>
            <li>アンブリオス・ジャパン株式会社</li>
            <li>伯方塩業株式会社</li>
            <li>イオンシネマみなとみらい</li>
            <li>明治神宮外苑　聖徳記念絵画館</li>
            <li>横須賀美術館</li>
            <li>株式会社デルタインナール</li>
            <li>株式会社新潟味のれん本舗</li>
            <li>一般財団法人 そごう美術館</li>
            <li>株式会社RQ芦ノ湖リゾートHOTEL RaKuun</li>
            <li>株式会社タスカジ</li>
            <li>相田みつを美術館</li>
            <li>株式会社伊豆シャボテン公園</li>
            <li>アルペンローゼ株式会社</li>
            <li>横浜人形の家</li>
            <li>ニベア花王株式会社</li>
          </ul>
          <SponsorsWaveLine/>
        </div>
        <div class="other-sponsor">
          <SponsorsListTitle text="その他のご協賛"/>
          <ul class="other-sponsor-list">
            <li>株式会社ネオ倶楽部</li>
            <li>ダイヤモンド・ヒューマンリソース</li>
            <li>株式会社スプリングエステート</li>
            <li>有限会社現代不動産</li>
            <li>横浜銀行和田町支店</li>
          </ul>
        </div>
      </div>
    </div>
    <DarkButton text="⇐ ホームに戻る" @click="useRouter().push('/')"/>
  </div>
</template>

<style lang="scss" scoped>
.inner-sponsors-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.upper-title {
  margin-bottom: 2em;
}

.sponsors-about-contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  .text {
    width: min(70vw, 50em);
    color: var(--thick-font-color);
  }

  .banner-ads {
    width: min(50vw, 500px);
    height: min(15vw, 150px);
    background-color: #D9D9D9;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
  }
}

.ads-sponsor, .donation, .booth-sponsor, .goods-sponsor, .other-sponsor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  > ul {
    width: 60svw;
    flex-wrap: wrap;

    > li {
      display: inline-block;
      width: 48%;
      padding: 1%;
      text-align: center;
      color: var(--thick-font-color);
    }

    @media screen and (max-width: 960px) {
      width: 80vw;
    }
    @media screen and (max-width: 768px) {
      width: 90vw;
      > li {
        width: 100%;
      }
    }
  }
}

.dark-button {
  margin: 1em auto;
  cursor: pointer;
}
</style>