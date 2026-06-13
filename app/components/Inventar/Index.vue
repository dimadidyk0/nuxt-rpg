<script setup lang="ts">
    const inventory = [
        {
            id: 1,
            item: {
                id: 1,
                emoji: '🛡️',
                quantity: 2,
            }
        },
        {
            id: 2,
            item: {
                id: 2,
                emoji: '🧪',
                quantity: 12,
            }
        },
        { id: 3, item: null },
        { id: 4, item: null },
        { id: 5, item: null },
    ];
</script>

<template>
    <div class="list">
        <div v-for="{id, item} in inventory" :key="id"  class="item" >
            <div v-if="item">
                {{ item.emoji }}
                <span class="quantity">{{ item.quantity }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .list {
        display: flex;
        gap: 4px;
        margin: auto;
    }

    .item {
        height: 60px;
        width: 60px;
        border: 1px solid var(--color-cyan-teal);
        background: var(--color-indigo);
        border-radius: 4px;
        font-size: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        &:not(:empty) {
            background-color: var(--color-dark-teal);
            border-color: var(--color-aqua);;

            &:active {
                background-color: var(--color-teal-green);
            }
            @media (hover: hover) {
                &:hover {
                    background-color: var(--color-teal-green);
                }
            }
        }
    }

    .quantity {
        position: absolute;
        bottom: 2px;
        right: 4px;
        font-size: 14px;
        font-weight: bold;
        color: var(--color-sand-gold);
    }
</style>