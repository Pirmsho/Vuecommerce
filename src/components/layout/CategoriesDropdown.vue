<template>
  <div class="dropdown">
    <div v-for="(category, index) in categories" :key="index">
      <router-link
        :to="{ name: 'Category', params: { category: category } }"
        class="category"
        >{{ category }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  created() {
    this.$store.dispatch("fetchCategories");
  },
  data() {
    return {
      catLink: `/category/${this.category}`,
    };
  },
};
</script>

<style lang="scss" scoped>
.category {
  display: inline-block;
  text-transform: capitalize;
  font-size: 16px;
  color: black;
  width: 100%;
  padding: 10px;
}
a {
  text-decoration: none;
}
.dropdown div {
  width: 100%;
}
.dropdown div:hover {
  background-color: #ccc;
}
</style>