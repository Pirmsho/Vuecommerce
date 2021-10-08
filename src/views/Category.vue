<template>
  <section>
    <div class="cat-header">
      <h2>
        Now Browsing: <span>{{ this.$route.params.category }}</span>
      </h2>
    </div>
    <div class="product-item" v-for="product in products" :key="product.id">
      <div class="top-div">
        <router-link :to="{ name: 'Product', params: { id: product.id } }"
          ><h2 class="product-title">{{ product.title }}</h2></router-link
        >
        <button>Add To Cart</button>
      </div>

      <div class="image-div">
        <img :src="product.image" alt="Product image" />
      </div>
      <p class="price">Price: ${{ product.price }}</p>
      <p class="description">{{ product.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: null,
    };
  },
  methods: {
    async getCategoryProducts(route) {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${route.params.category}`
      );
      this.products = await response.json();
      console.log(this.products);
    },
  },
  mounted() {
    this.getCategoryProducts(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.getCategoryProducts(newRoute);
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}
.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 14px 19px -2px rgba(0, 0, 0, 0.2);
  padding: 20px;
  background-color: #fff;
  width: 70%;
  border-radius: 10px;
  a {
    text-decoration: none;
    color: black;
  }
  p {
    text-transform: capitalize;
  }
  .top-div {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 20px;
    }
    button {
      padding: 10px 20px;
      border: 3px solid #ecb645;
      background: none;
      cursor: pointer;
      font-size: 16px;
      color: #ecb645;
      border-radius: 5px;
      font-weight: 600;
      position: relative;
      overflow: hidden;
      transition: all 0.4s;
      &:hover {
        transform: scale(1.1);
        font-weight: bold;
      }
    }
  }
  .price {
    font-size: 24px;
    font-weight: bold;
  }
  .image-div {
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>