export const usePlayerStore = defineStore('player', () => {
    const health = ref({
        current: 100,
        max: 100,
    })
    const gold = ref(30)

    function addGold(amount: number) {
        gold.value += amount
    }
    function removeGold(amount: number) {
        gold.value -= amount
        gold.value = Math.max(0, gold.value)
    }

    // 

    function changeHealth(amount: number) {
        health.value.current += amount
        health.value.current = Math.min(health.value.max, health.value.current)
        health.value.current = Math.max(0, health.value.current)
    }
    function changeMaxHealth(amount: number) {
        health.value.max += amount
        health.value.max += Math.max(0, health.value.max)
    }

    return {
        gold,
        addGold,
        removeGold,
        //
        health,
        changeHealth,
        changeMaxHealth,
    }
},{
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  }
})