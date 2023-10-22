<script lang="ts" setup>
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
        <div class="pre-guest-event-button">
          <NuxtLink to="/sp/voice-actor">
            <PreGuestEventButton text="声優ゲスト企画詳細" />
          </NuxtLink>
          <NuxtLink to="/sp/comedian">
            <PreGuestEventButton text="芸人ゲスト企画詳細" />
          </NuxtLink>
        </div>
      </div>
      <PageTitle title="Service" />
      <div class="service-section home-column">
        <Countdown />
        <HomeSNS />
      </div>
      <BouncingText text="※只今製作中..." />
      <p id="upcoming-notify">
        <span>常盤祭に関する最新情報は</span><span>随時公開されていきます</span>
      </p>
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
    padding-top: 3em;
    font-size: 2em;
  }

  .pre-guest-event-button {
    margin-top: 0.7rem;
    display: flex;
    justify-content: center;
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
</style>
