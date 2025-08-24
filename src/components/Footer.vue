<script>
  export default {};
</script>

<template>
  <footer>
    <div class="data">
      <div class="address">
        <p>
          The Best Company Ever<br />Hlavna 10<br />040 01 Kosice<br />ICO
          12345678<br />IC DPH: SK87654321
        </p>
        <p>+421 914 000 000<br />vychodcomm@vychodcomm.com</p>
        <p></p>
      </div>
      <div class="links">
        <router-link class="contactLink" to="/about">About Us</router-link>
        <router-link class="contactLink" to="/about">Contact Us</router-link>
      </div>
    </div>
    <div class="credits">
      webpage created by ohsophie © all rights reserved. last update 2025
    </div>
  </footer>
</template>

<style scoped>
  footer {
    height: auto;
    margin-top: 30px;
    background-color: rgba(0, 0, 0, 0.85);
    color: rgba(255, 255, 255, 0.85);
    padding: 20px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;
  }

  .data {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 400px;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contactLink {
    color: white;
  }

  .credits {
    align-self: center;
    font-size: 10pt;
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    .data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0px;
      font-size: 11pt;
    }
    .credits {
      font-size: 7pt;
    }
  }
</style>
