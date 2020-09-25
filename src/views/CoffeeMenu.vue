<template>
  <main id="coffeeMenu">
    <img @click="showMenu" class="navIcon" src="./../assets/navicon.png" alt="navIcon">
      <h2>Meny</h2>
      <Menu v-for="item in menu" :key="item.id" :menuItem="item" />
  </main>
</template>

<script>
import Menu from '@/components/AllCoffee'

export default {
    name: 'CoffeeMenu',
    components: {
      Menu
    },
    methods: {
      showMenu() {
        
      }
    },
    computed: {
      menu() {
        return this.$store.getters.menu
      }
    }

}
</script>

<style lang="scss">

#coffeeMenu {
  .navIcon {
    display: flex;
    align-self: flex-start;
    justify-content: flex-start;
  }
}

</style>