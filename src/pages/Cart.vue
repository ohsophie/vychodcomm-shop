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
    <h1>Shopping Cart</h1>
    <div v-if="cart.length === 0">Your cart is empty</div>
    <div v-else>
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <p>
          <b>{{ item.product }}</b>
        </p>
        <p>Size: {{ item.size }}, Color: {{ item.color }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Price: ${{ item.price * item.quantity }}</p>
        <button @click="removeItem(index)">Remove</button>
      </div>
      <div class="cart-total">
        <h3>Total: ${{ totalPrice }}</h3>
      </div>
      <button @click="clearCart">Clear Cart</button>
    </div>
  </div>
</template>

<style scoped>
  .cart {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  }

  .cart-item {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 15px;
  }

  .cart-total {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  }
  button {
    cursor: pointer;
    margin-top: 5px;
  }
</style>
