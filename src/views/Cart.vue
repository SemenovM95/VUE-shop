<template>
  <div>
    <BreadCrumbs/>
    <section class="cart center">
      <div class="cart-left">
        <CartList/>
      </div>
      <div class="cart-right">
        <div class="shipping">
          <p class="shipping-heading">SHIPPING ADDRESS</p>
          <form action="" class="shipping-form" id="shipping-form">
            <input type="text" placeholder="City" class="shipping-form_field">
            <input type="text" placeholder="State" class="shipping-form_field">
            <input type="number" placeholder="Postcode / Zip" class="shipping-form_field">
            <button class="shipping-form_btn" type="submit" form="shipping-form">
              GET A QUOTE
            </button>
          </form>
        </div>
        <div class="checkout">
          <div class="checkout-info">
            <div class="checkout-info_part">
              <p class="checkout-info_sub">SUB TOTAL</p>
              <p class="checkout-info_subtotal">${{ getItemsAmount }}</p>
            </div>
            <div class="checkout-info_part">
              <h4 class="checkout-info_grand">GRAND TOTAL</h4>
              <h4 class="checkout-info_grandtotal">${{ getItemsAmount }}</h4>
            </div>
          </div>
          <hr class="checkout-line">
          <a href="#" class="checkout-btn">PROCEED TO CHECKOUT</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BreadCrumbs from 'components/BreadCrumbs.vue';
import CartList from 'components/CartList.vue';

export default {
  name: 'Cart',
  components: { CartList, BreadCrumbs },
  computed: { ...mapGetters(['getItemsAmount']) },
};
</script>

<style scoped lang="sass">
.cart
  display: flex
  justify-content: space-between
  margin-top: 96px
  margin-bottom: 128px
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
.shipping
  margin-bottom: 57px
  width: 360px
  &-heading
    margin-bottom: 21px
    color: #222222
  &-form
    display: flex
    flex-direction: column
    &_field
      padding: 15px
      border: 1px solid #A4A4A4
      margin-bottom: 21px
    &_btn
      font-weight: 300
      font-size: 11px
      line-height: 13px
      color: #757575
      padding: 9px
      width: 100px
      border: 1px solid #A4A4A4
      background: none
      cursor: pointer
      transition: all ease-in-out .2s
      &:hover
        border: 1px solid #fff
        background: $accentColor
        color: #fff
.checkout
  background: #F5F3F3
  padding: 42px
  &-info
    display: flex
    flex-direction: column
    align-items: flex-end
    &_part
      display: flex
      margin-bottom: 12px
    &_sub
      font-size: 11px
      line-height: 13px
      color: #4A4A4A
    &_grand
      font-weight: 700
      font-size: 16px
      line-height: 19px
      color: #222222
    &_subtotal
      margin-left: 32px
      font-size: 11px
      line-height: 13px
      color: #4A4A4A
    &_grandtotal
      margin-left: 32px
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
    &:hover
      background: $accentColorTinted
</style>
