<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import Navbar from "./components/Navbar.vue";

  export default {
    components: { Header, Footer, Navbar },

    data() {
      return {};
    },
  };
</script>

<template>
  <Header v-if="$route.name !== 'Home'" />
  <Navbar v-if="$route.name !== 'Home'" />
  <router-view />
  <Footer />
</template>

<style scoped></style>
