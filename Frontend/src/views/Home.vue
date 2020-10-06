<template>
  <main id="home" @click="goToMenu">
    <aside class="logo">
      <img src="./../assets/Vector.png" alt="Logo" />
    </aside>
    <h1>AIR BEAN</h1>
    <p>DRONEDELIVERED COFFEE</p>
  </main>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goToMenu() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rufina&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");

#home {
  .logo {
    width: 4rem;
    height: 4rem;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999rem;
  }

  h1 {
    font-family: "Rufina", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 42px;
  }

  p {
    font-family: "PT Serif", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 9px;
  }
}
</style>