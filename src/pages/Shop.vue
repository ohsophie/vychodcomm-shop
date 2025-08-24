<script>
  import data from "../assets/data.json";
  import Product from "../components/Product.vue";

  export default {
    components: { Product },
    data() {
      return {
        items: data,
      };
    },
    methods: {
      getFirstImage(product) {
        if (!product.images || !product.images.length) return "";
        return new URL(`../assets/${product.images[0]}`, import.meta.url).href;
      },
    },
  };
</script>

<template>
  <div class="shopHead">Vyber si štýlový kúsok z nasej ponuky:</div>
  <div class="shop">
    <Product
      v-for="(item, index) in items"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :short="item.short"
      :price="item.price"
      :img="getFirstImage(item)"
    />
  </div>
</template>

<style scoped>
  .shopHead {
    font-size: 25px;
    text-align: center;
    margin: 20px;
  }

  .shop {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
</style>
