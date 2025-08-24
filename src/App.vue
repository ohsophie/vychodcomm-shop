<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  // import Shop from "./pages/Shop.vue";
  import Navbar from "./components/Navbar.vue";

  export default {
    components: { Header, Footer, Navbar },

    data() {
      return {};
    },
  };
</script>

<template>
  <Header />
  <Navbar />
  <router-view />
  <Footer />
</template>

<style scoped></style>
