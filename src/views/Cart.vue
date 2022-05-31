<template>
  <div>
    <BreadCrumbs/>
    <section class="cart center">
        <CartList/>
      <div class="cart-right">
        <div class="shipping">
          <p class="shipping-heading">SHIPPING ADDRESS</p>
        <ShippingForm/>
        </div>
        <div class="checkout">
          <p class="checkout-sub">${{ getItemsAmount }}</p>
          <p class="checkout-grand accent">${{ getItemsAmount }}</p>
          <hr class="checkout-line">
          <button class="btn checkout-btn btn-tint">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BreadCrumbs from 'components/BreadCrumbs.vue';
import CartList from 'components/CartList.vue';
import ShippingForm from 'components/ShippingForm.vue';

export default {
  name: 'Cart',
  components: { ShippingForm, CartList, BreadCrumbs },
  computed: { ...mapGetters(['getItemsAmount']) },
};
</script>

<style scoped lang="sass">
.cart
  display: flex
  justify-content: space-between
  margin-top: 96px
  margin-bottom: 128px
  &-right
    display: flex
    flex-direction: column
    justify-content: flex-start
.shipping
  margin-bottom: 57px
  width: 100%
  max-width: 360px
  &-heading
    margin-bottom: 21px
    color: #222222
.checkout
  background: #F5F3F3
  padding: 42px min(5vw, 42px)
  font-size: 14px
  line-height: 16px
  color: #4A4A4A
  display: flex
  flex-direction: column
  align-items: flex-end
  &-sub
    padding-bottom: 12px
    &:before
      content: 'SUBTOTAL'
      padding-right: 24px
  &-grand
    font-size: 16px
    line-height: 19px
    &:before
      content: 'GRAND TOTAL'
      padding-right: 24px
      color: #222222
  &-line
    margin-top: 21px
    margin-bottom: 17px
    border: none
    background: #E2E2E2
    height: 1px
  &-btn
    padding: 16px 43px
    background: $accentColor
    font-weight: 300
    font-size: 16px
    line-height: 19px
    color: #FFFFFF
    display: inline-block
    transition: all ease-in-out .2s
    &:visited
      color: #FFF

@media (max-width: $maxWidthTablet)
  .cart
    flex-direction: column
    margin-bottom: 0
    &-right
      flex-direction: row
      justify-content: space-between
  .checkout
    height: 100%
@media (max-width: $maxWidthMobileL)
  .cart
    margin-bottom: 1em
    margin-top: 36px
    &-right
      flex-direction: column
  .shipping
    max-width: unset

</style>
