<template>
  <header>
    <nav>
      <div class="main-logo">
        <router-link to="/"
          ><h1><span>Vue</span>Shop</h1></router-link
        >
        <div
          class="hamburger"
          :class="{ responsive: !isResponsiveMenu }"
          @click="toggleResponsiveMenu"
        >
          <img src="../../assets/hamburger.svg" alt="hamburger menu icon" />
        </div>
      </div>
      <transition name="responsive">
        <div class="nav-items" v-if="!isResponsiveMenu">
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
              <div class="cart-counter">
                {{ this.$store.state.cartQuantity }}
              </div>
            </div>
            <router-link to="/about">About</router-link>
          </ul>
        </div>
      </transition>
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
      isResponsiveMenu: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
      this.isFlipped = !this.isFlipped;
    },
    toggleResponsiveMenu() {
      this.isResponsiveMenu = !this.isResponsiveMenu;
      console.log(this.isResponsiveMenu);
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
  .hamburger {
    @media (min-width: 650px) {
      display: none;
    }
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
    transition: all 0.2s;
    img {
      transition: all 0.3s;
      transform: rotate(0deg);
    }
  }
  a:hover {
    transform: scale(1.1);
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
      z-index: 1;
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
      padding: 10px 30px;
      border-radius: 50px;
      z-index: 0;
      img {
        width: 25px;
        height: 25px;
      }
      .cart-counter {
        position: absolute;
        top: 0px;
        right: 10px;

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
@media (max-width: 650px) {
  .main-logo {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  nav {
    flex-direction: column;
    gap: 10px;
  }
  .nav-list {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .hamburger {
    display: block;
    cursor: pointer;
    transition: 0.2 all;
  }
  .responsive {
    filter: brightness(0) saturate(100%) invert(87%) sepia(9%) saturate(1876%)
      hue-rotate(64deg) brightness(98%) contrast(92%);
  }
  .dropdown {
    z-index: 1;
  }
  .responsive-enter-active {
    transition: all 0.2s;
  }
  .responsive-leave-active {
    transition: all 0.1s;
  }
  .responsive-enter-from,
  .responsive-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
  .responsive-enter-to,
  .responsive-leave-from {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>