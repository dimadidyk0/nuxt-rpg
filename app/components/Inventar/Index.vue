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
                quantity: 10,
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
        gap: 8px;
        margin: auto;
    }

    .item {
        height: 60px;
        width: 60px;
        border: 2px solid var(--color-dark-purple);
        background: var(--color-dark-brown);
        border-radius: 4px;
        font-size: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        transition: scale 0.2s ease-in, background-color 0.2s ease-out;

        &:not(:empty) {
            background-color: var(--color-burgundy);
            border-color: var(--color-dusty-rose);

            &:active {
                background-color: var(--color-coral-pink);
                scale: 1.1;
            }
            @media (hover: hover) {
                &:hover {
                    background-color: var(--color-coral-pink);
                    scale: 1.1;
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
        color: var(--color-blush-pink);
    }
</style>