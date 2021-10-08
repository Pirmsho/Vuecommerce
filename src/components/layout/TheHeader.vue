<template>
  <header>
    <nav>
      <div class="main-logo">
        <router-link to="/"
          ><h1><span>Vue</span>Shop</h1></router-link
        >
      </div>
      <div class="nav-items">
        <ul class="nav-list">
          <li @click="toggleDropdown">
            Categories
            <img
              :class="{ flipped: isFlipped }"
              src="../../assets/caret-down.svg"
              alt=""
            />
            <transition name="dropdown">
              <CategoriesDropdown v-if="dropdownVisible" />
            </transition>
          </li>

          <div class="cart-div">
            <router-link to="/cart">Cart</router-link>
            <img src="../../assets/cart.svg" alt="Cart" />
            <div class="cart-counter">0</div>
          </div>
          <router-link to="/about">About</router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import CategoriesDropdown from "./CategoriesDropdown.vue";
export default {
  components: { CategoriesDropdown },
  data() {
    return {
      dropdownVisible: false,
      isFlipped: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #2d5878;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 80px;
  padding: 0 20px;
  .router-link-active,
  .router-link-exact-active {
    color: lightgreen;
  }

  a,
  li {
    text-decoration: none;
    color: #fafafa;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    gap: 6px;
    img {
      transition: all 0.3s;
      transform: rotate(0deg);
    }
  }
  h1 {
    font-size: 30px;
    span {
      color: lightgreen;
    }
  }
  .nav-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    gap: 40px;
    li {
      position: relative;
    }
    .flipped {
      transition: all 0.3s;
      transform: rotate(180deg);
    }
    .dropdown {
      position: absolute;

      top: 27px;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      background: white;
      box-shadow: 0px 14px 19px -2px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
    .cart-div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      position: relative;
      background-color: #ecb645;
      padding: 10px 25px;
      border-radius: 50px;
      img {
        width: 25px;
        height: 25px;
      }
      .cart-counter {
        position: absolute;
        top: 0px;
        right: 15px;

        border-radius: 50%;
        padding: 3px;
        color: white;
      }
    }
  }
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: all 0.3s;
  }
  .dropdown-enter-from,
  .dropdown-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
  .dropdown-enter-to,
  .dropdown-leave-from {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>