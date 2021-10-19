<template>
  <TheHeader />
  <router-view v-slot="slotProps">
    <transition name="slide">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>


<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>



<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #8cc9c8;
  font-family: sans-serif;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-out;
}

.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
