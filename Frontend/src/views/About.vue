<template>
  <main id="about">
    <img
      @click="toggleMenu"
      class="navIcon"
      src="./../assets/navicon.png"
      alt="navIcon"
    />
    <Menu v-if="showMenu" />
    <h2>Vårt kaffe</h2>
    <article id="aboutText">
      <p id="bold">
        Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
        grounds dripper, crema, strong whipped, variety extra iced id lungo half
        and half mazagran. Pumpkin spice.
      </p>
      <p>
        Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
        aftertaste, con panna milk black, arabica white rich beans single shot
        extra affogato. So affogato macchiato sit extraction instant grinder
        seasonal organic, turkish single shot, single origin, and robusta strong
        to go so dripper. Viennese froth, grounds caramelization skinny aromatic
        cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait
        flavour cultivar ut bar instant kopi-luwak.
      </p>
      <p>
        Roast id macchiato, single shot siphon mazagran milk fair trade est
        aroma a half and half and, so, galão iced to go, whipped as cream cup
        pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
        and half at, that, percolator macchiato trifecta and body as arabica
        dripper. In galão black java milk sit trifecta, robusta, acerbic café au
        lait instant shop latte. Seasonal bar shop filter aroma id, crema,
        affogato viennese cultivar aftertaste, seasonal, percolator cream black,
        galão flavour, milk aromatic turkish skinny crema.
      </p>
    </article>
    <section class="founder">
      <img src="./../assets/image 1.jpg" alt="Eva Cortado" id="imgEva" />
      <h3>Eva Cortado</h3>
      <h6>VD & Grundare</h6>
    </section>
  </main>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  name: "About",
  components: {
    Menu
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
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
#about {
  .navIcon {
    display: flex;
    align-self: flex-start;
    justify-content: flex-start;
  }

  h2 {
    display: flex;
    align-self: flex-start;
    justify-content: flex-start;
    padding: 0 1rem 0 1rem;
    margin-top: 5rem;
  }

  #aboutText {
    padding: 0 1rem 0 1rem;

    #bold {
      font-weight: bolder;
      font-size: 14px;
    }
  }

  .founder {
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #imgEva {
      border-radius: 999rem;
    }
  }
}
</style>