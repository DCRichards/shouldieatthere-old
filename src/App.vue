<template>
  <div id="app" class="c-app">
    <router-view></router-view>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter';

export default {
  components: {
    AppFooter,
  },
  name: 'app',
};
</script>

<style lang="scss">
@import './scss/variables';
@import './scss/base/main';

.c-app {
  font-family: $helvetica;
}
</style>
