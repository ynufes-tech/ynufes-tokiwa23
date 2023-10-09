<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})
defineProps({
  error: Object
})
</script>

<template>
  <div class="error">
    <PageTitle title="NOT FOUND"/>
    <h1 class="error-number">
       {{ error?.statusCode }}
    </h1>
    <p class="main">お探しのページは見つかりませんでした。</p>
    <a class="home"  @click="clearError({ redirect: '/' })">
        <img src="/images/button-side-img.svg" class="button-side"/>
        <h2 class="go-home">
      ホームに戻る
    </h2>
    <img src="/images/button-side-img.svg" class="button-side"/>
    </a>
  </div>
</template>

<style  lang="scss" scoped>
@use "assets/scss/_breakpoint.scss" as *;
.error{
    background-color: var(--main-background-color);
    height: 100vh;
}
.error-number{
  font-size: 240px;
  font-weight: bolder;
  color: #575F6A;
  justify-content: center;
  text-align: center;
  margin: 0.5em auto;
  @include md {
    font-size: 120px;
  }
  @include sm{
    font-size: 64px;
  }
}
.main{
  font-size: 64px;
  color: #575F6A;
  margin: 150px auto;
  text-align: center;
  @include md {
    font-size: 32px;
  }
  @include sm{
    font-size: 16px;
  }
}
.home{
  width: fit-content;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 100px auto;
  background: url(/images/wave-underline.svg) bottom repeat-x;
}

.go-home{
  font-size: 88px;
  color: #575F6A;
  justify-content: center;
  text-align: center;
  @include md {
    font-size: 48px;
  }
  @include sm{
    font-size: 24px;
  }
}
.button-side{
    width: 88px;
    @include md {
        width: 48px;
    }
    @include sm{
        width: 24px;
    }
}
</style>


