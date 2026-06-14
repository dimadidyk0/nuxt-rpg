<script setup lang="ts">
const isOpen = ref(false)
const openModal = () => isOpen.value = true;
const closeModal = () => isOpen.value = false;
</script>

<template>
    <div class="root">
        <button class="button" @click="openModal">
            Map 📍
        </button>

        <MapModal :open="isOpen" @close="closeModal" />
    </div>
</template>

<style scoped>
    .root {
        display: flex;
    }

    .button {
        background: var(--color-dark-purple);
        border: 2px solid var(--color-aqua);
        color: var(--color-aqua);
        font-weight: bold;
        /* border-radius: 12px; */
        font-size: 18px;
        padding: 8px 16px;
        outline: none;
    }
</style>