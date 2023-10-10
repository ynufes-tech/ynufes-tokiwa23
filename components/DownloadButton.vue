<script setup lang="ts">

</script>

<template>
    <div class="download-button">
        <div class="download-button-text">
            <p>DOWNLOAD</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.download-button {
  border-radius: 2em;
  border: solid 1.5px var(--thick-font-color);
  width: 11em;
  height: 3em;
  text-align: center;
  margin: 2em 0;

  &:hover {
    background-color: var(--thick-font-color);
    color: #fff;
  }

  .download-button-text {
    padding-top: 1em;
    transition: .5s;


    &:active {
      padding-top: 1.3em;
    }
  }

  > p {
    color: var(--thick-font-color);
    font-weight: bold;
  }
}

</style>