<script>
  export default {};
</script>

<template>
  <header>
    <div class="title">VYCHODCOMM</div>
    <div class="subtitle">Tvoja komunita na východe</div>
  </header>
</template>

<style scoped>
  header {
    background-color: rgba(200, 200, 200, 0.5);
    width: 100%;
    z-index: 10;
    padding-top: 120px;
    padding-bottom: 120px;
    margin-bottom: 30px;
  }

  .title {
    font-size: 70px;
    font-weight: 500;
    letter-spacing: 8px;
    text-align: center;
  }

  .subtitle {
    font-size: 22px;
    letter-spacing: 3px;
    font-weight: 100;
    text-align: center;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 35px;
      letter-spacing: 3px;
      font-weight: 70;
    }
    .subtitle {
      font-size: 15px;
      letter-spacing: 3px;
      font-weight: 70;
    }
  }
</style>
