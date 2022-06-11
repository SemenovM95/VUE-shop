<template>
  <header class="header center">
    <div class="header-left">
      <SideMenu
        class="side-menu"
        :class="{'side-menu--active': isMenuVisible}"
      />
      <button
        class="btn hideMobileL"
        @click="showMenu"
        v-click-outside="hideMenu"
      >
        <font-awesome-icon icon="fa-solid fa-bars" class="icon">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xs" class="icon">
          </font-awesome-icon>
        </font-awesome-icon>
      </button>
      <router-link to="/"><img src="../assets/svg/home.svg" alt="home" /></router-link>
      <SearchComp class="hideMobileL"/>
    </div>
    <div class="header-right hideMobileL">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/catalog">Catalog</router-link>
        <router-link to="/sandbox">Sandbox</router-link>
      </div>
      <button
        class="btn-cart"
        type="button"
        @click="isCartVisible = !isCartVisible"
        v-click-outside="hideCart"
      >
        <span class="cart-quantity">{{ this.$store.getters.getItemsQuantity }}</span>
        <font-awesome-icon icon="fa-solid fa-cart-shopping" class="icon"/>
        <span class="cart-block" v-show="isCartVisible"  @click.stop>
          <CartComp/>
        </span>
      </button>
    </div>
  </header>
</template>

<script>
import CartComp from 'components/CartComp.vue';
import SearchComp from 'components/SearchComp.vue';
import SideMenu from 'components/SideMenu.vue';

export default {
  name: 'Header',
  data() {
    return {
      isCartVisible: false,
      isMenuVisible: false,
    };
  },
  components: { SearchComp, CartComp, SideMenu },
  methods: {
    showMenu() {
      this.isMenuVisible = true;
      this.$parent.isOverlayVisible = true;
      document.body.classList.add('overflow-hidden');
    },
    hideMenu() {
      this.isMenuVisible = false;
      this.$parent.isOverlayVisible = false;
      document.body.classList.remove('overflow-hidden');
    },
    hideCart() {
      this.isCartVisible = false;
    },
  },
  watch: {
    $route() {
      this.isCartVisible = false;
    },
  },
};
</script>

<style scoped lang="sass">
#nav
  padding: 30px
  a
    font-weight: bold
    color: #ffffff
    &:not(:last-child)
      padding-right: 10px
    &.router-link-exact-active
      color: $accentColorTinted
    &:hover
      color: $accentColor

.side-menu
  left: -250px
  &--active
    left: 0
.header
  z-index: 100
  height: 75px
  background-color: #222222
  display: flex
  justify-content: space-between
  align-items: center
  &-left
    display: flex
    justify-content: space-between
    width: 360px
  &-right
    display: flex
    align-items: center
    justify-content: space-between
    position: relative

.cart
  display: flex
  position: relative
  &-block
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.62)
    border-radius: 5px
    box-sizing: border-box
    right: -20px
    top: 85%
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
  &-quantity
    position: absolute
    background: #f16d7f
    border-radius: 100%
    width: 12px
    height: 12px
    font-size: 10px
    font-weight: bold
    color: white
    right: -2px
.btn-cart
  background-color: transparent
  border: 1px solid transparent
  transition: all ease-in-out .2s
  cursor: pointer
  &:hover .icon path
    fill: $accentColor
.icon
  height: 30px
  width: 30px
  color: #FFF
.btn-cart, .logo
  align-self: center

@media (max-width: $maxWidthMobileL)
  .header-left
    width: 100%
    justify-content: center
  .cart
    &-block
      width: 300px
      right: -15px
      top: 45px
</style>
