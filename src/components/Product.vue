<script>
  import { useRouter } from "vue-router";

  export default {
    props: ["id", "name", "short", "price", "img"],
    setup(props) {
      const router = useRouter();
      const goToProduct = () => {
        router.push(`/product/${props.id}`);
      };
      return { goToProduct };
    },
  };
</script>

<template>
  <div class="product" @click="goToProduct">
    <img :src="img" width="300" />
    <div class="meta">
      <div class="desc">
        <p>{{ name }}</p>
        <p>{{ short }}</p>
        <div class="price">{{ price }} €</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .product {
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 0px;
    max-width: 370px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border: none;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    transform: scale(1);
    position: relative;
    z-index: 0;
  }
  .product:hover {
    z-index: 1;
    transform: scale(1.02);
    outline: 1px solid #404040;
    cursor: pointer;
  }
  .desc {
    display: flex;
    flex-direction: column;
  }
  .meta {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .price {
    font-weight: bold;
    font-size: 35px;
  }
</style>
