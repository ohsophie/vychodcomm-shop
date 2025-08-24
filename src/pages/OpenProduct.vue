<script setup>
  import data from "../assets/data.json";
  import { useRoute } from "vue-router";
  import { ref, computed } from "vue";

  const images = computed(() => {
    if (!product.value) return [];
    return product.value.images.map(
      (img) => new URL(`../assets/${img}`, import.meta.url).href
    );
  });

  const route = useRoute();
  const productId = ref(route.params.id);

  const selectedSize = ref(null);
  const selectedColor = ref(null);
  const quantity = ref(1);

  const product = computed(() =>
    data.find((item) => item.id === productId.value)
  );

  const addToCart = () => {
    if (!selectedSize.value || !selectedColor.value) {
      alert("Please select size and color");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    cart.push({
      id: product.value.id,
      product: product.value.name,
      size: selectedSize.value,
      color: selectedColor.value,
      quantity: quantity.value,
      price: product.value.price,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  const scrollToSlide = (slideNumber) => {
    const slide = document.getElementById(`slide-${slideNumber}`);
    if (slide) {
      slide.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
</script>

<template>
  <div v-if="product" class="showCase">
    <div class="carousel">
      <div class="smallSlides">
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="img"
          width="80"
          @click="scrollToSlide(index + 1)"
        />
      </div>
      <div class="slides">
        <div
          v-for="(img, index) in images"
          :key="index"
          :id="`slide-${index + 1}`"
        >
          <img :src="img" width="450" />
        </div>
      </div>
    </div>
    <div class="desc">
      <p>{{ product.name }}</p>
      <p>
        {{ product.description }}
      </p>

      <p><b>Please choose size:</b></p>
      <div class="sizes">
        <button
          v-for="size in product.sizes"
          :key="size"
          class="s"
          :class="{ selected: selectedSize === size }"
          @click="selectedSize = size"
        >
          {{ size }}
        </button>
      </div>
      <p><b>Please choose color:</b></p>
      <div class="colors">
        <button
          v-for="color in product.colors"
          :key="color"
          class="c"
          :class="{ selected: selectedColor === color }"
          :style="{ backgroundColor: color }"
          @click="selectedColor = color"
        ></button>
      </div>
      <p class="resultPrice">{{ product.price * quantity }} €</p>
      <input type="number" class="quantity" v-model="quantity" />
      <button class="addCart" @click="addToCart">
        <img
          class="butImg"
          src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          width="20"
        />Add to Cart
      </button>
    </div>
  </div>
  <div v-else>
    <p>Product not found</p>
  </div>
</template>

<style scoped>
  .smallSlides {
    display: flex;
    flex-direction: column;
  }

  .showCase {
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
    padding: 20px;
  }

  .carousel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    max-height: 600px;
    padding: 10px;
    max-width: 700px;
  }

  .smallSlides {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .smallSlides img {
    cursor: pointer;
    border: 2px solid transparent;
    transition: border 0.2s;
  }

  .smallSlides img:hover {
    border: 2px solid black;
  }

  .slides {
    overflow-y: auto;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 20px;
    max-height: 100%;
    padding-right: 10px;
    scroll-snap-type: y mandatory;
  }

  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-behavior: smooth;
  }

  /* Chrome, Edge, Safari */
  .slides::-webkit-scrollbar {
    width: 4px;
  }

  .slides::-webkit-scrollbar-track {
    background: transparent;
  }

  .slides::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    transition: background-color 0.3s ease;
  }

  .slides::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  /* Firefox */
  .slides {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  }

  .desc {
    max-width: 450px;
  }

  .s {
    width: 40px;
    height: 40px;
    margin: 10px;
    border: none;
    background-color: #e3e3e3;
    border: 1px solid black;
  }

  .s:hover {
    border: 2px solid black;
  }
  .s.selected {
    border: 2px solid black;
  }

  .c {
    width: 25px;
    height: 25px;
    margin: 15px;
    border-radius: 50%;
    cursor: pointer;
    transition: border 0.2s;
    border: 1px solid black;
  }

  .c:hover {
    border: 2px solid black;
  }
  .c.selected {
    border: 2px solid black;
  }

  .quantity {
    width: 45px;
    height: 35px;
    margin: 15px;
  }

  .addCart {
    width: 140px;
    height: 40px;
    border: 1px solid black;
  }

  .butImg {
    margin-right: 10px;
  }

  .resultPrice {
    font-weight: bold;
    font-size: 26pt;
    padding-left: 40px;
  }
  @media (max-width: 768px) {
    .showCase {
      flex-direction: column;
      align-items: center;
    }

    .carousel {
      flex-direction: column;
      max-width: 100%;
    }

    .slides {
      flex-direction: row; /* горизонтально */
      overflow-x: auto; /* горизонтальный скролл */
      scroll-snap-type: x mandatory;
      width: 100%;
      gap: 10px;
      padding-right: 0;
      height: 800px;
    }

    .slides > div {
      flex: 0 0 80%; /* каждый слайд занимает 80% ширины экрана */
      display: flex; /* flex для центрирования */
      justify-content: center; /* горизонтальное центрирование */
      align-items: center; /* вертикальное центрирование */
      scroll-snap-align: start;
      height: 100%;
    }

    .slides img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain; /* сохраняет пропорции */
      display: flex;
      justify-content: flex-start;
    }

    .smallSlides {
      flex-direction: row;
      overflow-x: auto;
      padding-bottom: 10px;
      width: 100%;
      height: 220px;
    }

    .smallSlides img {
      width: 80px; /* квадратное мини-превью */
      height: 110px;
      object-fit: cover; /* сохраняем пропорции */
      flex-shrink: 0; /* не сжимается */
      cursor: pointer;
      border: 2px solid transparent;
      transition: border 0.2s;
    }

    .smallSlides img:hover {
      border: 2px solid black;
    }
  }
</style>
