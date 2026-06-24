<script setup lang="ts">
interface Props {
  name: string
  image: string
  health: { current: number; max: number }
}

const props = defineProps<Props>()

const ratio = computed(() => props.health.current / props.health.max)
const themeSettings = computed(() => ({
  '--ratio': `${ratio.value * 100}%`
}))
</script>

<template>
  <div class="monster">
    <NuxtImg :src="image" class="img" width="384" height="384" :alt="name" loading="lazy" />
    <div class="health-bar" :style="themeSettings">{{ health.current }}/{{ health.max }}</div>
  </div>
</template>

<style scoped>
.monster {
  position: relative;
  display: inline-block;
}

.health-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  padding: 2px 16px;
  border: 2px solid var(--color-coral-pink);
  color: var(--color-sand-gold);
  background: linear-gradient(
    to right,
    var(--color-bright-red) 0%,
    var(--color-bright-red) var(--ratio),
    transparent var(--ratio),
    transparent
  );
}

.img {
  position: relative;
  left: -10px;
  animation: movement 1s infinite steps(1);
}

@keyframes movement {
  0% {
    bottom: 0;
  }
  50% {
    bottom: 4px;
  }
  100% {
    bottom: 0;
  }
}
</style>
