<script setup lang="ts">
import events from "~/assets/data/events.json";
import { Event } from "~/model/event";

export interface CrumbInfo {
  name: string;
  crumbPath: string;
}

const route = useRoute();
const path = route.path;
const resolveCrumbs = (path: string): Array<CrumbInfo> => {
  const p: Array<string> = path.split("/");
  if (p.length < 2) {
    return [{ name: "ホーム", crumbPath: "/" }];
  }
  switch (p[1]) {
    case "about":
      return resolveAbout(p);
    case "pamphlet":
      return resolvePamphlet(p);
    case "sponsors":
      return resolveSponsors(p);
    case "sp":
      return resolveSp(p);
    case "event":
      return resolveEvent(p);
    case "events":
      return resolveEvents(p);
    case "map":
      return resolveMap(p);
    case "posters":
      return resolvePosters(p);
    case "faq":
      return resolveFaq(p);
    case "time-schedule":
      return resolveTimeSchedule(p);
    case "access":
      return resolveAccess(p);
    default:
      return [];
  }
};
const resolveAbout = (p: Array<string>): Array<CrumbInfo> => {
  return [{ name: "ABOUT", crumbPath: "/about" }];
};
const resolvePamphlet = (p: Array<string>): Array<CrumbInfo> => {
  return [{ name: "パンフレット", crumbPath: "/pamphlet" }];
};
const resolveSponsors = (p: Array<string>): Array<CrumbInfo> => {
  return [{ name: "ご協賛企業・個人一覧", crumbPath: "/sponsors" }];
};
const resolveSp = (p: Array<string>): Array<CrumbInfo> => {
  if (p[2] === "voice-actors") {
    return [
      { name: "本部企画", crumbPath: "/sp" },
      { name: "声優トークライブ in YNU 2023", crumbPath: "/sp/voice-actor" },
    ];
  } else if (p[2] === "comedian") {
    return [
      { name: "本部企画", crumbPath: "/sp" },
      {
        name: "東京ホテイソン降臨！横浜ナショナルクラッシュ！",
        crumbPath: "/sp/comedian",
      },
    ];
  } else if (p[2] === "photo-contest") {
    return [
      { name: "本部企画", crumbPath: "/sp" },
      { name: "フォトコンテスト", crumbPath: "/sp/photo-contest" },
    ];
  } else {
    return [{ name: "本部企画", crumbPath: "/sp" }];
  }
};
const resolveEvent = (p: Array<string>): Array<CrumbInfo> => {
  const id = route.params.id;
  const event = events.find((e) => e.id === Number(id)) as Event;
  return [
    { name: "イベント", crumbPath: "/event" },
    { name: `${event?.event_name}`, crumbPath: `/event/${id}` },
  ];
};
const resolveEvents = (p: Array<string>): Array<CrumbInfo> => {
  return [{ name: "企画一覧", crumbPath: "/events" }];
};
const resolveMap = (p: Array<string>): Array<CrumbInfo> => {
  return [{ name: "学内マップ", crumbPath: "/map" }];
};
const resolvePosters = (p: Array<string>): Array<CrumbInfo> => {
  return [{ name: "ポスター案ページ", crumbPath: "/posters" }];
};
const resolveFaq = (p: Array<string>): Array<CrumbInfo> => {
  return [{ name: "よくある質問", crumbPath: "/faq" }];
};
const resolveTimeSchedule = (p: Array<string>): Array<CrumbInfo> => {
  return [{ name: "タイムスケジュール", crumbPath: "/time-schedule" }];
};
const resolveAccess = (p: Array<string>): Array<CrumbInfo> => {
  return [{ name: "アクセス", crumbPath: "/access" }];
};
</script>
<template>
  <div class="bread-crumbs-list">
    <div class="list-body">
      <img class="list-head" src="/images/bread-crumbs/boat-icon.webp" />
      <NuxtLink to="/" class="list-link">
        <p class="list-text">ホーム</p>
      </NuxtLink>
      <div class="list-item" v-for="crumb in resolveCrumbs(path)">
        <img class="list-arrow" src="/images/bread-crumbs/list-arrow.webp" />
        <NuxtLink :to="crumb.crumbPath" class="list-link">
          <p class="list-text">{{ crumb.name }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  width: 1em;
  height: 1em;
  margin-top: 0.1em;
  margin-left: 1em;
}

p {
  margin-left: 1em;
  color: var(--thick-font-color);
  white-space: nowrap;
}

.bread-crumbs-list {
  display: flex;
  align-items: center;
  margin-left: 2em;
}

.list-body {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  > a {
    text-decoration: none;
  }
}

.list-item {
  display: flex;
  align-items: center;

  > a {
    text-decoration: none;
  }
}
</style>
