<template>
  <main>
    <header>
      <h2>Your cart overview:</h2>

      <p>Total: {{ this.$store.state.cartTotal.toFixed(2) }}$</p>
    </header>
    <section class="cart-section">
      <div class="empty-cart" v-if="this.$store.state.itemsInCart.length === 0">
        <h1>Oops! Your cart seems to be empty.</h1>
        <p>
          <router-link to="/">Browse our items</router-link> and add them to
          cart to review them here!
        </p>
      </div>
      <div class="items-cart" v-else>
        <div class="cart-item" v-for="item in itemsInCart" :key="item.id">
          <img :src="item.image" :alt="item.title" />
          <p>{{ item.title }}</p>
          <p>{{ item.price }}$</p>
          <img
            class="svg"
            src="../assets/x-icon.svg"
            @click="this.$store.commit('removeItemFromCart', item)"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    itemsInCart() {
      return this.$store.state.itemsInCart;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  border-bottom: 3px solid black;
}
.cart-section {
  background: rgb(241, 241, 241);
  width: 80%;
  margin: 0 auto;
  padding: 40px;
  margin-top: 20px;
  box-shadow: 0px 14px 19px -2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  .empty-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 20px;
      a {
        text-decoration: none;
      }
    }
  }
  .items-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    .cart-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      img {
        width: 100px;
        height: 100px;
        border-radius: 5px;
      }
      .svg {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>