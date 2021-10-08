<template>
  <main>
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </main>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  data() {
    return {};
  },
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style lang="scss" scoped>
main {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>