<template>
  <main id="coffeeMenu">
    <section class="navButtons">
      <img
        @click="toggleMenu"
        class="navIcon"
        src="./../assets/navicon.png"
        alt="navIcon"
      />
      <aside class="orderCart" @click="toggleCart">
        <img src="./../assets/bag.png" alt="bag" />
        <aside class="cartItems">
          <p>{{ cart.length }}</p>
        </aside>
      </aside>
    </section>
    <Menu v-if="showMenu" />
    <Cart :coffeeItem="cart" v-if="showCart"/>
    <h2>Meny</h2>
    <section class="coffeeSection">
      <AllCoffe
        v-for="item in menu"
        :key="item.id"
        :menuItem="item"
        class="menuItems"
      />
    </section>
  </main>
</template>

<script>
import AllCoffe from "@/components/AllCoffee";
import Cart from "@/components/Cart";
import Menu from "@/components/Menu";

export default {
  name: "CoffeeMenu",
  components: {
    AllCoffe,
    Cart,
    Menu
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    },
    toggleCart() {
      this.$store.commit('toggleCart')
    },
  },
  computed: {
    menu() {
      return this.$store.getters.menu;
    },
    showMenu() {
      return this.$store.state.show.showMenu
    },
    cart() {
      return this.$store.state.cart;
    },
    showCart() {
      return this.$store.state.show.showCart
    }
  },
};
</script>

<style scoped lang="scss">
#coffeeMenu {
  .navButtons {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .navIcon {
      display: flex;
      align-self: flex-start;
      justify-content: flex-start;
    }

    .orderCart {
      width: 3.5rem;
      height: 3.5rem;
      background: #2f2926;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 999rem;

      .cartItems {
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        background: #e5674e;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 999rem;
        color: #ffffff;
        margin-top: -3rem;
        margin-right: -2rem;
      }
    }
  }

  h2 {
    margin-top: 5rem;
  }

  .coffeeSection {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 2rem 0 10rem 0;

    .menuItems {
      display: flex;
      width: 90%;
    }
  }
}
</style>