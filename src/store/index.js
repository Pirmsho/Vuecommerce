import { createStore } from "vuex";

export default createStore({
  state: {
    categories: null,
    products: null,
    isLoading: false,
    cartQuantity: 0,
    itemsInCart: [],
    cartTotal: 0,
    productId: null,
    cartIDs: [],
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setProducts(state, products) {
      state.products = products;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
    addItemToCart(state, product) {
      state.productId = product.id;

      if (state.cartIDs.includes(state.productId)) {
        state.cartQuantity++;
      } else {
        state.itemsInCart.push(product);
        state.cartQuantity++;
      }
      state.cartTotal = state.cartTotal + product.price;

      state.itemsInCart.forEach((item) => state.cartIDs.push(item.id));
    },
    removeItemFromCart(state, product) {
      // state.productId = product.id;

      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== product.id
      );
      if (state.itemsInCart.length === 0) {
        state.cartQuantity = 0;
        state.cartTotal = 0;
      } else {
        state.cartQuantity = 0;
        state.cartTotal = state.cartTotal - product.price;
      }
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
      context.commit("startLoading");

      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();

      context.commit("setProducts", products);
      context.commit("endLoading");
    },
  },
  modules: {},
});
