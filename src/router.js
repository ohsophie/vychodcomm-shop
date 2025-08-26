import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Shop from "./pages/Shop.vue";
import OpenProduct from "./pages/OpenProduct.vue";
import Cart from "./pages/Cart.vue";
import About from "./pages/About.vue";
import ContactForm from "./pages/ContactForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/shop", component: Shop },
  {
    path: "/product/:id", // важно :id
    component: OpenProduct,
    props: true, // чтобы параметр id пришёл в props
  },
  { path: "/cart", component: Cart },
  { path: "/about", component: About },
  { path: "/contact", component: ContactForm },
];

const router = createRouter({
  history: createWebHistory("/vychodcomm-shop/"),
  routes,
});

export default router;
