<script lang="ts" setup>
definePageMeta({
  layout: 'home'
})
</script>

<template>
  <div class="page-root">
    <LogoPrime/>
    <div id="top-pane">
      <h1 id="top-title">未来航路</h1>
      <div id="schedule">
        <h2>開催日時</h2>
        <table>
          <!--          <tr>-->
          <!--            <th>日付</th>-->
          <!--            <th>時間</th>-->
          <!--          </tr>-->
          <tr>
            <td colspan="3">～Day1～</td>
          </tr>
          <tr>
            <td>11/3</td>
            <td>(Fri)</td>
            <td>13:00～21:00</td>
          </tr>
          <tr>
            <td colspan="3">～Day2～</td>
          </tr>
          <tr>
            <td>11/4</td>
            <td>(Sat)</td>
            <td>&ensp;9:00～21:00</td>
          </tr>
          <tr>
            <td colspan="3">～Day3～</td>
          </tr>
          <tr>
            <td>11/5</td>
            <td>(Sun)</td>
            <td>&ensp;9:00～15:00</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/scss/variables.scss" as *;

.logo-prime {
  font-size: min(16px, 3.5vw);
}

.page-root {
  display: flex;
  flex-direction: column;
}

#top-pane {
  display: flex;
  flex-direction: column;
  width: 100%;
}

#top-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: min(30vw, 70vh);
  margin-top: 0;
  font-size: min(10em, 15vw);
  color: var(--thick-font-color);
  transform: translateX(-10%);
}

#schedule {
  align-self: flex-end;
  font-size: min(2em, 6vw);
  box-sizing: border-box;
  padding: 0 1.5em;
  width: min(60vw, 20em);

  h2 {
    text-decoration: underline;
    //bold
    font-weight: 700;
    font-size: 1.5em;
    text-align: center;
    padding-bottom: .2em;
  }

  table {
    font-weight: 600;
    margin: 0 auto;
    font-size: 1em;
    border-collapse: collapse;

    td {
      padding: .2em 0;
    }

    tr:nth-child(odd) {
      text-align: center;
    }

    td:nth-child(2) {
      padding-right: .2em;
    }
  }
}

@include md {

  #schedule {
    width: 100vw;
  }
}
</style>