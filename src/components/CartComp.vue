<template>
  <div class="cart-comp">
    <p v-if="!cartItems.length">Nothing there yet</p>
    <div class="cart__top" v-if="cartItems.length">
      <p class="cart__total">Total: ${{ getItemsAmount }} for {{ getItemsQuantity }} items </p>
      <router-link to="/cart">
        <button class="cart__link" >To cart</button>
      </router-link>
    </div>
    <div class="cart__content">
      <CartItem
        v-for="item of cartItems"
        :item="item"
        :key="item.id"
        @remove="onDelete"
        @increase="increaseQuantity"
        @decrease="decreaseQuantity"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import cartCompMixin from 'mixins/cartCompMixin';
import CartItem from 'components/CartItem.vue';

export default {
  name: 'CartComp',
  components: { CartItem },
  mixins: [cartCompMixin],
  methods: {
    ...mapActions(['syncWithLS']),
  },
  mounted() {
    this.getUserCart();
  },
  updated() {
    this.syncWithLS();
  },
};
</script>

<style scoped lang="sass">
a
  &:visited
    color: #000
.cart
  &__comp
    cursor: default
  &__top
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 5px
  &__total
    font-size: 17px
    text-decoration: underline
    color: grey
  &__link
    font-size: 16px
    font-weight: 600
    transition: all ease-in-out .2s
    border: 1px solid grey
    border-radius: 10px
    padding: 3px 10px
    background: none
    color: grey
    &:hover
      color: #fff
      background: $accentColor
      border-color: $accentColor
.line
  border: none
  height: 1px
  background: grey
  margin-bottom: 10px
</style>
