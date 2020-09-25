<template>
  <article class="allCoffee">
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
    name: 'AllCoffee',
    props: {
      menuItem: Object
    }
}
</script>

<style lang="scss">
  .allCoffee {
    display: flex;
    flex-direction: column;

    .coffee {
      display: flex;
      flex-direction: row;

      h4 {
        display: flex;
        margin: 0;
        padding: 0;

        &.item-title {
          font-weight: 800;
        }

        &.item-dots {
          flex: 1;
          border-bottom: 1px solid rgba(0,0,0,.2);
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
  }
</style>