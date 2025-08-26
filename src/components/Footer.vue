<script>
  export default {};
</script>

<template>
  <footer>
    <div class="links">
      <a href="https://www.instagram.com/vychodcomm/">Instagram</a>
      <div class="nbsp">&nbsp|&nbsp</div>
      <a href="mailto:info@yourbrand.com">vychodcomm@gmail.com</a>
      <div class="nbsp">&nbsp|&nbsp</div>
      <router-link class="contactLink" to="/about">About Us</router-link>
      <div class="nbsp">&nbsp|&nbsp</div>
      <router-link class="contactLink" to="/contact">Contact Us</router-link>
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

  .links {
    display: flex;
    flex-direction: row;
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
    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      font-size: 11pt;
    }
    .credits {
      font-size: 7pt;
    }
    .nbsp {
      display: none;
    }
  }
</style>
