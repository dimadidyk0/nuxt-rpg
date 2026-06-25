<template>
  <main class="root">
    <h2 class="title">Level 1</h2>
    <Dungeon>
      <Monster
        name="Skeleton"
        image="/assets/images/enemies/skeleton.gif"
        :health="{ current: 14, max: 30 }"
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
