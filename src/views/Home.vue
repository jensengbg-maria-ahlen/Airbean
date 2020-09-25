<template>
  <main id="home" @click="goToMenu">
    <img src="./../assets/Ellipse 12.png" alt="Logo">
    <img src="./../assets/Vector.png" alt="Logo" class="logo">
    <h1>AIR BEAN</h1>
    <p>DRONEDELIVERED COFFEE</p>
  </main>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToMenu() {
      this.$router.push('/menu');
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rufina&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
  
  #home {
    .logo {
      position: absolute;
      top: 33%;
    }

    h1 {
      font-family: 'Rufina', serif;
      font-weight: 700;
      font-style: normal;
      font-size: 42px;
    }

    p {
      font-family: 'PT Serif', serif;
      font-weight: 400;
      font-style: normal;
      font-size: 9px;
    }
  }
</style>