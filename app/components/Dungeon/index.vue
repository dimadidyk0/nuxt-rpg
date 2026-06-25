<template>
  <div class="content">
    <slot></slot>

    <NuxtImg
      :src="'/assets/images/dungeon.png'"
      class="bg"
      width="384"
      height="384"
      alt="item.alt"
      loading="lazy"
    />
  </div>
</template>

<style scoped>
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
