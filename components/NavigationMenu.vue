<script lang="ts" setup>
import { ref } from "vue";
const showMenu = ref(false);
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
const close = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <div class="navigation-menu">
    <div
      :class="{
        'navigation-menu-button-title': !showMenu,
        'under-hover-button': showMenu,
      }"
    >
      <span @click="toggleMenu">MENU</span>
    </div>
    <div v-show="showMenu">
      <nav class="nav-list-wrapper">
        <ul class="nav-list">
          <li>
            <NuxtLink to="/" @click="close">トップ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="close">常盤祭紹介</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pamphlet" @click="close"
              >学内マップ＆パンフレット</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/sponsors" @click="close"
              >ご協賛企業・個人一覧</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/events" @click="close">企画一覧</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events/time-table" @click="close"
              >タイムテーブル</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/sp" @click="close">本部企画一覧</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navigation-menu {
  position: relative;
}

>>>>>>>814f982
  (ナビゲーションメニューの配置の修正)
  .navigation-menu-button-title {
  display: inline-block;
  width: 6rem;
  text-align: center;
  color: #ffffff;
  line-height: 2.5rem;
  background: #da8080;
  outline: none;
  background-color: #da8080;
  border: 2px solid #da8080;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: underline;
}
.under-hover-button {
  display: inline-block;
  width: 6rem;
  text-align: center;
  color: #da8080;
  line-height: 2.5rem;
  outline: none;
  background-color: #fcf9ef;
  border: 2px solid #da8080;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: underline;
}

.nav-list-wrapper {
  position: absolute;
  top: calc(100% + 0.5em);
  right: 0;
  margin-top: 1vw;
  display: inline-block;
  width: 270px;
  padding: 1rem;
  text-align: left;
  color: #da8080;
  list-style-type: none;
  text-decoration: none;
  line-height: 50px;
  background: #fcf9ef;
  outline: none;
  border: 2px solid #da8080;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 15px;
  z-index: 10000;
}

.nav-list {
  margin-left: 1vw;
  color: #da8080;
  > li > a {
    text-decoration: none;
    color: #da8080;
    &.router-link-active {
      font-size: 1.3rem;
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
</style>
