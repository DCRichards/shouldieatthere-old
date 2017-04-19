<template>
  <div class="c-index">
    <div class="c-index__content">
      <h1>Should I get a Kebab at</h1>
      <input class="c-input-text" v-model="name" type="text" size="10" placeholder="Ali's" id="name"/>
      <h1 class="u-inline">in</h1>
      <input class="c-input-text" v-model="location" v-on:keyup.enter="submit" type="text" size="15" placeholder="Portsmouth" id="location"/>
      <h1 class="u-inline">?</h1>
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
      const name = this.name;
      const location = this.location;

      this.$store.dispatch('retrieveEstablishment', { name, location });
    },
  },
};
</script>

<style lang="scss">
@import '../scss/variables';

.c-index {
  display: table;
  min-height: 100vh;
  width: 100%;
}

.c-index__content {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.c-input-text {
  color: $kebab;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
</style>
