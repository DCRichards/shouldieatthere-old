<template>
  <div class="c-establishment">
    <div class="c-establishment__content">
      <h1>{{ name }}</h1>
      <h3>{{ address }}</h3>
      <h1 :class="'u-color-' + ratingColor">Rating: {{ rating }}/5</h1>
      <h1>{{ ratingMessage }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    address() {
      const establishment = this.$store.state.establishment.data;

      if (!establishment) {
        return '';
      }

      return [
        establishment.AddressLine1 !== '' ? establishment.AddressLine1 : establishment.BusinessName,
        establishment.AddressLine2 !== '' ? establishment.AddressLine2 : undefined,
        establishment.AddressLine3 !== '' ? establishment.AddressLine3 : undefined,
      ]
      .join(', ');
    },
    name() {
      const establishment = this.$store.state.establishment.data;

      return establishment ? establishment.BusinessName : '';
    },
    rating() {
      const establishment = this.$store.state.establishment.data;

      return establishment ? establishment.RatingValue : '';
    },
    ratingColor() {
      const establishment = this.$store.state.establishment.data;

      if (!establishment) {
        return '';
      }

      const rating = parseInt(establishment.RatingValue, 10);

      if (rating > 4) {
        return 'green';
      }

      if (rating > 2) {
        return 'amber';
      }

      return 'red';
    },
    ratingMessage() {
      const establishment = this.$store.state.establishment.data;

      if (!establishment) {
        return '';
      }

      const rating = parseInt(establishment.RatingValue, 10);

      if (rating > 4) {
        return 'Safest Kebab you\'ll ever eat.';
      }

      if (rating > 3) {
        return 'You\'ll probably be okay...';
      }

      if (rating > 2) {
        return 'What doesn\'t kill you makes you stronger.';
      }

      return 'NOPE. JUST, NO.';
    },
  },
};
</script>

<style lang="scss">
@import '../scss/variables';
h3 {
  color: $ash;
}

.c-establishment {
  display: table;
  min-height: 100vh;
  width: 100%;
}

.c-establishment__content {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
</style>
