<template>
  <main id="coffeeMenu">
    <section class="navButtons">
      <img
        @click="showMenu"
        class="navIcon"
        src="./../assets/navicon.png"
        alt="navIcon"
      />
      <aside class="orderCart">
        <img 
          @click="showCart" 
          src="./../assets/bag.png" 
          alt="bag" 
        />
        <aside class="quantity">
          <p>{{cart.length}}</p>
        </aside>
      </aside>
    </section>
    <h2>Meny</h2>
    <section class="coffeeSection">
      <Menu
        v-for="item in menu"
        :key="item.id"
        :menuItem="item"
        class="menuItems"
      />
    </section>
  </main>
</template>

<script>
import Menu from "@/components/AllCoffee";

export default {
  name: "CoffeeMenu",
  components: {
    Menu,
  },
  methods: {
    showMenu() {},
    showCart() {},
  },
  computed: {
    menu() {
      return this.$store.getters.menu;
    },
    cart() {
      return this.$store.state.cart;
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
    margin-top: -1rem;

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

      .quantity {
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        background: #E5674E;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 999rem;
        color: #FFFFFF;
        margin-top: -3rem;
        margin-right: -2rem;
      }
    }
  }

  .coffeeSection {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10rem;

    .menuItems {
      display: flex;
      width: 90%;
    }
  }
}
</style>