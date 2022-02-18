<template>
  <div class="cart-comp">
    <p v-if="!cartItems.length">Nothing there yet</p>
    <div class="cart-content">
      <CartListItem
        v-for="item of cartItems"
        :item="item"
        :key="item.id"
        @remove="deleteProduct"
        @increase="increaseQuantity"
        @decrease="decreaseQuantity"
      />
    </div>
    <div class="cart-buttons">
      <a href="#" class="cart-btn-left" @click="clearCart">CLEAR SHOPPING CART</a>
      <a href="#" class="cart-btn_left">CONTINUE SHOPPING</a>
    </div>
  </div>

</template>

<script>
import cartCompMixin from 'mixins/cartCompMixin';
import CartListItem from 'components/CartListItem.vue';

export default {
  name: 'CartList',
  mixins: [cartCompMixin],
  components: { CartListItem },
};
</script>

<style scoped lang="sass">
.cart
  &-buttons
    display: flex
    justify-content: space-between
    margin-top: 72px
    &_button
      border: 1px solid #A4A4A4
      padding: 16px 38px
      &:hover
        border: 1px solid #fff
        background: $accentColor
        color: #fff
      &:visited
        color: #000000
        &:hover
          color: #ffffff
</style>
