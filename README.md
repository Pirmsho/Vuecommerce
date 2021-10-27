# [Vueshop](https://vuecommerce.vercel.app/)

![Imgur](https://imgur.com/gZoUPFi.png)


## Project Overview

This project is made by VueJs, Vuex state management and Vue Router. it also uses vue-transition components for simple animations.

Main purpose of this app was to practice basic VueJs, Router , Vuex and basic CRUD operations.

Data is fetched from [FakestoreAPI](https://fakestoreapi.com/) and displayed on mount. clicking on **See Details** or item name goes to detail page, which is managed by **Vue-Router**.

On the detail page, you can add the item to cart. You can also filter items by category, from the category dropdown.

Majority of the app state is managed by **Vuex**, as you can see in /store/index.js.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
