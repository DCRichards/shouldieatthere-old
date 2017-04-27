<template>
  <div class="c-index">
    <div class="c-index__content">
      <h1>I'm hungry, should I eat at</h1>
      <input class="c-input-text" v-model="name" type="text" :size="name.length || 10" placeholder="Ali's" id="name"/>
      <h1 class="u-inline">in</h1>
      <input class="c-input-text" v-model="location" v-on:keyup.enter="submit" type="text" :size="location.length || 15" placeholder="Portsmouth" id="location"/>
      <h1 class="u-inline">?</h1>
      <h3 class="c-index__error-message u-color-red" v-if="this.$store.state.establishment.error">Hm, we couldn't find any ratings for {{ this.$store.state.establishment.query }}...</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      location: '',
    };
  },

  methods: {
    submit() {
      const { name, location } = this;

      this.$store.dispatch('findEstablishments', { name, location });
    },
  },
};
</script>

<style lang="scss">
@import '../scss/variables';

.c-index {
  display: table;
  height: 100vh;
  width: 100%;
}

.c-index__content {
  display: table-cell;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
}

.c-input-text {
  color: $ash;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  
  @media screen and (max-width: $break-sm) {
    font-size: 24px;
  }
}

.c-index__error-message {
  margin-top: 35px;
}
</style>
