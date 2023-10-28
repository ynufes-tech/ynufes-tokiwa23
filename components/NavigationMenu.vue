<script lang="ts" setup>
import { ref } from "vue";

const showMenu = ref(false);
const toggle = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <div class="navigation-menu">
    <a
      :class="{
        'under-hover-button': showMenu,
      }"
      id="button-title"
      @click="toggle"
    >
      MENU
    </a>
    <div v-show="showMenu">
      <nav class="nav-list-wrapper">
        <ul class="nav-list">
          <li>
            <NuxtLink to="/" @click="toggle">トップ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="toggle">常盤祭紹介</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events" @click="toggle">企画一覧</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/map" @click="toggle">マップ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pamphlet" @click="toggle"
              >パンフレット
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/time-schedule" @click="toggle">タイムテーブル</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/sp" @click="toggle">本部企画一覧</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/sponsors" @click="toggle"
              >ご協賛企業・個人一覧
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/faq" @click="toggle">FAQ - よくある質問</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/access" @click="toggle">アクセス</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="/events" @click="close">企画一覧</NuxtLink>
          </li> -->
          <!-- <li>
            <NuxtLink to="/events/time-table" @click="close"
              >タイムテーブル</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/sp" @click="close">本部企画一覧</NuxtLink>
          </li> -->
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-menu {
  position: relative;
  z-index: 10000;
}

#button-title {
  display: inline-block;
  width: 6rem;
  text-align: center;
  color: #ffffff;
  line-height: 2.5rem;
  background: #da8080;
  outline: none;
  border: 2px solid #da8080;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;

  &.under-hover-button {
    color: #da8080;
    background-color: #fcf9ef;
  }
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
    color: inherit;

    &.router-link-active {
      font-size: 1.3rem;
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
</style>
