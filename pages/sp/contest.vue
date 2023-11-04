<script lang="ts" setup>
import ProjectCardCompact from "~/components/ProjectCardCompact.vue";
import events from "~/assets/data/events.json";
import type { EventSummary } from "~/model/event";

// idに対応するcardを表示

interface RankingData {
  FOOD: number[];
  EXHIBITION: number[];
  PERFORMANCE: number[];
  DRINK: number[];
  VISUAL: number[];
  UPDATED: string;
}

// const rankingData = await useFetch("/api/contest")
//   .then((res) => {
//     if (
//       res.data.value.FOOD &&
//       res.data.value.EXHIBITION &&
//       res.data.value.PERFORMANCE
//     ) {
//       return res.data.value as RankingData;
//     }
//     return null;
//   })
//   .catch(() => null);

const rankingData = {
  FOOD: [113, 42, 39],
  EXHIBITION: [83, 45, 34],
  PERFORMANCE: [102, 101, 10],
  DRINK: [49, 4, 109],
  VISUAL: [49, 45, 12],
  UPDATED: "11月5日(日)午前9時",
} as RankingData;

useHead({
  title: "企画コンテスト | 23常盤祭公式HP~未来航路~",
  meta: [
    {
      name: "description",
      content:
        "全参加企画の頂点、今年も決めます!!企画部門別/オリジナルドリンク/ビジュアルの3部門で競います!!ぜひ投票しにお越し下さい!!",
    },
  ],
});

const { gtag } = useGtag();

gtag("event", "screen_view", {
  app_name: useRuntimeConfig().public.app_name,
  screen_name: "EventContest",
});
</script>

<template>
  <div class="page-root">
    <PageTitle title="企画コンテスト" />
    <div class="content-root">
      <div class="main-frame">
        全参加企画の頂点、<br />
        今回も決めます!!<br />
        皆さんの1票が結果に<br />
        大きく関わりますので<br />
        是非投票しに来てください!<br />
        協賛品も貰えちゃいます♪
      </div>
      <img id="how-to-vote-img" src="@/assets/images/how-to-vote.webp" />
      <div class="description">
        <ul>
          <li>飲食</li>
          <li>展示・物販</li>
          <li>パフォーマンス</li>
        </ul>
        全企画がこれらの部門で競い合います。
        <br />
        最も、得票数の多い企画が総合優勝となります！
      </div>
      <div class="description">
        <ul>
          <li>オリジナルドリンク部門</li>
        </ul>
        ドリンクを提供する企画のうち、参加を申請した企画が参加します。様々なドリンクを楽しみましょう！
      </div>
      <div class="description">
        <ul>
          <li>ビジュアル部門</li>
        </ul>
        全企画が対象で見た目を観点に投票します。Xを用いて投票をお願いします。写真をたくさん撮ろう！
      </div>
      <SponsorsListTitle text="中間結果発表" />
      <div v-if="rankingData" class="result-table-section">
        <h2>{{ rankingData.UPDATED }} 更新</h2>
        <div class="result-table-holder">
          <table class="result-table">
            <tr>
              <td>順位</td>
              <td>第1位</td>
              <td>第2位</td>
              <td>第3位</td>
            </tr>
            <tr>
              <td>飲食</td>
              <td v-for="(e, index) in rankingData.FOOD" :key="index">
                <NuxtLink :to="`/event/${e}`">
                  <ProjectCardCompact
                    :event-data="events.find((s: EventSummary) => s.id === e)"
                  />
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>展示・物販</td>
              <td v-for="(e, index) in rankingData.EXHIBITION" :key="index">
                <NuxtLink :to="`/event/${e}`">
                  <ProjectCardCompact
                    :event-data="events.find((s: EventSummary) => s.id === e)"
                  />
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>パフォーマンス</td>
              <td v-for="(e, index) in rankingData.PERFORMANCE" :key="index">
                <NuxtLink :to="`/event/${e}`">
                  <ProjectCardCompact
                    :event-data="events.find((s: EventSummary) => s.id === e)"
                  />
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>オリジナルドリンク</td>
              <td v-for="(e, index) in rankingData.DRINK" :key="index">
                <NuxtLink :to="`/event/${e}`">
                  <ProjectCardCompact
                    :event-data="events.find((s: EventSummary) => s.id === e)"
                  />
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td>ビジュアル</td>
              <td v-for="(e, index) in rankingData.VISUAL" :key="index">
                <NuxtLink :to="`/event/${e}`">
                  <ProjectCardCompact
                    :event-data="events.find((s: EventSummary) => s.id === e)"
                  />
                </NuxtLink>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div v-else class="result-description">
        中間発表はこれから!!お楽しみに!!
      </div>
    </div>
    <BackToHome />
  </div>
</template>

<style lang="scss" scoped>
@use "assets/scss/_breakpoint.scss" as *;

.page-root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
  overflow: hidden;

  @include sm {
    font-size: 0.9em;
  }
}

.content-root {
  width: min(1024px, 90%);
  display: flex;
  flex-direction: column;
}

#how-to-vote-img {
  width: 80%;
  align-self: center;
  margin: 1em 0;
}

.main-frame {
  font-size: min(1.5em, 6vw);
  width: fit-content;
  align-self: center;
  text-align: center;
  line-height: 1.3;
  padding: 1em;
  margin: 1em 0 0 0;
  box-sizing: border-box;
  border-radius: 1.5em;
  font-weight: bold;
  background: #ec7745;
  color: white;
}

.description {
  font-size: 1.3em;
  font-weight: lighter;
  width: min(90%, 600px);
  align-self: center;
  margin-bottom: 1em;

  > ul {
    width: fit-content;
    margin: 0 auto;
    font-size: 1.2em;
    padding: 1em;
    list-style-type: disc;
  }
}

.result-description {
  font-size: 1.3em;
  text-align: center;
}

.result-table-section {
  text-align: center;

  > h2 {
    font-size: 1.5em;
    margin: 1em 0;
  }
}

.result-table-holder {
  text-align: center;
  overflow-x: scroll;

  a {
    text-decoration: none;
    color: unset;
  }
}

tr {
  td {
    padding: 0.5em 1.5em 1.5em 0.5em;
    border: 2px solid var(--thick-font-color);

    &:first-child {
      padding: 0;
      vertical-align: middle;
      min-width: 10em;
    }
  }

  &:first-child {
    td {
      padding: 0;
      vertical-align: middle;
      line-height: 2em;
    }
  }
}

.back-button {
  align-self: center;
}
</style>
