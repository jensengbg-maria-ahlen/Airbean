<template>
  <aside id="cart">
    <h2>Din beställning</h2>
    <article v-for="(item, index) in coffeeItem" :key="index">
      <div>
        <h4 class="item-title">{{ item.title }}</h4>
        <h4 class="item-dots"></h4>
        <div>
          <img src="./../assets/arrow-up.svg" alt="arrow up" @click.prevent="addItemToCart" />
          <h4 class="item-quantity">{{ item.quantity }}</h4>
          <img src="./../assets/arrow-down.svg" alt="arrow down" @click.prevent="removeItemFromCart" />
        </div>
      </div>
      <div class="description">
        <p class="item-price">{{ item.price }}</p>
      </div>
    </article>
    <div>
      <div>
        <h3 class="item-total">Total</h3>
        <h3 class="item-dots"></h3>
        <h3 class="item-cost">{{ totalCost }}</h3>
      </div>
      <p>ink moms + drönarleverans</p>
    </div>
    <button id="buy" @click="buyItems">Take my money!</button>
  </aside>
</template>

<script>
export default {
  name: "Cart",
  props: {
    coffeeItem: Array,
  },
  methods: {
    buyItems() {
        this.$store.dispatch('buyItems')
        this.$router.push("/status")
    },
    addItemToCart() {
      this.$store.commit('addItemToCart', this.$vnode.key)
    },
    removeItemFromCart() {
        this.$store.commit('removeItemFromCart', this.$vnode.key)
    }
  },
  computed: {
    totalCost() {
      return this.$store.getters.totalCost;
    },
  },
};
</script>

<style lang="scss">
#cart {
    position: fixed;
    z-index: 1;
    background: #FFFFFF;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #buy {
        width: 248px;
        height: 55px;
        background: #2F2926;
        font-family: PT Serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        color: #FFFFFF;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>