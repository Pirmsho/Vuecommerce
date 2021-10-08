import { createStore } from "vuex";

export default createStore({
  state: {
    categories: null,
    products: null,
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchCategories(context) {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categories = await response.json();
      context.commit("setCategories", categories);
    },
    async fetchProducts(context) {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      context.commit("setProducts", products);
    },
  },
  modules: {},
});
