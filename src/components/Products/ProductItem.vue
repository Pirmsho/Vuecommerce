<template>
  <div class="product-item">
    <div class="top-div">
      <router-link :to="idLink"
        ><h2 class="product-title">{{ product.title }}</h2></router-link
      >
      <router-link class="button" :to="idLink">See Details</router-link>
    </div>
    <p class="product-category">
      <span>Category: </span>{{ product.category }}
    </p>
    <div class="image-div">
      <img :src="product.image" alt="Product image" />
    </div>
    <p class="price">Price: ${{ product.price }}</p>
    <p class="description">{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idLink: `/product/${this.product.id}`,
    };
  },
  props: ["product"],
};
</script>

<style lang="scss" scoped>
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
    .button {
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
        color: #fff;
        background-color: #ecb645;
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
@media (max-width: 650px) {
  .top-div {
    flex-direction: column;
  }
}
</style>