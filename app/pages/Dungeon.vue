<template>
  <main class="root">
    <h2 class="title">Level 1</h2>
    <div class="content">
      <Monster
        name="Skeleton"
        image="/assets/images/enemies/skeleton.gif"
        :health="{ current: 14, max: 30 }"
      />
      <NuxtImg
        :src="'/assets/images/dungeon.png'"
        class="bg"
        width="384"
        height="384"
        alt="item.alt"
        loading="lazy"
      />
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

.content {
  border: 8px solid var(--color-burgundy);
  position: relative;
}

.bg {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
}
</style>
