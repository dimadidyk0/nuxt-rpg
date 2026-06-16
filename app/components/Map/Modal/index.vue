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

const menuList = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Shop',
    to: '/shop',
  },
  {
    title: 'Win',
    to: '/win',
  },
  {
    title: 'Lose',
    to: '/lose',
  },
]
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

      <nav class="menu">
        <NuxtLink
          v-for="item of menuList"
          :key="item.to"
          :prefetch-on="{ interaction: true }"
          :to="item.to"
          class="link"
          @click="emit('close')"
        >
          {{ item.title }}
        </NuxtLink>
      </nav>
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
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 24px;
      margin-bottom: 20px;
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

    .menu {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .link {
      font-size: 24px;
      border: 2px dashed var(--color-blush-pink);
      padding: 12px 24px;
      margin: 0 24px;
      text-align: center;
    }
</style>