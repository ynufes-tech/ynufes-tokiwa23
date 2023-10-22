<script lang="ts" setup></script>

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
  width: min(340px, 90svw);
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 25px;
  overflow: hidden;
}

.title {
  height: 90px;
  background-color: #8cb6de;
  width: 100%;
}

.content {
  height: 160px;
}
</style>
