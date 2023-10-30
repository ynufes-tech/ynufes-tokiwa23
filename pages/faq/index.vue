<script lang="ts" setup>
useHead({
  title: "FAQ | 23常盤祭FAQページ",
  meta: [
    { name: "description", content: "23常盤祭のFAQページです" },
  ],
});
</script>

<template>
  <div class="about-page">
    <div class="about-title">
      <PageTitle title="FAQ" />
    </div>
    <div class="inner-about-page">
      <div class="tokiwa-about">
        <sectionTitle class="upper-title" text="よくある質問" />
      </div>
      <div class="faq-list">
        <div class="faq-tab">
          <input id="faq-tabfour011" type="checkbox" name="tabs">
          <label for="faq-tabfour011">落とし物や迷子の相談は？</label>
          <div class="tab-content">
            <p>お近くのSTAFFジャンパーを着た大学祭実行委員にお声がけ頂くか､本部(経営学部1号館108教室)までお越しください。場所は<NuxtLink to="/map">マップ</NuxtLink>をご参照ください。"
            </p>
          </div>
        </div>
        <div class="faq-tab">
          <input id="faq-tabfour012" type="checkbox" name="tabs">
          <label for="faq-tabfour012">常磐祭期間中、生協や食堂は使える？</label>
          <div class="tab-content">
            <p>第1食堂･第2食堂･生協は全て終日営業しておりません。<br>なお第1食堂は飲食スペースとして開放しております。</p>
          </div>
        </div>
        <div class="faq-tab">
          <input id="faq-tabfour013" type="checkbox" name="tabs">
          <label for="faq-tabfour013">TOKIWA AWARD(企画総選挙)の投票方法は？</label>
          <div class="tab-content">
            <p>･投票用紙での投票(飲食､展示･物販､パフォーマンス部門)<br>
              ･オンラインでの投票(飲食､展示・物販､パフォーマンス部門､ビジュアル部門)<br>
              ･参加企画の活動場所での投票(オリジナルドリンク部門)<br>
              の3つの方法がございます。</p>
          </div>
        </div>
        <div class="faq-tab">
          <input id="faq-tabfour014" type="checkbox" name="tabs">
          <label for="faq-tabfour014">雨が降ったとき企画はどうなる？</label>
          <div class="tab-content">
            <p>企画場所が変更または中止となる場合がございます。<br>詳しくは<NuxtLink to="/time-schedule">タイムテーブル</NuxtLink>､<NuxtLink to="/events">
                企画一覧
              </NuxtLink>をご参照ください。</p>
          </div>
        </div>
        <div class="faq-tab">
          <input id="faq-tabfour015" type="checkbox" name="tabs">
          <label for="faq-tabfour015">体調が悪くなったら？</label>
          <div class="tab-content">
            <p>お近くの大学祭実行委員にお声がけ頂くか､本部までお越しください。<br>混乱を避けるため、救急車の手配は実行委員が行います。</p>
          </div>
        </div>
        <div class="faq-tab">
          <input id="faq-tabfour016" type="checkbox" name="tabs">
          <label for="faq-tabfour016">災害が発生した場合は？</label>
          <div class="tab-content">
            <p>大学祭実行委員の指示に従い、お近くの避難場所へ避難してください。<br>避難場所は理工学系研究図書館付近､野外音楽堂､都市科学部棟裏です。<br>場所は<NuxtLink to="/map">マップ
              </NuxtLink>
              をご参照ください。</p>
          </div>
        </div>
        <div class="faq-tab">
          <input id="faq-tabfour017" type="checkbox" name="tabs">
          <label for="faq-tabfour017">最寄り駅･バス停への行き方は？</label>
          <div class="tab-content">
            <p>
              <NuxtLink to="/access">アクセス</NuxtLink>をご参照ください。
            </p>
          </div>
          <div class="faq-tab">
            <input id="faq-tabfour018" type="checkbox" name="tabs">
            <label for="faq-tabfour018">その他お困りの際は</label>
            <div class="tab-content">
              <p>お近くの大学祭実行委員にお声がけ頂くか､本部までお越しください。</p>
            </div>
          </div>
        </div>
      </div>
      <FloatingButton />
      <BackToHome />
      <div class="spacer"></div>
    </div>
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

.spacer {
  width: 100%;
  height: 120px;
}

.back-to-home {
  margin: 0 auto;
}

.faq-list {
  margin: 0.5rem 1rem 2rem 1rem;
}

.faq-list *,
.faq-list *:after,
.faq-list *:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.faq-list {
  border-top: 1px solid #1b2538;
}

.faq-list .faq-tab {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 1px;
  color: #1b2538;
}

.faq-list .faq-tab input {
  position: absolute;
  opacity: 0;
}

/* 質問 */
.faq-list .faq-tab label {
  font-weight: bold;
  font-size: 1.5rem;

  position: relative;
  display: block;
  margin: 0 0 0 0;
  padding: 1em 2em 1em 1em;
  cursor: pointer;
  border-bottom: 1px solid #1b2538;
}

.faq-list .faq-tab label:hover {
  color: #00c9db;
}

/* 答え */
.faq-list .faq-tab .tab-content {
  overflow: hidden;
  font-size: 1.5rem;
  line-height: 1.6;
  max-height: 0;
  -webkit-transition: max-height 0.5s ease;
  transition: max-height 0.5s ease;
  color: #ffffff;
  background: rgba(0, 95, 104, 0.5);
}

.faq-list .faq-tab .tab-content p {
  margin: 1em;
}

/* 質問を開いた時の仕様 */
/* --アイコン */
.faq-list .faq-tab input:checked~label {
  color: #00838F;
}

/* --答えの高さ */
.faq-list .faq-tab input:checked~.tab-content {
  max-height: 40em;
}

/* 質問をクリックした時のアイコンの動き */
.faq-list .faq-tab label::after {
  line-height: 1.6;
  position: absolute;
  top: 50%;
  right: 0;
  display: block;
  width: 3em;
  margin-top: -12.5px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  text-align: center;
}

.faq-list .faq-tab input[type=checkbox]+label::after {
  content: '↓';
}

.faq-list .faq-tab input[type=checkbox]:checked+label::after {
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
}</style>
