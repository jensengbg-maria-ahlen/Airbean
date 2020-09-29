<template>
  <aside id="cart">
    <h2>Din beställning</h2>
    <article v-for="(item, index) in coffeeItem" :key="index">
      <div class="coffee-item">
        <h4 class="item-title">{{ item.title }}</h4>
        <h4 class="item-dots"></h4>
        <div>
          <img
            src="./../assets/arrow-up.svg"
            alt="arrow up"
            @click.prevent="addItemInCart(item)"
          />
          <h6 class="item-quantity">{{ item.quantity }}</h6>
          <img
            src="./../assets/arrow-down.svg"
            alt="arrow down"
            @click.prevent="removeItemFromCart(item)"
          />
        </div>
      </div>
      <div class="description">
        <p class="item-price">{{ item.price }} kr</p>
      </div>
    </article>
    <div class="totalPrice">
      <div>
        <h3 class="item-total">Total</h3>
        <h3 class="item-dots"></h3>
        <h3 class="item-cost">{{ totalCost }} kr</h3>
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
      if (this.coffeeItem.length == 0) {
        alert('Din varukorg är tom!');
      } else {
        this.$store.dispatch("orderItems");
        this.$router.push("/status");
      }
    },
    addItemInCart(item) {
      this.$store.commit("addItemInCart", item);
    },
    removeItemFromCart(item) {
      this.$store.commit("removeItemFromCart", item);
    },
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
  background: #ffffff;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  margin-top: 5rem;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  article {
    display: flex;
    flex-direction: column;
    width: 90%;

    .coffee-item {
      display: flex;
      flex-direction: row;

      .item-dots {
        flex: 1;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 0.3rem;
      }

      div {
        display: flex;
        flex-direction: column;

        img {
          width: 0.7rem;
          height: 0.7rem;
        }
      }
    }
  }

  .totalPrice {
    display: flex;
    flex-direction: column;
    width: 90%;

    div {
      display: flex;
      flex-direction: row;

      .item-dots {
        flex: 1;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 0.3rem;
      }
    }
  }

  #buy {
    width: 248px;
    height: 55px;
    background: #2f2926;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>