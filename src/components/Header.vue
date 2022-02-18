<template>
  <header class="header center">
    <div class="header-left">
      <router-link to="/"><img src="../assets/svg/home.svg" alt="home" /></router-link>
      <SearchComp/>
    </div>
    <div class="header-right">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/catalog">Catalog</router-link>
      </div>
      <button class="btn-cart" type="button" @click="isCartVisible = !isCartVisible">
        <i class="fas fa-shopping-cart btn-cart"></i>
      </button>
      <div class="cart-block" v-show="isCartVisible">
        <CartComp/>
      </div>
    </div>
  </header>
</template>

<script>
import CartComp from 'components/CartComp.vue';
import SearchComp from 'components/SearchComp.vue';

export default {
  name: 'Header',
  data() {
    return {
      isCartVisible: false,
    };
  },
  components: { SearchComp, CartComp },
  watch: {
    $route() {
      this.isCartVisible = false;
    },
  },
};
</script>

<style scoped lang="sass">
.header
  height: 75px
  background-color: #222222
  display: flex
  justify-content: space-between
  align-items: center
  &-left
    display: flex
    justify-content: space-between
    width: 320px
  &-right
    display: flex
    align-items: center
    justify-content: space-between
    position: relative
#nav
  padding: 30px
  a
    font-weight: bold
    color: #ffffff
    &:not(:last-child)
      padding-right: 10px
    &.router-link-exact-active
      color: $accentColor
.cart
  display: flex
  position: relative
  &-block
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.62)
    border-radius: 5px
    box-sizing: border-box
    right: 0
    top: 100%
    position: absolute
    background-color: white
    padding: 20px
    color: black
    width: 360px
    z-index: 1
    &:before
      content: ''
      width: 0
      height: 0
      position: absolute
      top: -10px
      right: 25px
      border-left: 10px solid transparent
      border-right: 10px solid transparent
      border-bottom: 10px solid white
.btn-cart
  background-color: transparent
  border: 1px solid transparent
  transition: all ease-in-out .2s
  cursor: pointer
  &:hover .fa-shopping-cart
    color: $accentColor
.fa-shopping-cart
  height: 30px
  width: 30px
  color: #FFF
.btn-cart, .logo
  align-self: center
</style>
