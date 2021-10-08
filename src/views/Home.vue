<template>
  <div class="home">
    <ProductList />
  </div>
</template>

<script>
import ProductList from "../components/Products/ProductList.vue";
export default {
  name: "Home",
  components: {
    ProductList,
  },
};
</script>
