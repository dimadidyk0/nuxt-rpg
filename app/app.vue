<template>
  <div class="app">
    Game over<br>
    You Win!

    <footer class="footer">
      <Inventar />
    </footer>
  </div>
</template>

<style scoped>
  .app {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .footer {
    margin-top: auto;
    display: flex;
    padding: 24px;
    border-top: 2px solid var(--color-indigo);
    background: var(--color-dark-purple);
  }
</style>