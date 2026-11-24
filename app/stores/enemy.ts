export const useEnemyStore = defineStore('enemy', () => {
  const health = ref({
    current: 0,
    max: 0
  })
  const strength = ref(0)

  function initMonster(level: number) {
    health.value.current = 100 + (level - 1) * 10
    health.value.max = 100 + (level - 1) * 10
    strength.value = 1 + 0.2 * level
  }

  function changeHealth(amount: number) {
    health.value.current += amount
    health.value.current = Math.min(health.value.max, health.value.current)
    health.value.current = Math.max(0, health.value.current)
  }

  return {
    health,
    strength,
    //
    initMonster,
    changeHealth
  }
})
