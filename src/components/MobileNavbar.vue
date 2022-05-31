<template>
  <div class="navbar-mobile">
    <NavbarBtn v-for="element in elements" :key="element.index" :element="element"/>
  </div>
</template>

<script>
import NavbarBtn from 'components/Bits/NavbarBtn.vue';

export default {
  name: 'MobileNavbar',
  components: { NavbarBtn },
  data() {
    return {
      elements: [
        { name: 'Home', icon: 'fa-solid fa-house', href: '/' },
        { name: 'Catalog', icon: 'fa-solid fa-bars', href: '/catalog' },
        { name: 'Cart', icon: 'fa-solid fa-cart-shopping', href: '/cart' },
        { name: 'Profile', icon: 'fa-solid fa-user', href: '/profile' },
      ],
    };
  },
};
</script>

<style scoped lang="sass">
.navbar-mobile
  background: #222224
  position: fixed
  z-index: 100
  display: flex
  justify-content: space-around
  align-items: center
  bottom: -1px
  height: 64px
  width: 100%
  box-shadow: 0 10px 20px black

  &__btn
    color: white

button
  background: none
  border: none
  color: #FFF
  height: 70%
  width: 70%
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center
</style>
