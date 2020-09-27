<template>
  <article id="menu">
    <section>
      <img src="./../assets/close.png" alt="close" @click="toggleMenu" class="closeButton" />
    </section>
    <nav>
      <a href="#" @click="goToMenu">Meny</a>
      <p></p>
      <a href="#" @click="goToAbout">Vårt Kaffe</a>
      <p></p>
      <a href="#">Min Profil</a>
      <p></p>
      <a href="#" @click="goToStatus">Orderstatus</a>
    </nav>
  </article>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    },
    goToMenu() {
      this.$router.push("/menu")
      this.showMenu
    },
    goToAbout() {
      this.$router.push("/about")
      this.showMenu
    },
    goToStatus() {
      this.$router.push("/status")
      this.showMenu
    }
  },
  computed: {
    showMenu() {
      return this.$store.state.show.showMenu
    },
  }
};
</script>

<style lang="scss">
#menu {
  background: #2f2926;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  section {
    
    img {
      margin: 1rem;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      font-family: PT Serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      color: #FFFFFF;
      text-decoration: none;
      margin: 1rem;
    }

    p {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      width: 30%;
    }
  }
}
</style>