<template>
  <article class="allCoffee">
    <img src="./../assets/add.png" alt="add" class="add" />
    <div class="coffee">
      <h4 class="item-title">{{ menuItem.title }}</h4>
      <h4 class="item-dots"></h4>
      <h4 class="item-price">{{ menuItem.price }}</h4>
    </div>
    <div class="description">
      <p class="item-desc">{{ menuItem.desc }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "AllCoffee",
  props: {
    menuItem: Object,
  },
};
</script>

<style lang="scss">
.allCoffee {
  display: flex;

  .add {
      width: 4rem;
      height: 4rem;
      margin: 0;
      padding: 0;
    }

  .coffee {
    display: flex;
    flex-direction: row;

    h4 {
      margin: 0;
      padding: 0;

      &.item-title {
        font-weight: 800;
      }

      &.item-dots {
        flex: 1;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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