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
    <FamilyAirBean v-if="showFamilyAirBean" />
    <ProfileOrder v-if="showProfile" />
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
    showFamilyAirBean() {
      return !this.$store.state.show.showFamilyAirBean;

      // return !this.$store.state.show.showFamilyAirBean  --- denna gör att de blir falsk ist.
    },
    showProfile() {
      return !this.$store.state.show.showProfile;
    },
  },
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