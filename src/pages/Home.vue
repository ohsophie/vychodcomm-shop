<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();

  const goToApp = () => {
    router.push("/shop");
  };
</script>

<template>
  <section class="hero">
    <video src="../assets/hero.mp4" autoplay muted loop playsinline></video>
    <h1>VYCHODCOMM</h1>
  </section>
  <section class="headSect">
    <p class="subheader">Vytvárame štyl na východnom Slovensku</p>
    <button @click="goToApp" class="collectionBtn">
      Pozri si našu kolekciu
      <img
        class="butImg"
        src="https://cdn-icons-png.flaticon.com/512/99/99188.png"
        width="20"
      />
    </button>
  </section>
  <section class="gallery">
    <div class="gallery-item">
      <img src="../assets/p1.JPEG" alt="Fashion look 1" />
    </div>
    <div class="gallery-item">
      <img src="../assets/p2.jpg" alt="Fashion look 2" />
    </div>
    <div class="gallery-item">
      <img src="../assets/p3.jpg" alt="Fashion look 3" />
    </div>
  </section>
</template>

<style scoped>
  .collectionBtn {
    width: auto;
    padding: 10px 30px;
    font-size: 15pt;
    align-self: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .headSect {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .subheader {
    font-size: 25pt;
    align-self: center;
    margin-top: 30px;
    font-weight: bold;
  }

  body {
    background: #fff;
    color: #000;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
  }

  .hero {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .hero video,
  .hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .hero h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 4rem;
    letter-spacing: 8px;
  }

  .gallery {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .gallery-item {
    margin: 20px;
    width: 33.3%;
  }
  .gallery-item img,
  .gallery-item video {
    width: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  .gallery-item:hover img,
  .gallery-item:hover video {
    transform: scale(1.03);
  }

  footer {
    background: #000;
    color: #fff;
    text-align: center;
    padding: 40px 20px;
    font-size: 0.9rem;
  }
  footer a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    transition: opacity 0.3s;
  }
  footer a:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    .hero h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 2rem;
      letter-spacing: 5px;
    }
    .subheader {
      font-size: 15pt;
      align-self: center;
      margin-top: 30px;
      font-weight: bold;
    }
    .gallery {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .gallery-item {
      margin-bottom: 5px;
      width: 90%;
      align-self: center;
    }
  }
</style>
