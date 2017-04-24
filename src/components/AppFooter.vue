<template>
  <div class="c-footer">
    <p>Freshly prepared with <span class="u-color-red">&hearts;</span> in Brighton by <a href="https://github.com/DCRichards">DCRichards</a> &middot; May contain traces of nuts.</p>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import '../scss/variables';

.c-footer {
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;

  @media screen and (max-height: 250px) {
    display: none;
  }

  p {
    font-size: 12px;
    padding: 0 25px;
  }
}
</style>
