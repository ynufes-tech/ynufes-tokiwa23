<script lang="ts" setup>
import SponsorBannar from "~/components/SponsorBannar.vue";
import { CardType } from "~/components/TopCard.vue";

definePageMeta({
  layout: "home",
});
useHead({
  title: "Top | 23常盤祭公式HP~未来航路~",
  meta: [
    {
      name: "description",
      content:
        "11/3~5に開催される23常盤祭 公式HPです!! 最新情報を随時更新していきます!!",
    },
  ],
});

interface CardData {
  color: CardType; // これは実際のプロジェクトで使用される色の型/値によって異なる場合があります（例：stringや特定の列挙型など）
  link: string;
  subTitle: string;
  text: string;
  title: string;
}

const cards: CardData[] = [
  {
    color: CardType.Green,
    link: "/access",
    subTitle: "電車でのアクセス",
    text: "羽沢横浜国大駅・三ッ沢上町駅・和田町駅からのアクセスについてご案内しています。",
    title: "ACCESS",
  },
  {
    color: CardType.Yellow,
    link: "/events",
    subTitle: "企画一覧",
    text: "出展企画を紹介しています！常盤祭での企画の詳細はこちらをご確認ください！",
    title: "EVENTS",
  },
  {
    color: CardType.Cyan,
    link: "/about",
    subTitle: "常盤祭について",
    text: "常盤祭の概要やテーマ、横浜国立大学の大学祭についてご紹介しています！",
    title: "ABOUT",
  },
  // {
  //   color: CardType.Green,
  //   link: "sp",
  //   subTitle: "本部企画の紹介",
  //   text: "こちらでは大学祭実行委員会が企画した本部企画についての情報を記載しております。豪華な企画が盛りだくさんとなっております。ぜひご覧ください。",
  //   title: "SP",
  // },
  {
    color: CardType.LightBlue,
    link: "time-schedule",
    subTitle: "タイムスケジュール",
    text: "本部企画のタイムスケジュールを掲載しております。日程、時間、場所をまとめて掲載しています。",
    title: "SCHEDULE",
  },
  {
    color: CardType.Yellow,
    link: "map",
    subTitle: "学内MAP",
    text: "学内MAPはこちらから！マップを片手に大学を探索して大学祭を満喫しましょう！",
    title: "MAP",
  },
  {
    color: CardType.Cyan,
    link: "pamphlet",
    subTitle: "パンフレット",
    text: "常盤祭のパンフレットのダウンロードはこちらから！当日案内所でもパンフレットの配布をしております。",
    title: "PAMPHLET",
  },
  {
    color: CardType.Green,
    link: "sponsors",
    subTitle: "協賛企業について",
    text: "23常盤祭開催にあたり、多くの企業・団体の皆様からご協賛を頂きました。ご協賛頂きました皆様の一覧はこちら！",
    title: "SPONSORS",
  },
  {
    color: CardType.LightBlue,
    link: "faq",
    subTitle: "よくある質問",
    text: "大学祭に関するよくある質問について掲載しております。",
    title: "FAQ",
  },
];

const { gtag } = useGtag();

gtag("event", "screen_view", {
  app_name: useRuntimeConfig().public.app_name,
  screen_name: "TOP",
});
</script>

<template>
  <div class="page-root">
    <div id="top-pane">
      <h1 id="top-title">未来航路</h1>
      <div id="schedule">
        <h2>開催日時</h2>
        <table>
          <!--          <tr>-->
          <!--            <th>日付</th>-->
          <!--            <th>時間</th>-->
          <!--          </tr>-->
          <tr>
            <td colspan="3">～Day1～</td>
          </tr>
          <tr>
            <td>11/3</td>
            <td>(Fri)</td>
            <td>13:00～21:00</td>
          </tr>
          <tr>
            <td colspan="3">～Day2～</td>
          </tr>
          <tr>
            <td>11/4</td>
            <td>(Sat)</td>
            <td>&ensp;9:00～21:00</td>
          </tr>
          <tr>
            <td colspan="3">～Day3～</td>
          </tr>
          <tr>
            <td>11/5</td>
            <td>(Sun)</td>
            <td>&ensp;9:00～15:00</td>
          </tr>
        </table>
      </div>
      <div class="pre-guest-event">
        <h1>大物ゲストが来校決定！詳しくはコチラ</h1>
        <div class="event-buttons-row">
          <NuxtLink to="/sp/voice-actor">
            <PreGuestEventButton text="声優ゲスト企画詳細" />
          </NuxtLink>
          <NuxtLink to="/sp/comedian">
            <PreGuestEventButton text="芸人ゲスト企画詳細" />
          </NuxtLink>
        </div>
      </div>
      <div class="pre-guest-event">
        <h1>企画コンテスト開催中!!</h1>
        <div class="event-buttons-row">
          <NuxtLink to="/sp/contest">
            <PreGuestEventButton text="企画コンテスト詳細" />
          </NuxtLink>
        </div>
      </div>
      <div class="pre-guest-event">
        <h1>フォトコンテスト優秀作品決定!!</h1>
        <div class="event-buttons-row">
          <NuxtLink to="/sp/photo-contest">
            <PreGuestEventButton text="フォトコンテスト企画詳細" />
          </NuxtLink>
        </div>
      </div>
      <!--      <PageTitle title="Service" />-->
      <div class="service-section home-column">
        <Countdown />
        <HomeSNS />
      </div>
      <SponsorBannar />
      <!--      <BouncingText text="※只今製作中..." />-->
      <!--      <p id="upcoming-notify">-->
      <!--        <span>常盤祭に関する最新情報は</span><span>随時公開されていきます</span>-->
      <!--      </p>-->
      <div class="home-cards">
        <NuxtLink
          v-for="(card, index) in cards"
          :key="index"
          :to="card.link"
          class="card-link"
        >
          <TopCard
            :color="card.color"
            :subTitle="card.subTitle"
            :text="card.text"
            :title="card.title"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/scss/variables.scss" as *;

.page-root {
  display: flex;
  flex-direction: column;
}

#top-pane {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

#top-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: min(30vw, 70vh);
  margin-top: 0;
  font-size: min(10em, 15vw);
  color: var(--thick-font-color);
  transform: translateX(-10%);
  font-weight: 600;
}

#schedule {
  align-self: flex-end;
  font-size: min(2em, 6vw);
  box-sizing: border-box;
  padding: 0 1.5em;
  width: min(60vw, 20em);
  animation: fade-in-from-right 1s ease-in-out;

  h2 {
    text-decoration: underline;
    //bold
    font-weight: 700;
    font-size: 1.5em;
    text-align: center;
    padding-bottom: 0.2em;
  }

  table {
    font-weight: 600;
    margin: 0 auto;
    font-size: 1em;
    border-collapse: collapse;

    td {
      padding: 0.2em 0;
    }

    tr:nth-child(odd) {
      text-align: center;
    }

    td:nth-child(2) {
      padding-right: 0.2em;
    }
  }
}

@keyframes fade-in-from-right {
  0% {
    opacity: 0;
    transform: translateX(10%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@include md {
  #schedule {
    width: 100vw;
  }
}

.bouncing-text {
  margin: 0.4em auto 0;
  font-size: 3em;
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

.pre-guest-event {
  > h1 {
    text-align: center;
    padding-top: 1em;
    font-size: 2em;
  }

  .event-buttons-row {
    margin-top: 0.7rem;
    display: flex;
    justify-content: center;
    width: fit-content;
    text-decoration: none;

    > a {
      text-decoration: none;
      color: #8cb6de;
      padding: 0 1em;

      &:hover {
        color: #ffffff;

        .pre-guest-event-button {
          background-color: #8cb6de;
        }
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      margin: 0.7rem auto 0;
      > a {
        margin-bottom: 1em;
      }
    }
  }
}

.home-column {
  width: min(1024px, 90vw);
  margin: 0 auto;
}

.service-section {
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.home-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: min(880px, 100%);
  gap: 1em 30px;
  margin: 60px auto;
  padding: 0 20px;
  box-sizing: border-box;
  animation: fade-in-from-right 1s ease-in-out;

  a {
    text-decoration: none;
  }

  // responsive with media query
  // if narrower than 402 * 3 + 30 * 2 + 20 * 2
  // and wider than 402 * 2 + 30 * 1 + 20 * 2
  @media screen and (min-width: 874px) {
    a:nth-child(even) {
      transform: translateY(3em);
    }

    // 奇数番目かつ最後の要素
    a:nth-child(odd):last-child {
      transform: translateY(3em);
    }
  }
  // wider than 402 * 3 + 30 * 2 + 20 * 2
  //@media screen and (min-width: 1306px) {
  //  gap: 3em 30px;
  //  padding-top: 1em;
  //  a:nth-child(3n + 1) {
  //    transform: translateY(0.5em);
  //  }
  //  a:nth-child(3n + 2) {
  //    transform: translateY(-1.5em);
  //  }
  //  a:nth-child(3n + 3) {
  //    transform: translateY(1em);
  //  }
  //}
}
</style>
