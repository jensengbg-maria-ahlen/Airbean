<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeMount() {
    this.$store.dispatch('fetchMenu');
  }
}
</script>

<style lang="scss">
@import './scss/main'

</style>
