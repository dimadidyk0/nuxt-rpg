<template>
  <div class="app">
    <header class="header">
      <Gold />

      <MapButton />
    </header>

    <main class="main">
      <NuxtPage />
    </main>
      
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

  .header {
    border-bottom: 2px solid var(--color-indigo);
    background: var(--color-dark-purple);
    margin-top: 0;
    display: flex;
    padding: 20px;
    justify-content: space-between;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    flex-grow: 1;
  }

  .footer {
    margin-top: auto;
    display: flex;
    padding: 20px;
    border-top: 2px solid var(--color-indigo);
    background: var(--color-dark-purple);
  }
</style>