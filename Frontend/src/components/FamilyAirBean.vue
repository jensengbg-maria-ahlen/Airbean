<template>
  <article id="familyAirBean">
      <img src="./../assets/familyLogo.svg" alt="familyLogo">
      <h2>Välkommen till AirBean-familjen!</h2>
      <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
      <section class="selections">
          <section class="inputFields">
              <span>Namn</span>
                <input type="text">
                <span>Epost</span>
                <input type="text"> 
          </section>
          <section id="radioGDPR">
              <input type="radio" name="GDPR" id="GDPR">GDPR Ok!  
          </section>
      </section>
      <button id="brewButton" @click="logIn">Brew me a cup!</button>
  </article>
</template>

<script>
export default {
    name: 'FamilyAirBean',
    methods: {
        logIn() {
            console.log('hej')
        }
    }
}
</script>

<style lang="scss">
#familyAirBean {
    width: 90%;
    height: 80%;
    background: #F3E4E1;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.6);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #2F2926;
    padding: 1rem;
    
    p {
        font-size: 16px;
    }
    
    .selections {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .inputFields {
            width: 100%;

            input {
                width: 100%;
                height: 48px;
                border: 1px solid #2F2926;
                box-sizing: border-box;
                border-radius: 6px;
            }
        }

        #radioGDPR {
            display: flex;
            flex-direction: row;
            font-family: Work Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;

           #GDPR {
                display: flex;
                justify-self: flex-start;
                align-self: flex-start;
            } 
            
        }
        
    }
    

    
    #brewButton {
        width: 248px;
        height: 55px;
        background: #2f2926;
        font-family: PT Serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        color: #ffffff;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>