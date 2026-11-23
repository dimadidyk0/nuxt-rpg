export const useEnemyStore = defineStore('enemy', () => {
  const monster = ref({
    health: {
      current: 0,
      max: 0
    }
  })

  function initMonster(level: number) {
    monster.value.health.current = 100 + (level - 1) * 10
    monster.value.health.max = 100 + (level - 1) * 10
    console.log({ monster })
  }

  return {
    monster,
    //
    initMonster
  }
})
