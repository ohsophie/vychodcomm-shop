<script>
  export default {
    name: "ContactForm",
  };
</script>

<template>
  <div class="about">
    <h1>VYCHOD STYLE COMMUNITY</h1>
    <p>
      Značka je inšpirovaná slovenskou kultúrou. Je to oblečenie, ktoré spája
      moderné prvky s dedičstvom minulosti Slovenska. Naším cieľom je vytvoriť
      komunitu štýlových ľudí, ktorí chcú byť súčasťou novej vlny kreativity a
      spolu s nami šíriť slovenské nápady a energiu do sveta. Pridaj sa k nám a
      poďme spolu písať históriu slovenskej módy.
    </p>
    <p>History and future of Slovak fashion in one outfit.</p>
  </div>
</template>

<style scoped>
  .about {
    max-width: 70%;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    line-height: 40px;
  }
  .about p {
    font-size: 14pt;
  }

  @media (max-width: 768px) {
    .about {
      max-width: 98%;
      line-height: 30px;
    }
  }
</style>
