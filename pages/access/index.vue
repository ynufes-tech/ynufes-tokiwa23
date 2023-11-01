<script lang="ts" setup>
useHead({
  title: "Access | 23常盤祭公式HP~未来航路~",
  meta: [
    {
      name: "description",
      content: "大学までのアクセスについてご案内しています。",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="Access" />
    <div class="content-root">
      <BouncingText text="Under Construction..." />
      <p id="upcoming-notify">
        <span>常盤祭に関する最新情報は</span><span>随時公開されていきます</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-root {
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

#upcoming-notify {
  margin: 0 auto;
  padding: 0 1em 2em;
  font-size: 1.5em;
  line-height: 1.3;

  span {
    display: block;
  }
}
</style>
