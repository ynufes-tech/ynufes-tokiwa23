<script lang="ts" setup>
import { genreToString } from "~/model/genre";
import { placeToString } from "~/model/area";

const props = defineProps<{
  eventData: {
    id: number;
    event_name: string;
    event_genre: number;
    place_id: number;
    place_name: string;
    org_name: string;
  };
}>();
const showNoImage = function (e: any) {
  e.target.src =
    "https://storage.googleapis.com/tokiwa23-assets/icons/no-image";
  e.target.onerror = null;
};
const iconURL = `https://storage.googleapis.com/tokiwa23-assets/icons/${props.eventData.id}`;
</script>

<template>
  <div class="project-card">
    <div class="incline-card">
      <div class="card-photo">
        <img alt="anchor" class="anchor-icon" src="/images/card-icon.webp" />
        <img
          alt="back-image"
          class="back-image"
          src="/images/card-back-img.webp"
        />
        <img
          :src="iconURL"
          alt="project-icon"
          class="project-icon"
          @error="showNoImage"
        />
      </div>
      <div class="card-script">
        <p class="event-name">{{ props.eventData.event_name }}</p>
        <hr class="line" />
        <p>{{ props.eventData.org_name }}</p>
        <p>
          {{ genreToString(props.eventData.event_genre) }}
        </p>
        <p>
          {{
            placeToString(props.eventData.place_id) + props.eventData.place_name
          }}
        </p>
      </div>
      <div class="card-button">
        <p class="button-messeage">MORE</p>
        <img alt="arrow" class="arrow" src="/images/arrow.webp" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/scss/_breakpoint.scss" as *;
.incline-card {
  position: relative;
  width: 265px;
  height: 430px;
  background-color: var(--main-background-color);
  border-radius: 10px;
  border: 2px var(--thick-font-color) solid;
  @include md {
    height: 300px;
  }
}

.project-card {
  width: fit-content;
  position: relative;
  z-index: 1;

  &:hover {
    transform: rotate(5deg);
    transition: 0.2s;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 15px;
    left: 15px;
    width: 265px;
    height: 430px;
    background-color: var(--main-background-color);
    border-radius: 10px;
    border: 2px var(--thick-font-color) solid;
    @include md {
      height: 300px;
    }
  }
}

.anchor-icon {
  position: absolute;
  z-index: 4;
  top: 8px;
  right: 12px;
}

.back-image {
  position: relative;
  z-index: 3;
  top: 15px;
  left: 18px;

  @include md {
    display: none;
  }
}

.project-icon {
  width: 150px;
  height: 150px;
  object-fit: cover;
  position: absolute;
  z-index: 4;
  top: 110px;
  left: 57.5px;
  border-radius: 20px;

  @include md {
    display: block;
    padding: 10px 0 0 0;
    position: static;
    margin: 0 auto;
  }
}

.card-script {
  position: relative;
  text-align: center;
  top: 90px;
  z-index: 4;
  @include md {
    position: static;
  }

  p {
    color: var(--thin-font-color);
    font-size: 14px;
    font-weight: bold;
    margin: 12px auto;
  }

  .event-name {
    font-size: 16px;
  }
}

.line {
  width: 90%;
  background-color: var(--thin-font-color);
  height: 2px;
  border: none;
}

.card-button {
  position: absolute;
  z-index: 4;
  bottom: 5px;
  right: 15px;
  display: flex;
  align-items: center;

  .button-messeage {
    margin: 0 0;
    color: var(--thin-font-color);
  }

  .arrow {
    width: 20px;
    height: 15px;
  }
}
</style>
