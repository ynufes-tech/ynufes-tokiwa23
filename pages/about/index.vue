<script lang="ts" setup></script>

<template>
  <div class="about-page">
    <div class="about-title">
      <PageTitle title="ABOUT" />
    </div>
    <div class="inner-about-page">
      <div class="tokiwa-about">
        <sectionTitle text="常盤祭について" class="upper-title" />
        <h1 class="child-title">常盤祭とは何か</h1>
        <hr class="dashed-line" />
        <SectionParagraph
          :text-list="[
            '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n',
            '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n',
          ]"
        />
        <hr class="dashed-line" />
      </div>
      <div class="theme-about">
        <SectionTitle text="テーマについて" class="upper-title" />
        <h1 class="child-title">未来航路</h1>
        <hr class="dashed-line" />
        <SectionParagraph
          :text-list="[
            '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n',
            '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n',
          ]"
        />
        <hr class="dashed-line" />
      </div>
      <div class="committee-about">
        <SectionTitle text="実行委員会について" class="upper-title" />
        <hr class="dashed-line" />
        <SectionParagraph
          :text-list="[
            '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n',
            '適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章、適当な文章\n',
          ]"
        />
        <hr class="dashed-line" />
        <div class="ynufes-photo">
          <img
            src="https://placehold.jp/350x350.png"
            alt="pleceholder"
            class="committee-photo"
          />
          <img
            src="https://placehold.jp/350x350.png"
            alt="pleceholder"
            class="committee-photo"
          />
        </div>
      </div>
    </div>
    <FloatingButton />
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
</style>
