<script lang="ts" setup>
// 当日までの時間を取得
const eventTime = new Date(`November 03 2023 13:00:00`).getTime();
onMounted(() => {
  const days = document.getElementById("days")!!;
  const hours = document.getElementById("hours")!!;
  const minutes = document.getElementById("minutes")!!;
  const seconds = document.getElementById("seconds")!!;

  updateCountdown({
    days,
    hours,
    minutes,
    seconds,
  });

  // 1秒ごとに関数を実行
  setInterval(updateCountdown, 1000, {
    days,
    hours,
    minutes,
    seconds,
  });
});

// 要素を取得

// カウントダウンの関数
function updateCountdown(elements: {
  days: HTMLElement;
  hours: HTMLElement;
  minutes: HTMLElement;
  seconds: HTMLElement;
}) {
  // 現在の時刻情報を取得する
  const currentTime = new Date().getTime();
  // 現在の時間と当日との時間の差を計算する（ミリ秒単位）
  const diff = eventTime - currentTime;

  // 現在から当日までの日数を計算
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  // 時間を計算
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  // 分を計算
  const m = Math.floor(diff / 1000 / 60) % 60;
  // 秒を計算
  const s = Math.floor(diff / 1000) % 60;

  // 取得した時間をDOMに追加
  elements.days.innerText = String(d);
  elements.hours.innerText = String(h < 10 ? "0" + h : h);
  elements.minutes.innerText = String(m < 10 ? "0" + m : m);
  elements.seconds.innerText = String(s < 10 ? "0" + s : s);
}
</script>

<template>
  <div class="home-widget">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-widget {
  color: #444455;
  text-align: center;
  width: max(340px, 35svw);
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 25px;
  overflow: hidden;
}

.title {
  height: 120px;
  background-color: #8cb6de;
  width: 100%;
}

.content {
  height: 120px;
}
</style>
