<script setup>
  import { ref } from "vue";

  const isOpen = ref(false);

  function toggleMenu() {
    isOpen.value = !isOpen.value;
  }
  function closeMenu() {
    isOpen.value = false;
  }
</script>

<template>
  <nav class="navbar">
    <button class="burger" @click="toggleMenu">
      <span v-if="!isOpen">☰</span>
    </button>
    <ul :class="['nav-links', { open: isOpen }]">
      <li class="close-btn">
        <button class="cross" @click="closeMenu">✕</button>
      </li>
      <li><router-link to="/" @click="closeMenu">Home</router-link></li>
      <li><router-link to="/shop" @click="closeMenu">Shop</router-link></li>
      <li><router-link to="/cart" @click="closeMenu">Cart</router-link></li>
      <li><router-link to="/about" @click="closeMenu">About</router-link></li>
      <li>
        <router-link to="/contact" @click="closeMenu">Contact us</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .cross {
    background: transparent;
    width: 35px;
    height: 35px;
    border: none;
  }
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-size: 16px;
    z-index: 100;
    position: relative;
    background: transparent;
    border: none;
  }

  /* Логотип */
  .logo a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    color: black;
  }

  /* Ссылки */
  .nav-links {
    list-style: none;
    gap: 30px;
    justify-content: center;
  }

  .nav-links a {
    text-decoration: none;
    color: black;
    transition: color 0.3s ease;
  }

  .nav-links a:hover {
    color: #555;
  }

  .nav-links .router-link-exact-active {
    font-weight: bold;
    border-bottom: 2px solid black;
  }

  /* Бургер */
  .burger {
    display: none;
    font-size: 1.8rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  /* ====== Десктоп ====== */
  @media (min-width: 769px) {
    .nav-links {
      display: flex;
    }
    .close-btn {
      display: none; /* кнопка закрытия только для мобилы */
    }
  }

  /* ====== Мобильное меню ====== */
  @media (max-width: 768px) {
    .nav-links {
      display: none; /* скрыто по умолчанию */
      flex-direction: column;
      align-items: center;
      background: transparent;
      width: 100%;
      padding: 1rem 0;
      gap: 15px;
      border: none;
    }

    .nav-links.open {
      display: flex; /* показываем при isOpen */
      animation: fadeIn 0.3s ease;
    }

    .burger {
      display: flex;
      flex-direction: row;
    }

    .close-btn {
      display: flex; /* кнопка закрытия только для мобилы */
    }
  }

  /* Анимация */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
