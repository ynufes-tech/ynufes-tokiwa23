<script lang="ts" setup>
import { Genre, genreToString, getTagColor } from "~/model/genre";
import { Area, placeToString } from "~/model/area";

const props = defineProps<{
  eventData: {
    id: number;
    e_name: string;
    e_genre: Genre;
    o_name: string;
    area: Area;
    p_name: string;
  };
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
  <div class="project-card">
    <div class="incline-card">
      <img
        :src="iconURL"
        alt="project-icon"
        class="project-icon"
        @error="showNoImage"
      />
      <div class="card-photo">
        <img alt="anchor" class="anchor-icon" src="/images/card-icon.webp" />
      </div>
      <div class="card-script">
        <p class="event-name">{{ props.eventData.e_name }}</p>
        <hr class="line" />
        <p class="org-name">{{ props.eventData.o_name }}</p>
        <p class="genre" :style="eventTagStyle(props.eventData.e_genre)">
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
  width: 180px;
  color: var(--thin-font-color);
  font-weight: bold;
  font-size: 14px;

  .event-name {
    margin: 5px 0 0 0;
    height: 16px;
    font-size: 16px;
  }

  .org-name {
    margin: 5px;
    line-height: 1;
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
    background-color: var(--thin-font-color);
    height: 1px;
    margin: 4px;
    border: none;
  }
}

.more-bottom {
  position: absolute;
  z-index: 4;
  bottom: 5px;
  right: 15px;
  display: flex;
  align-items: center;

  .message {
    font-size: 12px;
    margin: 0 0;
    color: var(--thin-font-color);
  }

  .arrow {
    width: 16px;
    height: 12px;
  }
}
</style>
