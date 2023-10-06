<script lang="ts" setup>

// 来年の1月1日00:00:00のDateオブジェクトを取得
const newYearTime = new Date(`November 03 2023 13:00:00`).getTime();
onMounted(() => {
  const days = document.getElementById('days')!!;
  const hours = document.getElementById('hours')!!;
  const minutes = document.getElementById('minutes')!!;
  const seconds = document.getElementById('seconds')!!;

  updateCountdown({
    days, hours, minutes, seconds
  })

// 1秒ごとに関数を実行
  setInterval(updateCountdown, 1000, {
    days, hours, minutes, seconds
  });
})

// 要素を取得


// カウントダウンの関数
function updateCountdown(
  elements:
    {
      days: HTMLElement,
      hours: HTMLElement,
      minutes: HTMLElement,
      seconds: HTMLElement,
    }
) {
  // 現在の時刻情報を取得する
  const currentTime = new Date().getTime();
  // 現在の時間と新年の時間の差を計算する（ミリ秒単位）
  const diff = newYearTime - currentTime;

  // 現在から新年までの日数を計算
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  // 時間を計算
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  // 分を計算
  const m = Math.floor(diff / 1000 / 60) % 60;
  // 秒を計算
  const s = Math.floor(diff / 1000) % 60;

  // 取得した時間をDOMに追加
  elements.days.innerText = String(d);
  elements.hours.innerText = String(h < 10 ? '0' + h : h);
  elements.minutes.innerText = String(m < 10 ? '0' + m : m);
  elements.seconds.innerText = String(s < 10 ? '0' + s : s);
}

</script>

<template>
  <div class="Countdown">
    <div class="countdown">
      <h1 class="countdown-title">常盤祭2023</h1>
      <h2 class="countdown-sub-title">まで...</h2>
      <div class="time-container">
        <div class="time-wrapper"><p class="time"><span id="days" class="time-num">--</span>days</p></div>
        <div class="time-wrapper"><p class="time"><span id="hours" class="time-num">--</span>hours</p></div>
        <div class="time-wrapper"><p class="time"><span id="minutes" class="time-num">--</span>minutes</p></div>
        <div class="time-wrapper"><p class="time"><span id="seconds" class="time-num">--</span>seconds</p></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Countdown {
  position: relative;
  display: flex;
  align-items: center;
  width: max(340px, 35svw);
}

/* カウントダウンタイマー本体 */
.countdown {
  position: relative;
  color: #444455;
  text-align: center;
}

/* タイトル */
.countdown-title {
  font-size: 1.8rem;
  font-weight: bold;
  padding: 30px 0 0 0;
  background-color: #8CB6DE;
  color: #444455;
  border-radius: 25px 25px 0 0;
  width: max(340px, 35svw);
}

.countdown-sub-title {
  text-indent: 40%;
  font-size: 1rem;
  font-weight: bolder;
  background-color: #8CB6DE;
  padding: 15px 0;
  text-align: center;
  color: #444455;
  width: max(340px, 35svw);
}

/* タイマー部分を囲うコンテナー */
.time-container {
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
  border-radius: 0 0 25px 25px;
  width: max(340px, 35svw);
}

.time-wrapper {
  width: 25%;
}

/* hours, minutes, secondsの共通スタイル */
.time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 15px;
  font-size: 12px;
  font-weight: bold;
}

/* hours, minutes, secondsの数値のスタイル */
.time-num {
  font-size: 30px;
  line-height: 1;
  margin: 25px 15px;
}

</style>
