<template>
  <article class="allCoffee" @click="addItemToCart">
    <img src="./../assets/add.png" alt="add" class="add" />
    <section class="items">
      <div class="coffee">
        <h4 class="item-title">{{ menuItem.title }}</h4>
        <h4 class="item-dots"></h4>
        <h4 class="item-price">{{ menuItem.price }}</h4>
      </div>
      <div class="description">
        <p class="item-desc">{{ menuItem.desc }}</p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "AllCoffee",
  props: {
    menuItem: Object,
  },
  methods: {
    addItemToCart() {
      this.$store.commit('addItemToCart', this.menuItem)
    }
  }
};
</script>

<style lang="scss">
.allCoffee {
  display: flex;
  flex-direction: row;
  height: 2%;

  .add {
    margin: 0;
    padding: 0;
    width: 4rem;
    height: 4rem;
  }

  .items {
    display: flex;
    flex-direction: column;
    width: 100%;

    .coffee {
      display: flex;
      flex-direction: row;

      h4 {
        &.item-title {
          font-weight: 800;
        }

        &.item-dots {
          flex: 1;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 0.3rem;
        }
      }
    }
  }
}

.description {
  p {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
  }
}
</style>