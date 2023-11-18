<script setup lang="ts">
  import HeaderBlock from './components/HeaderBlock.vue';
  import FooterBlock from './components/FooterBlock.vue';
</script>

<template>
  <div class="page">
    <header-block/>
    <main class="page__content">
      <router-view/>
    </main>
    <footer-block/>
  </div>
</template>

<style lang="scss">
  @import '@/assets/scss/global.scss';

  .container {
    width: 100%;
    max-width: 1400px;

    margin: 0 auto;

    padding: 0 20px;
  }

  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__content {
      flex-grow: 1;
    }

    &__footer {
      flex-shrink: 1;
    }
  }
</style>
