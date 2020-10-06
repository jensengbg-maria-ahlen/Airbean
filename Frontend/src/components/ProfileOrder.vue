<template>
  <article id="profileOrder">
    <section class="profileName">
      <img src="./../assets/Profile.svg" alt="profilePic" id="profilePic" />
      <h3>{{ userInfo.name }}</h3>
      <h6>{{ userInfo.email }}</h6>
    </section>
    <h3>Orderhistorik</h3>
    <section class="orderHistory" v-for="order in orderInfo" :key="order.index">
      <div class="totalHistory">
        <div class="historyOrder">
          <h5>{{ order.orderNr }}</h5>
          <h5 class="orderDate">{{ order.date }}</h5>
        </div>
        <div class="historyCost">
          <h6>total ordersumma</h6>
          <h6>{{ order.totalCost }} kr</h6>
        </div>
      </div>
    </section>
    <div class="totalSpent">
      <h5>Totalt spenderat</h5>
      <h5>{{ totalOrderCost() }} kr</h5>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProfileOrder",
  props: {
    userInfo: Array,
    orderInfo: Array
  },
  methods: {
    totalOrderCost() {
      return this.$store.getters.totalOrderCost
    }
  }
};
</script>

<style lang="scss">
#profileOrder {
  margin: 4rem 0 4rem 0;
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;

  .profileName {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #profilePic {
      margin-bottom: 0.5rem;
    }
  }

  h3 {
      margin: 0.5rem;
    }

  .orderHistory {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    .totalHistory {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      margin: .5rem 0 .5rem 0;
      border-bottom: .5px solid rgba(255, 255, 255, 0.6);

      .historyOrder {
          margin-top: 1rem;
          width: 100%;
          display: flex;
          justify-content: space-between;

          h5 {
            font-size: 14px;
          }
          .orderDate {
            font-weight: normal;
          }
      }

      .historyCost{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: .3rem 0 .5rem 0;
      }
    }
  }
  .totalSpent {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 1rem;

      h5 {
        font-size: 14px;
        margin-top: 0.5rem;
      }
    }
}
</style>