<template>
  <main id="orderStatus">
    <p>{{ order.orderNr }}</p>
    <img src="./../assets/Group 5.svg" alt="drone">
    <h1>{{ order.msg }}</h1>
    <h5>Levereras om {{ order.est }} minuter.</h5>
    <button @click="returnToMenu">Ok, cool!</button>
  </main>
</template>

<script>
export default {
  name: "OrderStatus",
  computed: {
    order() {
      return this.$store.state.order
    }
  },
  methods: {
    returnToMenu() {
      this.$router.push("/menu");
    },
  },
};
</script>

<style scoped lang="scss">
#orderStatus {

  button {
    width: 184px;
    height: 55px;
    background: #FFFFFF;
    border-radius: 50px;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #2F2926;
  }
}
</style>