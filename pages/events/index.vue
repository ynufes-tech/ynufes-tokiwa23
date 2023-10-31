<script lang="ts" setup>
import events from "~/assets/data/events.json";

useHead({
  title: "企画団体紹介ページ",
  meta: [
    {
      name: "description",
      content: "企画団体の紹介をしております！",
    },
  ],
});
// A, B, C, D, E, F, Y, BUSINESS, CITY, SCIENCE, EDUCATION, SPECIAL
// 12 of true array
const placeSelections = ref([
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
]);

const showFilterPlace = ref(false);
const showFilterGenre = ref(true);

const toggleFilterPlace = () => {
  showFilterGenre.value = false;
  showFilterPlace.value = !showFilterPlace.value;
};

const toggleFilterGenre = () => {
  showFilterPlace.value = false;
  showFilterGenre.value = !showFilterGenre.value;
};
</script>

<template>
  <div class="events">
    <PageTitle title="EVENTS" />
    <SectionTitle text="企画団体" />
    <div class="card-wrapper-background">
      <div class="filter">
        <div id="filter-row">
          <div
            id="f-place"
            :class="{ selected: showFilterPlace }"
            @click="toggleFilterPlace"
          >
            場所
          </div>
          <div
            id="f-genre"
            @click="toggleFilterGenre"
            :class="{ selected: showFilterGenre }"
          >
            ジャンル
          </div>
        </div>
        <div class="menu menu-p" v-show="showFilterPlace">
          <div>
            <div class="outside frame">
              <p>屋外エリア</p>
              <div>
                <input type="checkbox" id="f-A" v-model="placeSelections[0]" />
                <label for="f-A">エリアA</label>
              </div>
              <div>
                <input type="checkbox" id="f-B" v-model="placeSelections[1]" />
                <label for="f-B">エリアB</label>
              </div>
              <div>
                <input type="checkbox" id="f-C" v-model="placeSelections[2]" />
                <label for="f-C">エリアC</label>
              </div>
              <div>
                <input type="checkbox" id="f-D" v-model="placeSelections[3]" />
                <label for="f-D">エリアD</label>
              </div>
              <div>
                <input type="checkbox" id="f-E" v-model="placeSelections[4]" />
                <label for="f-E">エリアE</label>
              </div>
              <div>
                <input type="checkbox" id="f-F" v-model="placeSelections[5]" />
                <label for="f-F">エリアF</label>
              </div>
              <div>
                <input type="checkbox" id="f-Y" v-model="placeSelections[6]" />
                <label for="f-Y">エリアY</label>
              </div>
            </div>
          </div>
          <div>
            <div class="building frame">
              <p>講義棟</p>
              <div>
                <input
                  type="checkbox"
                  id="f-BUSINESS"
                  v-model="placeSelections[7]"
                />
                <label for="f-BUSINESS">経済経営学部</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-CITY"
                  v-model="placeSelections[8]"
                />
                <label for="f-CITY">都市科学部</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-SCIENCE"
                  v-model="placeSelections[9]"
                />
                <label for="f-SCIENCE">理工学部</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-EDUCATION"
                  v-model="placeSelections[10]"
                />
                <label for="f-EDUCATION">教育学部</label>
              </div>
            </div>
            <div class="checkbox-special">
              <input
                type="checkbox"
                id="f-SPECIAL"
                v-model="placeSelections[11]"
              />
              <label for="f-SPECIAL">特別な場所</label>
            </div>
            <NuxtLink class="map-link">各エリア・場所<br />について👉</NuxtLink>
          </div>
        </div>
        <div class="menu menu-g" v-show="showFilterGenre">
          <div id="selection-exhibition">
            <input id="event_genre-1" type="checkbox" />
            <label class="c-form-input" for="event_genre-1"
              >展示・体験・販売</label
            >
          </div>
          <div id="selection-performance">
            <input id="event_genre-2" type="checkbox" />
            <label class="c-form-input" for="event_genre-2"
              >パフォーマンス</label
            >
          </div>
          <div id="selection-food">
            <input id="event_genre-3" type="checkbox" />
            <label class="c-form-input" for="event_genre-3">食事</label>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <NuxtLink
          v-for="event in events"
          :key="event.id"
          :to="`/event/${event.id}`"
          class="card"
        >
          <ProjectCardCompact :event-data="event" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/scss/_breakpoint.scss" as *;

.section-title {
  max-width: 1024px;
  margin: 0 auto;
}

.filter {
  #filter-row {
    width: 90%;
    height: 40px;
    display: flex;
    margin: 0 auto;
    background-color: var(--main-background-color);
    text-align: center;

    .selected {
      background-color: #1674c0 !important;
      color: white;
      line-height: 40px;
    }

    > div {
      width: 50%;
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      border: 1px var(--thick-font-color) solid;
    }

    #f-place {
      border-radius: 10px 0 0 10px;
    }

    #f-genre {
      border-radius: 0 10px 10px 0;
    }
  }

  .menu {
    width: 90%;
    height: fit-content;
    display: flex;
    margin: 0 auto;
    background-color: var(--main-background-color);
    border: 1px var(--thick-font-color) solid;
    border-top: none;
    border-radius: 0 0 10px 10px;
  }

  .menu-p {
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-weight: bold;
    color: var(--thick-font-color);
    box-sizing: border-box;
    padding: 10px 5px;

    > div {
      display: flex;
      flex-direction: column;
      align-items: start;
    }

    .outside {
      width: 7em;
    }

    .building {
      width: 9em;
      align-items: flex-start;
    }

    .frame {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 1em 0.2em 0.5em;
      box-sizing: border-box;
      border: 1px var(--thick-font-color) solid;
      border-radius: 20px;

      & > p {
        position: absolute;
        top: 0;
        font-weight: bold;
        transform: translateY(-50%);
        padding-left: 10px;

        &::before {
          position: absolute;
          z-index: -1;
          left: 0;
          content: "";
          background: #fff;
          bottom: 50%;
          width: 100%;
          height: 1px;
        }
      }
    }

    .checkbox-special {
      margin: 0.2em 0 0.2em 0.6em;
    }

    .map-link {
      margin: 0.5em 0;
      width: 8em;
      align-self: center;
      border: 1px var(--thick-font-color) solid;
      padding: 0.4em;
      border-radius: 0.5em;
    }
  }

  .menu-g {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    padding: 1em;
    box-sizing: border-box;
    justify-content: center;

    > div {
      border: 1px var(--thick-font-color) solid;
      border-radius: 0.5em;
      padding: 5px;
    }

    #selection-exhibition {
      background-color: #ff5722;
    }

    #selection-performance {
      background-color: #4caf50;
    }

    #selection-food {
      background-color: #ffc107;
    }
  }
}

.card-wrapper-background {
  // background-position-y: 100px;
  background-image: url(/images/background.png);
  background-repeat: repeat-y;
  background-size: cover;
  background-clip: border-box;
}

.card-wrapper {
  max-width: 1024px;
  margin: 40px auto 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  @include md {
    margin-top: 20px;
  }

  a {
    text-decoration: none;
  }
}
</style>
