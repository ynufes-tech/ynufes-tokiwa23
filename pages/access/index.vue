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
const { gtag } = useGtag();

gtag("event", "screen_view", {
  app_name: useRuntimeConfig().public.app_name,
  screen_name: "Access",
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="電車でのアクセス" />
    <div class="content-root">
      <iframe
        class="access-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.307289997533!2d139.58968321525322!3d35.47194018024357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601859679ea21c77%3A0x28d72ba15dae9e6c!2z5qiq5rWc5Zu956uL5aSn5a2m!5e0!3m2!1sja!2sjp!4v1666685538416!5m2!1sja!2sjp"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <SponsorsListTitle text="羽沢横浜国大駅" />
      <p class="attention">
        羽沢横浜国大駅からお越しの方は<br />こちらの推奨ルートでお越しください。
      </p>
      <div class="train-access">
        <p>相鉄新横浜線「羽沢横浜国大駅」より北門・西門まで徒歩15分</p>
        <img src="@/assets/images/hazawa.webp" class="map-hazawa" />
        <a
          href="https://www.ynu.ac.jp/access/train_hazawa.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          羽沢横浜国大駅前からのルート
        </a>
      </div>
      <SponsorsListTitle text="三ッ沢上町駅" />
      <div class="train-access">
        <p>横浜市営地下鉄ブルーライン「三ッ沢上町駅」より正門まで徒歩16分</p>
        <a
          href="https://www.ynu.ac.jp/access/train_front.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          三ッ沢上町駅前からのルート
        </a>
      </div>
      <SponsorsListTitle text="和田町駅" />
      <div class="train-access">
        <p>相鉄線「和田町駅」より南門・南通用門まで徒歩20分</p>
        <a
          href="https://www.ynu.ac.jp/access/train_south.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          和田町駅前からのルート
        </a>
      </div>
    </div>
    <BackToHome />
  </div>
</template>

<style lang="scss" scoped>
.page-root {
  margin-bottom: 2em;
}

.content-root {
  font-size: 1.1em;
  width: min(1024px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.access-map {
  margin: 20px 0;
  width: 100%;
  align-self: center;
  max-width: 600px;
  aspect-ratio: 2;
}

.map-hazawa {
  width: min(100%, 600px);
  object-fit: contain;
}

.train-access {
  width: min(calc(100% - 50px), 35em);
  margin: 0 0 1em;
  padding: 1em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--thick-font-color);
  gap: 1.5em;

  > a {
    width: fit-content;
    text-decoration: none;
    color: var(--thick-font-color);
    display: block;
    margin: 0.5em 0;
    border: 1px var(--thick-font-color) solid;
    border-radius: 1em;
    padding: 1.2em;
    @media (hover: hover) {
      &:hover {
        background-color: #3b3b3b;
        color: #fffdf5;
      }
    }

    &:active {
      transform: translateY(2px);
      transition: 0.2s;
    }
  }
}

// set dot at the start

.nearest-stations {
  max-width: 90%;
  font-size: 1.2em;
  margin: 0 auto;

  li {
    margin: 1em 0;
    list-style: disc;
  }
}

.back-to-home {
  margin: 0 auto;
}

.attention {
  margin-bottom: 1em;
  line-height: 1.5;
  text-align: center;
  color: red;
  text-decoration: underline;
}
</style>
