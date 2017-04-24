<template>
  <div class="c-establishment">
    <div v-if="establishment" class="c-establishment__content">
      <h1>{{ establishment.BusinessName }}</h1>
      <h4><a :href="map">{{ address }}</a></h4>
      <h1 :class="'u-badge u-badge-' + ratingColor">Hygiene Rating: {{ establishment.RatingValue }}</h1>
      <h1>{{ ratingMessage }}</h1>
    </div>
    <div v-else class="c-establishment__error">
      <h1>{{ search }}?</h1>
      <h3>Sorry, we couldn't find anything matching that name.</h3>
    </div>
  </div>
</template>

<script>
import router from '../router';

export default {
  computed: {
    address() {
      const { AddressLine1, AddressLine2, AddressLine3, PostCode } = this.$store.state.establishment.data;

      const address = [];

      if (AddressLine1 !== '') {
        address.push(AddressLine1);
      }

      if (AddressLine2 !== '') {
        address.push(AddressLine2);
      }

      if (AddressLine3 !== '') {
        address.push(AddressLine3);
      }

      if (PostCode !== '') {
        address.push(PostCode);
      }

      return address.join(', ');
    },
    establishment() {
      return this.$store.state.establishment.data;
    },
    map() {
      const { latitude, longitude } = this.$store.state.establishment.data.geocode;

      return `https://maps.google.com/?q=${latitude},${longitude}`;
    },
    ratingColor() {
      const { RatingValue } = this.$store.state.establishment.data;
      const rating = parseInt(RatingValue, 10);

      if (rating === 5) {
        return 'green';
      }

      if (rating >= 3) {
        return 'amber';
      }

      if (rating <= 2) {
        return 'red';
      }

      return 'grey';
    },
    ratingMessage() {
      const { RatingValue } = this.$store.state.establishment.data;
      const rating = parseInt(RatingValue, 10);

      if (rating === 5) {
        return 'Delicious! Everything is clean as a whistle!';
      }

      if (rating >= 3) {
        return 'You\'ll probably be okay...';
      }

      if (rating === 2) {
        return 'What doesn\'t kill you, makes you stronger.';
      }

      if (rating <= 1) {
        return 'NOPE. JUST, NO.';
      }

      return 'Go forth, into the unknown.';
    },
    search() {
      return this.$store.state.establishment.query;
    },
  },

  created() {
    if (!this.$store.state.establishment.data) {
      // Redirect home on refresh.
      router.push('/');
    }
  },
};
</script>

<style lang="scss">
@import '../scss/variables';

h1 {
  margin-bottom: 5px;
  padding: 0 5px;
}

h4 {
  color: $ash;
  margin-top: 0;
  
  a {
    color: $ash;
    text-decoration: none;
  }
}

.c-establishment {
  display: table;
  min-height: 100vh;
  width: 100%;
}

.c-establishment__content, .c-establishment__error {
  display: table-cell;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
}

.u-badge {
  display: inline-block;
  margin: 0 auto;
}
</style>
