<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: "#2c3e50",
  },
});
</script>
<template>
  <div class="bouncing-text">
    <span v-for="t in props.text" :key="t.index" class="character">
      {{ t }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.character {
  display: flex;
  line-height: 2;
  animation:
    bounce 4s ease infinite,
    gradient 20s ease alternate infinite;
  background: var(--thick-font-color);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 400% 400%;
}

.bouncing-text {
  display: flex;
}

@for $i from 1 through 15 {
  .character:nth-child(#{$i}) {
    animation-delay: $i * 0.02s;
  }
}

@keyframes bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  2% {
    transform: scale(1.1, 0.85) translateY(0);
  }
  7% {
    transform: scale(0.85, 1.2) translateY(-0.5em);
  }
  13% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  18% {
    transform: scale(1, 1) translateY(-0.25em);
  }
  22% {
    transform: scale(1, 1) translateY(0);
  }
  25% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}

@keyframes gradient {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 0 100%;
  }

  50% {
    background-position: 100% 100%;
  }

  100% {
    background-position: 100% 0%;
  }
}
</style>
