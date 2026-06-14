<script setup lang="ts">
import { usePlayerStore } from '~/stores/player';

const store = usePlayerStore();
const { gold } = storeToRefs(store);
console.log(gold)
</script>

<template>
    <div class="gold">
        <i>💰</i> {{ gold }}
    </div>
</template>

<style scoped>
    .gold {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        line-height: 24px;
        padding: 12px 20px 10px 16px;
        background: var(--color-wood-brown);
        border: 2px solid var(--color-sand-gold);
        color: var(--color-sand-gold);
        font-weight: bold;

        i {
            font-size: 24px;
            font-style: normal;
            position: relative;
            top: -4px;
            padding-right: 4px;
        }
    }
</style>