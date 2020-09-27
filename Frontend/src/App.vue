<template>
  <div id="app">
    <header>
      <Menu v-if="showMenu" />
      <Cart :coffeeItem="cart" v-if="showCart"/>
    </header>
    <router-view />
  </div>
</template>

<script>
import Cart from "@/components/Cart";
import Menu from "@/components/Menu";

export default {
  name: "App",
  components: {
    Cart,
    Menu
  },
  computed: {
    showMenu() {
      return this.$store.state.show.showMenu
    },
    showCart() {
      return this.$store.state.show.showCart
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  beforeMount() {
    this.$store.dispatch("fetchMenu");
  },
};
</script>

<style lang="scss">
@import "./scss/main";
</style>
