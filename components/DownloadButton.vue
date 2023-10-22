<script setup lang="ts"></script>

<template>
  <div class="download-button">
    <div class="download-button-text">
      <p>ー準備中ー</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.download-button {
  border-radius: 2em;
  border: solid 1.5px var(--thick-font-color);
  width: 15em;
  height: 3em;
  text-align: center;
  opacity: 50%;

  &:hover {
    background-color: var(--thick-font-color);
    color: #fff;
  }

  .download-button-text {
    padding-top: 1em;
    transition: 0.5s;

    &:active {
      padding-top: 1.3em;
    }
  }

  > p {
    color: var(--thick-font-color);
    font-weight: bold;
  }
}

@media screen and (max-width: 768px) {
  .download-button {
    width: 11em;
  }
}
</style>
