<script lang="ts" setup>
import { Genre, genreToString, getTagColor } from "~/model/genre";
import { Area, placeToString } from "~/model/area";

const props = defineProps<{
  eventData:
    | {
        id: number;
        e_name: string;
        e_genre: Genre;
        o_name: string;
        area: Area;
        p_name: string;
      }
    | null
    | undefined;
}>();
const showNoImage = function (e: any) {
  e.target.src =
    "https://storage.googleapis.com/tokiwa23-assets/icons/no-image";
  e.target.onerror = null;
};
const iconURL = `https://storage.googleapis.com/tokiwa23-assets/icons/${props.eventData.id}`;

const eventTagStyle = (genre: Genre) => {
  return {
    background: getTagColor(genre),
  };
};
</script>

<template>
  <div class="project-card" v-if="props.eventData">
    <div class="incline-card">
      <img
        :src="iconURL"
        alt="project-icon"
        class="project-icon"
        @error="showNoImage"
      />
      <div class="card-script">
        <p class="event-name">{{ props.eventData.e_name }}</p>
        <hr class="line" />
        <p class="org-name">{{ props.eventData.o_name }}</p>
        <p :style="eventTagStyle(props.eventData.e_genre)" class="genre">
          {{ genreToString(props.eventData.e_genre) }}
        </p>
        <p class="place">
          {{ placeToString(props.eventData.area) + props.eventData.p_name }}
        </p>
      </div>
      <div class="more-bottom">
        <p class="message">MORE</p>
        <img alt="arrow" class="arrow" src="/images/arrow.webp" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/scss/_breakpoint.scss" as *;

.project-card {
  position: relative;
  z-index: 1;
  width: 300px;
  height: 90px;

  &:hover {
    transform: translate(1px, 1px);
    transition: 0.2s;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 300px;
    height: 90px;
    transform: translate(10px, 10px);
    background-color: var(--main-background-color);
    border-radius: 10px;
    border: 2px var(--thick-font-color) solid;
  }

  &:hover::after {
    transform: translate(9px, 9px);
    transition: 0.2s;
  }

  .incline-card {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: var(--main-background-color);
    border-radius: 10px;
    border: 2px var(--thick-font-color) solid;
  }
}

.card-photo {
  z-index: 10;
}

.anchor-icon {
  width: 30px;
  aspect-ratio: 1;
  position: absolute;
  z-index: 4;
  top: 5px;
  right: 5px;
}

.project-icon {
  margin: 5px;
  width: 80px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 10px;
}

.card-script {
  text-align: center;
  width: calc(100% - 90px);
  color: var(--thin-font-color);
  font-weight: bold;
  font-size: 14px;

  .event-name {
    margin: 5px 5% 0 5%;
    height: 16px;
    font-size: 16px;
    width: 90%;
    max-lines: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .org-name {
    margin: 5px 5%;
    width: 90%;
    line-height: 1;
    max-lines: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .genre {
    width: fit-content;
    color: white;
    margin: 4px auto;
    font-size: 0.7em;
    padding: 0.4em;
    background: red;
    border-radius: 10px;
  }

  .place {
    height: 16px;
  }

  .line {
    width: 90%;
    margin: 4px 5%;
    background-color: var(--thin-font-color);
    height: 1px;
    border: none;
  }
}

.more-bottom {
  position: absolute;
  z-index: 4;
  bottom: 5px;
  right: 10px;
  display: flex;
  align-items: center;

  .message {
    font-size: 12px;
    margin: 0 0;
    transform: translateX(7px);
    color: var(--thin-font-color);
  }

  .arrow {
    width: 16px;
    height: 12px;
    transform: translateX(3px);
  }
}
</style>
