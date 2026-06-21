<template>
  <main class="root">
    <h2 class="title">
      Level 1
    </h2>
    <div class="content">
      <NuxtImg 
        :src="'/assets/images/enemies/skeleton.gif'"
        class="img"
        width="384" 
        height="384" 
        alt="item.alt"
        loading="lazy"
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

  .img {
    position: relative;
    left: -10px;
  }

  .img {
    animation: movement 1s infinite steps(1);
  }
  

  @keyframes movement {
    0%   { bottom: 0; }
    50%  { bottom: 4px; }
    100%  { bottom: 0; }
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