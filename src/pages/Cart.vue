<script setup>
  import { ref, computed, onMounted } from "vue";

  const cart = ref([]);

  onMounted(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      cart.value = JSON.parse(storedCart);
    }
  });

  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  const removeItem = (index) => {
    cart.value.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const clearCart = () => {
    cart.value = [];
    localStorage.removeItem("cart");
  };
</script>

<template>
  <div class="cart">
    <h1 class="cartHeader">Shopping Cart</h1>
    <div class="empty" v-if="cart.length === 0">Your cart is empty</div>
    <div class="else" v-else>
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" alt="product image" class="cart-img" />
        <p class="pName">
          <b>{{ item.product }}</b>
        </p>
        <p>Size: {{ item.size }}</p>
        <p>Color: {{ item.color }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Price: ${{ item.price * item.quantity }}</p>
        <img
          @click="removeItem(index)"
          src="https://cdn-icons-png.flaticon.com/512/542/542724.png"
          width="40"
        />
      </div>
      <div class="cart-total">
        <h3>Total: € {{ totalPrice }}</h3>
      </div>
      <button @click="clearCart" class="clearBut">Clear Cart</button>
    </div>
  </div>
</template>

<style scoped>
  .else {
    display: flex;
    flex-direction: column;
  }
  .empty {
    align-self: center;
  }
  .pName {
    max-width: 300px;
  }
  .cart-img {
    width: 100px;
    margin-right: 20px;
    float: left;
  }
  .cartHeader {
    align-self: center;
  }
  .cart {
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0;
  }

  .cart-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 15px;
  }

  .cart-total {
    margin-top: 0px;
    font-size: 20px;
    font-weight: bold;
    align-self: center;
  }
  button {
    cursor: pointer;
    margin-top: 5px;
  }

  .clearBut {
    width: 130px;
    height: 40px;
    align-self: center;
  }

  @media (max-width: 768px) {
    .cart-item {
      flex-direction: column;
      align-items: flex-start;
      padding: 10px;
    }

    .cart-img {
      width: 80px;
      margin-bottom: 10px;
    }

    .pName {
      max-width: 100%;
    }

    .rem {
      align-self: flex-start;
    }
  }
</style>
