<script lang="ts" setup>
import BreadCrumbsList from "~/components/BreadCrumbsList.vue";

useHead({
  title: "Sponsors | 23常盤祭公式HP~未来航路~",
  meta: [
    { name: "description", content: "23常盤祭のご協賛団体、個人の一覧です" },
  ],
});
</script>

<template>
  <div class="page-root">
    <div class="sponsors-title">
      <PageTitle title="SPONSORS" />
      <BreadCrumbsList />
    </div>
    <div class="inner-sponsors-page">
      <div class="sponsor-group">
        <section-title class="upper-title" text="ご協賛について" />
        <div class="sponsors-about-contents">
          <p class="text">
            「23常盤祭」を開催するにあたり、多くの企業の皆様より多大なご協力を賜りました。この場をお借りいたしまして、心より感謝申し上げます。
          </p>
          <p class="text">
            ご協賛いただきました企業を以下に掲載させていただきます。
          </p>
          <div class="banner-ads" style="display: none">
            <p>バナー広告</p>
          </div>
          <SponsorsWaveLine />
        </div>
      </div>
      <div class="sponsors-list">
        <div class="sponsor-group">
          <SponsorsListTitle text="広告協賛" />
          <ul class="ads-sponsors-list">
            <li>JOINUS</li>
            <li>Mare Profondo</li>
            <li>アルムナイ株式会社</li>
            <li>医療法人社団　伊純会　介護老人保健施設スカイ</li>
            <li>株式会社 BookLive</li>
            <li>株式会社アゴス・ジャパン</li>
            <li>株式会社安藤スポーツ</li>
            <li>株式会社カレッジヤード</li>
            <li>株式会社ジェイ・ブロード</li>
            <li>株式会社スプリングエステート</li>
            <li>株式会社ソフィアアカデミー</li>
            <li>株式会社トモノカイ</li>
            <li>株式会社ねぎしフードサービス</li>
            <li>株式会社毎日コムネット</li>
            <li>株式会社ライブパワー</li>
            <li>株式会社ロフトシステムズ</li>
            <li>珈琲の店MA</li>
            <li>小林内科・循環器クリニック</li>
            <li>佐野塾</li>
            <li>昭和建設株式会社</li>
            <li>食品館あおば</li>
            <li>寺田倉庫株式会社</li>
            <li>ときた内科クリニック</li>
            <li>トラベルクリニック新横浜</li>
            <li>ナッジカード</li>
            <li>ネクストギアーズ株式会社</li>
            <li>羽沢くぼた眼科</li>
            <li>ファミーユデンタルクリニック</li>
            <li>福岡センコー運輸株式会社</li>
            <li>ホームステーションらいふ羽沢横浜国大</li>
            <li>マセマ出版社</li>
            <li>ユニゾン英語学院　横浜綱島校</li>
            <li>横浜国立大学校友会</li>
            <li>横浜国立大学生活協同組合</li>
            <li>横浜そごう写真館</li>
            <li>横浜髙島屋写真館</li>
            <li>横浜モアーズ</li>
          </ul>
          <SponsorsWaveLine />
        </div>
        <div class="sponsor-group">
          <SponsorsListTitle text="物品協賛" />
          <ul class="goods-sponsors-list">
            <li>HARIO</li>
            <li>TAC株式会社</li>
            <li>相田みつを美術館</li>
            <li>アヴァンセ株式会社</li>
            <li>アルペンローゼ株式会社</li>
            <li>アンカー・ジャパン株式会社</li>
            <li>アンブリオリス・ジャパン株式会社</li>
            <li>イオンシネマみなとみらい</li>
            <li>一般財団法人 そごう美術館</li>
            <li>ウエニ貿易</li>
            <li>エナジードリンクZONe</li>
            <li>小川珈琲株式会社</li>
            <li>春日井製菓株式会社</li>
            <li>株式会社RQ芦ノ湖リゾートHOTEL RaKuun</li>
            <li>株式会社池の平ホテル＆リゾーツ</li>
            <li>株式会社伊豆シャボテン公園</li>
            <li>株式会社ウイッシュボン</li>
            <li>株式会社エミュール</li>
            <li>株式会社温泉道場　おふろcafé utatane</li>
            <li>株式会社タスカジ</li>
            <li>株式会社デルタインターナショナル</li>
            <li>株式会社 新潟味のれん本舗</li>
            <li>株式会社ニュートン（パセラリゾーツ）</li>
            <li>株式会社ミツヱ</li>
            <li>鎌倉まめや</li>
            <li>カラオケの鉄人</li>
            <li>公益財団法人　戸栗美術館</li>
            <li>公益財団法人　三笠保存会</li>
            <li>コヤマドライビングスクール横浜校</li>
            <li>佐藤製薬株式会社</li>
            <li>三光産業株式会社</li>
            <li>サンデーペイント株式会社</li>
            <li>シーラン株式会社</li>
            <li>シャボン玉石けん株式会社</li>
            <li>東京国立近代美術館</li>
            <li>ナッジカード</li>
            <li>ニベア花王株式会社</li>
            <li>伯方塩業株式会社</li>
            <li>箱根ガラスの森美術館</li>
            <li>マザー牧場</li>
            <li>三本珈琲株式会社</li>
            <li>宮田製菓株式会社</li>
            <li>明治神宮外苑　聖徳記念絵画館</li>
            <li>柳屋本店</li>
            <li>横須賀美術館</li>
            <li>横浜人形の家</li>
            <li>横浜ベイシェラトンホテル＆タワーズ</li>
            <li>ルートインホテルズ</li>
          </ul>
          <SponsorsWaveLine />
        </div>
        <div class="sponsor-group">
          <SponsorsListTitle text="個人協賛" />
          <ul>
            <li>井口愛彩</li>
            <li>石川正夫</li>
            <li>石塚宏樹</li>
            <li>桜美林ハイツ自治会</li>
            <li>岡田悠生</li>
            <li>岡田芳典</li>
            <li>奥平隆</li>
            <li>工藤純也</li>
            <li>小林新之介</li>
            <li>桜台自治会　内山恵利佳</li>
            <li>島由紀子</li>
            <li>高澤昌子</li>
            <li>津嶋弘美</li>
            <li>峰岡町一丁目町内会</li>
            <li>山岸龍矢</li>
            <li>(他匿名３名)</li>
          </ul>
          <SponsorsWaveLine />
        </div>
        <div class="sponsor-group">
          <SponsorsListTitle text="寄付" />
          <ul>
            <li>経済・経営学部、社会科学系大学院 同窓会 富丘会</li>
            <li>コック亭</li>
            <li>横浜銀行和田町支店</li>
          </ul>
          <SponsorsWaveLine />
        </div>
        <div class="sponsor-group">
          <SponsorsListTitle text="ミスコン協賛" />
          <ul>
            <li>MISCOLLE</li>
            <li>Promille salon</li>
            <li>TGC CAMPUS</li>
            <li>ヴァンドーム青山</li>
            <li>ウエニ貿易</li>
            <li>うやまリゾート株式会社</li>
            <li>門倉カド</li>
            <li>株式会社DONUTS</li>
            <li>株式会社JAM HOME MADE</li>
            <li>株式会社KINUJO</li>
            <li>株式会社アサクラ</li>
            <li>株式会社アメロイド</li>
            <li>株式会社アルペンローゼ</li>
            <li>株式会社エイジ・エンターテインメント</li>
            <li>株式会社コスモエージェンシー</li>
            <li>株式会社ザ・キッス</li>
            <li>株式会社シーオーメディカル</li>
            <li>株式会社マンダム</li>
            <li>株式会社メイコー化粧品</li>
            <li>株式会社ヤチヨ</li>
            <li>株式会社リアブロード</li>
            <li>クレールブライダルスタジオみなとみらい店</li>
            <li>コニカミノルタプラネタリウム株式会社</li>
            <li>野村不動産株式会社</li>
            <li>ミクチャ</li>
            <li>横浜ベイシェラトンホテル＆タワーズ</li>
            <li>ロゼット株式会社</li>
          </ul>
          <SponsorsWaveLine />
        </div>
        <div class="sponsor-group">
          <SponsorsListTitle text="その他のご協賛" />
          <ul>
            <li>JOINUS</li>
            <li>株式会社アットヨコハマ</li>
            <li>株式会社学情</li>
            <li>株式会社ダイヤモンド・ヒューマンリソース</li>
            <li>株式会社ネオ倶楽部</li>
            <li>株式会社ミニミニ神奈川　横浜西口店</li>
            <li>東洋水産株式会社</li>
            <li>保土ケ谷区福祉保健課</li>
            <li>保土ケ谷区保健活動推進員・保土ケ谷区食生活等改善推進員</li>
          </ul>
          <SponsorsWaveLine />
        </div>
      </div>
    </div>
    <NuxtLink to="/">
      <DarkButton text="⇐ ホームに戻る" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.inner-sponsors-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
}

.sponsors-wave-line {
  // 1024に揃えるのもページ全体の区切りにようになって
  // 変な感じがしたので700程度に調整しました
  width: min(70vw, 700px);
  margin-top: 4rem;
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
  @include md {
    margin-top: -1em;
  }
  @include sm {
    margin-top: -3em;
  }

  .text {
    width: min(70vw, 50em);
    color: var(--thick-font-color);
    line-height: 1.5em;
  }

  .banner-ads {
    width: min(50vw, 500px);
    height: min(15vw, 150px);
    background-color: #d9d9d9;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
  }
}

.sponsor-group {
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

a {
  text-decoration: unset;
}

.dark-button {
  margin: 1em auto;
  cursor: pointer;
}
</style>
