export const usePlayerStore = defineStore('player', () => {
    const gold = ref(30)

    function addGold(amount: number) {
        console.log(amount)
        gold.value += amount
    }
    function removeGold(amount: number) {
        gold.value -= amount
        gold.value = Math.max(0, gold.value)
    }
    return { gold, addGold, removeGold }
})