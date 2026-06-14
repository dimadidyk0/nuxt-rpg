<script setup lang="ts">
interface Props {
  open?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
})
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <Teleport to="#teleports">
    <div
      v-if="props.open"
      class="modal"
    >
      <div class="header">
        <p class="title">Where should I go...</p>

        <button class="pixel-borders pixel-borders--3 close" @click="emit('close')">
          ❌
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
    .modal {
        position: fixed;
        height: 100vh;
        width: 100vw;
        background: var(--color-dark-purple);
        top: 0;
        left: 0;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 24px;
    }

    .title {
      line-height: 24px;
      font-size: 18px;
    }

    .close {
        height: 52px;
        width: 52px;
        border: 2px solid var(--color-blush-pink);
        background-color: transparent;
        outline: none;
    }
</style>