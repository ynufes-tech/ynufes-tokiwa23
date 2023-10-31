<script lang="ts" setup>
import events from "~/assets/data/events.json";
import type { EventSummary } from "~/model/event";
import { Genre } from "~/model/genre";
import { Area } from "~/model/area";

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
const placeSelections = ref({
  [Area.A]: true,
  [Area.B]: true,
  [Area.C]: true,
  [Area.D]: true,
  [Area.E]: true,
  [Area.F]: true,
  [Area.Y]: true,
  [Area.BUSINESS]: true,
  [Area.CITY]: true,
  [Area.SCIENCE]: true,
  [Area.EDUCATION]: true,
  [Area.SPECIAL]: true,
});

const genreSelections = ref({
  [Genre.FOOD]: true,
  [Genre.PERFORMANCE]: true,
  [Genre.EXHIBITION]: true,
});
const showFilterPlace = ref(false);
const showFilterGenre = ref(false);

const toggleFilterPlace = () => {
  showFilterGenre.value = false;
  showFilterPlace.value = !showFilterPlace.value;
};

const toggleFilterGenre = () => {
  showFilterPlace.value = false;
  showFilterGenre.value = !showFilterGenre.value;
};

const filterEvents = computed(() => {
  return events.filter((e: EventSummary) => {
    return placeSelections.value[e.area] && genreSelections.value[e.e_genre];
  });
});

const isGridView = ref(false);

// set isGridView to true if the screen width is larger than 600px
onMounted(() => {
  isGridView.value = window.innerWidth > 600;
});
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
                <input
                  type="checkbox"
                  id="f-A"
                  v-model="placeSelections[Area.A]"
                />
                <label for="f-A">エリアA</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-B"
                  v-model="placeSelections[Area.B]"
                />
                <label for="f-B">エリアB</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-C"
                  v-model="placeSelections[Area.C]"
                />
                <label for="f-C">エリアC</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-D"
                  v-model="placeSelections[Area.D]"
                />
                <label for="f-D">エリアD</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-E"
                  v-model="placeSelections[Area.E]"
                />
                <label for="f-E">エリアE</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-F"
                  v-model="placeSelections[Area.F]"
                />
                <label for="f-F">エリアF</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-Y"
                  v-model="placeSelections[Area.Y]"
                />
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
                  v-model="placeSelections[Area.BUSINESS]"
                />
                <label for="f-BUSINESS">経済経営学部</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-CITY"
                  v-model="placeSelections[Area.CITY]"
                />
                <label for="f-CITY">都市科学部</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-SCIENCE"
                  v-model="placeSelections[Area.SCIENCE]"
                />
                <label for="f-SCIENCE">理工学部</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="f-EDUCATION"
                  v-model="placeSelections[Area.EDUCATION]"
                />
                <label for="f-EDUCATION">教育学部</label>
              </div>
            </div>
            <div class="checkbox-special">
              <input
                type="checkbox"
                id="f-SPECIAL"
                v-model="placeSelections[Area.SPECIAL]"
              />
              <label for="f-SPECIAL">特別な場所</label>
            </div>
            <NuxtLink class="map-link">各エリア・場所<br />について👉</NuxtLink>
          </div>
        </div>
        <div class="menu menu-g" v-show="showFilterGenre">
          <div id="selection-exhibition">
            <input
              id="event_genre-1"
              type="checkbox"
              v-model="genreSelections[Genre.EXHIBITION]"
            />
            <label class="c-form-input" for="event_genre-1"
              >展示・体験・販売</label
            >
          </div>
          <div id="selection-performance">
            <input
              id="event_genre-2"
              type="checkbox"
              v-model="genreSelections[Genre.PERFORMANCE]"
            />
            <label class="c-form-input" for="event_genre-2"
              >パフォーマンス</label
            >
          </div>
          <div id="selection-food">
            <input
              id="event_genre-3"
              type="checkbox"
              v-model="genreSelections[Genre.FOOD]"
            />
            <label class="c-form-input" for="event_genre-3">食事 </label>
          </div>
        </div>
        <div class="order-adjust-row">
          <div>
            <button
              id="grid"
              @click="isGridView = true"
              :class="{
                active: isGridView,
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Grid</span>
            </button>
            <button
              id="list"
              :class="{
                active: !isGridView,
              }"
              @click="isGridView = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              <span>List</span>
            </button>
          </div>
          <!--          Toggle button for switching list view and item view-->
        </div>
      </div>
      <div class="card-wrapper">
        <NuxtLink
          v-for="event in filterEvents"
          :key="event.id"
          :to="`/event/${event.id}`"
          class="card"
        >
          <ProjectCard v-if="isGridView" :event-data="event" />
          <ProjectCardCompact v-else :event-data="event" />
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
  max-width: 500px;
  margin: 3em auto;
  width: 90%;
  display: flex;
  flex-direction: column;

  @include md {
    margin: 1em auto;
  }

  #filter-row {
    height: 40px;
    display: flex;
    background-color: var(--main-background-color);
    text-align: center;
    user-select: none;

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
  gap: 30px;
  @include md {
    margin-top: 20px;
  }

  a {
    text-decoration: none;
  }
}

.order-adjust-row {
  margin-top: 0.5em;
  /* Wrapper Styles */
  div {
    display: inline-flex;
    border: 2px solid #edf2f7;
    background-color: #edf2f7;
    border-radius: 9999px;
    font-size: 0.875rem;
    color: #a0aec0;
    line-height: 1;
  }

  /* Button Styles */
  button {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.3s cubic-bezier(0.4, 0, 1, 1);
  }

  button:hover,
  button:focus {
    color: #8fc5f1;
    outline: none;
  }

  .active {
    background: #1674c0;
    color: white;
  }

  /* First Button (Grid) specific styles */
  button#grid {
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
  }

  /* Second Button (List) specific styles */
  button#list {
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
  }

  /* SVG Styles */
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    fill: currentColor;
  }
}
</style>
