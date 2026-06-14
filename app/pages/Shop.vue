<script setup lang="ts">
import { usePlayerStore } from '~/stores/player';

const { addGold, removeGold } = usePlayerStore();
</script>

<template>
  <div class="win">
    MONEY!!!

    <div class="actions">
      <button class="button add" @click="addGold(10)">Find 10 gold!</button>
      <button class="button remove" @click="removeGold(10)">Lose 10 gold...</button>
    </div>
  </div>
</template>

<style scoped>
  .win {
    font-size: 48px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  .button {
    border: 2px solid var(--color-gray-lilac);
    font-size: 24px;
    padding: 12px 24px;
  }

  .add {
    background-color: var(--color-cyan-teal);
  }
  .remove {
    background-color: var(--color-bright-red);
  }
</style>