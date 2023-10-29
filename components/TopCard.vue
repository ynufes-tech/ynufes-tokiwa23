<script lang="ts">
export enum CardType {
  Yellow = 0,
  LightBlue = 1,
  Cyan = 2,
  Green = 3,
}
</script>
<script lang="ts" setup>
const props = defineProps<{
  title: string;
  subTitle: string;
  text: string;
  link: string;
  color: CardType;
}>();

const cardBackgroundStyle = computed(() => {
  return {
    yellow: props.color == CardType.Yellow,
    "light-blue": props.color == CardType.LightBlue,
    cyan: props.color == CardType.Cyan,
    green: props.color == CardType.Green,
  };
});
</script>
<template>
  <div class="top-card">
    <div :class="cardBackgroundStyle" class="main-card">
      <h1 class="card-title">{{ props.title }}</h1>
      <h2 class="card-sub-title">{{ props.subTitle }}</h2>
      <p class="card-script">{{ props.text }}</p>
      <NuxtLink :to="props.link" class="read-more">
        <pre>READ MORE</pre>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/scss/variables.scss" as *;

.yellow::after {
  background-color: #fdfeb8;
}

.light-blue::after {
  background-color: #8ac6d6;
}

.cyan::after {
  background-color: #8cb6de;
}

.green::after {
  background-color: #87c8a0;
}

.top-card {
  z-index: 1;
  margin-top: 2em;
  @include md {
    margin-top: 0;
  }
  @include sm {
  }
}

.main-card {
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  width: 400px;
  aspect-ratio: 1.618;
  background-color: #fbfbfb;
  border: #575f6a 1px solid;
  border-radius: 50px;
  position: relative;
  z-index: auto;
  @include md {
    aspect-ratio: 1.618;
    width: 400px;
    border-radius: 50px;
  }
  @include sm {
    width: min(300px, 90vw);
    aspect-ratio: 1;
    border-radius: 60px;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border: #575f6a 1px solid;
    border-bottom-right-radius: 120px;
    border-top-left-radius: 120px;
    position: absolute;
    z-index: -2;
  }
}

.card-title {
  width: 100%;
  text-align: center;
  font-size: 1.8em;
  font-weight: 800;
  position: absolute;
  z-index: 2;
  transform: translateY(-0.5em);
  color: var(--thick-font-color);
  @include md {
    right: 0;
    transform-origin: top right;
    width: calc(100% / 1.618);
    text-align: start;
    font-size: 1.5em;
    transform: rotate(90deg) translateX(100%) translateX(1.5em)
      translateY(0.6em);
  }
  @include sm {
  }
}

.card-sub-title {
  font-size: 1.5em;
  font-weight: bold;
  z-index: 2;
  text-align: center;
  align-self: start;
  margin: 10% 10% 0 10%;
  height: 20%;
  color: var(--thick-font-color);
  @include md {
  }
  @include sm {
    font-size: 24px;
    top: 160px;
    left: 20px;
  }
}

.card-script {
  width: 80%;
  height: 50%;
  z-index: 2;
  margin: 0 10% 10%;
  color: var(--thick-font-color);
  @include md {
    width: 70%;
  }
  @include sm {
  }
}

.read-more {
  text-decoration: none;
  font-size: 1em;
  height: fit-content;
  font-weight: bold;
  position: absolute;
  text-align: center;
  z-index: 2;
  bottom: 1.5em;
  right: 4em;
  display: flex;
  border-bottom: #575f6a 2px solid;
  color: var(--thick-font-color);
  @include md {
    bottom: 10%;
  }
  @include sm {
    font-size: 20px;
    bottom: 10%;
    right: 45px;
  }

  &::after {
    content: "→";
    color: var(--thick-font-color);
    @include md {
      font-size: 24px;
    }
    @include sm {
      font-size: 20px;
    }
  }

  &:hover {
    translate: 10px;
    transition: 0.3s;
  }
}
</style>
