<template>
  <div id="app" class="c-app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import './scss/variables';
@import './scss/base/main';

.c-app {
  color: $charcoal;
  font-family: $helvetica;
}
</style>
