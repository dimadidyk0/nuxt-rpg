<script setup lang="ts">
import { useEnemyStore } from '~/stores/enemy'

const store = useEnemyStore()
const { monster } = storeToRefs(store)
onMounted(() => {
  store.initMonster(1)
})
</script>

<template>
  <main class="root">
    <h2 class="title">Level 1</h2>

    <Dungeon>
      <Monster
        name="Skeleton"
        image="/assets/images/enemies/skeleton.gif"
        :health="{ current: monster.health.current, max: monster.health.max }"
      />
    </Dungeon>
  </main>
</template>

<style scoped>
.root {
  flex-grow: 1;
  padding-top: 24px;
}

.title {
  font-size: 24px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 24px;
}
</style>
