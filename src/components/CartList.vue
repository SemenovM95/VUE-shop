<template>
  <div class="cart-container">
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
      <button class="btn btn-color cart-btn" @click="clearCart">CLEAR SHOPPING CART</button>
      <button class="btn btn-color cart-btn">CONTINUE SHOPPING</button>
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
  &-container
    margin-bottom: 30px
  &-buttons
    display: flex
    justify-content: space-between
    padding-top: 72px
  &-btn
    border: 1px solid #A4A4A4
    padding: 1em 2em
    height: 100%
    color: #757575
    background: none
    &:hover
      border: 1px solid #fff
      background: $accentColor
      color: #fff
      &:hover
        color: #ffffff
  &-content
    display: flex
    flex-direction: column
@media (max-width: $maxWidthLaptop)
  .cart
    &-container
      width: calc((60% - 32px *2))
@media (max-width: $maxWidthTablet)
  .cart
    &-container
      width: 100%
    &-content
      align-items: center
    &-buttons
      justify-content: space-around

@media (max-width: $maxWidthMobileL)
  .cart
    &-buttons
      justify-content: space-between
      padding-top: 36px
    &-btn
      padding: 1em 1.5em
      font-size: 12px
@media (max-width: $maxWidthMobileS)
  .cart
    &-btn
      padding: 4px 6px
</style>
