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
