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
    <FamilyAirBean />
    <ProfileOrder />
  </main>
</template>

<script>
import FamilyAirBean from '@/components/FamilyAirBean';
import ProfileOrder from '@/components/ProfileOrder';

export default {
  name: "profile",
  components: {
      FamilyAirBean,
      ProfileOrder
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    }
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