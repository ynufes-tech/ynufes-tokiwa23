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
  position: relative;
  z-index: 1;
  margin: 100px 0;
  @include md {
    margin: 60px 0;
  }
  @include sm {
    margin: 40px 0;
  }
}

.main-card {
  width: 769px;
  height: 550px;
  background-color: #fbfbfb;
  border: #575f6a 1px solid;
  border-radius: 120px;
  position: relative;
  z-index: auto;
  @include md {
    width: 401px;
    height: 550px;
    border-radius: 100px;
  }
  @include sm {
    width: 325px;
    height: 450px;
    border-radius: 80px;
  }

  &::after {
    content: "";
    width: 769px;
    height: 550px;
    border: #575f6a 1px solid;
    border-bottom-right-radius: 120px;
    border-top-left-radius: 120px;
    position: absolute;
    z-index: -2;
    @include md {
      width: 401px;
      height: 550px;
    }
    @include sm {
      width: 325px;
      height: 450px;
    }
  }
}

.card-title {
  font-size: 96px;
  font-weight: 800;
  position: absolute;
  z-index: 2;
  top: -60px;
  left: 140px;
  color: var(--thick-font-color);
  @include md {
    rotate: 90deg;
    font-size: 64px;
    top: 160px;
    left: 180px;
  }
  @include sm {
    rotate: 90deg;
    font-size: 50px;
    top: 130px;
    left: 150px;
  }
}

.card-sub-title {
  font-size: 58px;
  font-weight: bold;
  position: absolute;
  z-index: 2;
  text-align: center;
  top: 100px;
  left: 100px;
  color: var(--thick-font-color);
  @include md {
    font-size: 30px;
    top: 200px;
    left: 30px;
  }
  @include sm {
    font-size: 24px;
    top: 160px;
    left: 20px;
  }
}

.card-script {
  position: absolute;
  font-size: 32px;
  width: 70%;
  z-index: 2;
  top: 180px;
  left: 100px;
  margin-top: 50px;
  color: var(--thick-font-color);
  @include md {
    font-size: 20px;
    top: 240px;
    left: 30px;
    width: 70%;
  }
  @include sm {
    font-size: 16px;
    top: 200px;
    left: 20px;
    width: 70%;
  }
}

.read-more {
  font-size: 40px;
  height: fit-content;
  font-weight: bold;
  position: absolute;
  text-align: center;
  z-index: 2;
  bottom: 80px;
  right: 90px;
  display: flex;
  border-bottom: #575f6a 2px solid;
  color: var(--thick-font-color);
  @include md {
    font-size: 24px;
    bottom: 60px;
    right: 60px;
  }
  @include sm {
    font-size: 20px;
    bottom: 40px;
    right: 45px;
  }

  &::after {
    content: "→";
    font-size: 40px;
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
