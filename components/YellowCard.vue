<script lang="ts" setup></script>

<template>
  <div class="yellow-card">
    <div class="main-card">
      <h1 class="card-title">EVENTS</h1>
      <h2 class="card-sub-title">企画団体の紹介</h2>
      <p class="card-script">
        ここでは大学祭における企画について紹介しております。各サークルが行う出展企画、実行委員会が行う本部企画の紹介とその日時をお知らせしております。
      </p>
      <a class="read-more">
        <pre>READ MORE</pre>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.yellow-card {
  position: relative;
  color: var(--thick-font-color);
  z-index: 0;
}

.main-card {
  width: max(60svw, 769px);
  height: 550px;
  background-color: #fbfbfb;
  border: #575f6a 1px solid;
  border-radius: 120px;
  position: relative;
}
.main-card::after {
  content: "";
  width: max(60svw, 769px);
  height: 550px;
  background-color: #fdfeb8;
  border: #575f6a 1px solid;
  border-bottom-right-radius: 120px;
  border-top-left-radius: 120px;
  position: absolute;
  z-index: -2;
}
.card-title {
  font-size: 96px;
  font-weight: 800;
  position: absolute;
  z-index: 2;
  top: -60px;
  left: 140px;
}
.card-sub-title {
  font-size: 58px;
  font-weight: bold;
  position: absolute;
  z-index: 2;
  text-align: center;
  top: 100px;
  left: 100px;
}
.card-script {
  position: absolute;
  font-size: 32px;
  width: 70%;
  z-index: 2;
  top: 180px;
  left: 100px;
  margin-top: 50px;
}
.read-more {
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  text-align: center;
  z-index: 2;
  bottom: 80px;
  right: 90px;
  display: flex;
  border-bottom: #575f6a 2px solid;
}
.read-more::after {
  content: "→";
  font-size: 40px;
}
.read-more:hover {
  translate: 10px;
  transition: 0.3s;
}
</style>
