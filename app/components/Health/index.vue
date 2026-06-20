<script setup lang="ts">
import { usePlayerStore } from '~/stores/player';

const store = usePlayerStore();
const { health } = storeToRefs(store);
const ratio = computed(() => {
  return health.value.current / health.value.max
})
const themeSettings = computed(() => ({
  '--ratio': `${ratio.value * 100}%`,
}))

console.log({themeSettings: themeSettings.value});

</script>

<template>
    <div class="health" :style="themeSettings">
        {{ health.current }}/{{ health.max }}
    </div>
</template>

<style scoped>
    .health {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        line-height: 24px;
        padding: 0 28px;
        border: 2px solid var(--color-coral-pink);
        color: var(--color-sand-gold);
        background: linear-gradient(
            to right,
            var(--color-bright-red) 0%,
            var(--color-bright-red) var(--ratio),
            transparent var(--ratio) ,
            transparent
        );
    }
</style>