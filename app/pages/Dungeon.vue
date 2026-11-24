<script setup lang="ts">
import { useEnemyStore } from '~/stores/enemy'

const isAtacked = ref(false)
const turns = ref(1)

const store = useEnemyStore()
const player = usePlayerStore()
const { health, strength } = storeToRefs(store)
onMounted(() => {
  store.initMonster(1)
  console.log(health.value, strength.value)
})

function handleAttackClick() {
  isAtacked.value = true
  const power = 1
  const damage = Math.ceil(Math.random() * 10) * power

  store.changeHealth(-damage)
  turns.value--
  setTimeout(() => {
    isAtacked.value = false
  }, 400)
}

watch(turns, (curr) => {
  if (curr <= 0) {
    setTimeout(() => {
      player.changeHealth(-5)
      turns.value++
      console.warn('You have been attacked!')
    }, 400)
  }
})
</script>

<template>
  <main class="root">
    <h2 class="title">Level 1</h2>

    <Dungeon>
      <Monster
        name="Skeleton"
        :is-atacked="isAtacked"
        image="/assets/images/enemies/skeleton.gif"
        :health="{ current: health.current, max: health.max }"
      />
    </Dungeon>

    <div class="actions">
      <button :disabled="turns <= 0" class="action attack" @click="handleAttackClick">
        Attack
      </button>
    </div>
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

.actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.action {
  padding: 20px;
}

.action[disabled] {
  opacity: 0.5;
}

.attack {
  border: 2px solid var(--color-bright-red);
  background: var(--color-crimson);
}
</style>
