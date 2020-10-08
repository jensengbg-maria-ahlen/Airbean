<template>
  <main id="profile">
    <nav>
      <img
        @click="toggleMenu"
        class="navIcon"
        src="./../assets/navicon.png"
        alt="navIcon"
      />
    </nav>
    <FamilyAirBean v-if="showLogin" />
    <ProfileOrder v-if="showProfile" :userInfo="userInfo" />
  </main>
</template>

<script>
import FamilyAirBean from "@/components/FamilyAirBean";
import ProfileOrder from "@/components/ProfileOrder";

export default {
  name: "profile",
  components: {
    FamilyAirBean,
    ProfileOrder,
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
  },
  computed: {
    showLogin() {
      return this.$store.state.show.showLogin;
    },
    showProfile() {
      return this.$store.state.show.showProfile;
    },
    userInfo() {
      return this.$store.state.user
    }
  },
  beforeMount() {
    this.$store.dispatch("showHistory");
  }
};
</script>

<style scoped lang="scss">
#profile {
  nav {
    display: flex;
    width: 100%;

    .navIcon {
      display: flex;
      align-self: flex-start;
      justify-content: flex-start;
    }
  }
}
</style>