<template>
  <div class="catalog-item catalogItem_mb">
    <router-link to="/product">
      <img
        :src="require(`@/assets/img/product-img-${item.id}.png`)"
        alt="Product Image"
        class="product-img" />
    </router-link>
    <button class="button add" @click="addProduct(item)">
      <img src="../assets/svg/cart.svg" alt="cart"> Add To Cart
    </button>
    <h3>{{ item.title }}</h3>
    <p>{{ item.desc }}</p>
    <p class="price">${{ item.price }}</p>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CatalogItem',
  props: ['item'],
  computed: {
    ...mapGetters(['cartItems']),
  },
  methods: {
    ...mapActions(['addProduct']),
  },
};
</script>

<style scoped lang="sass">
  h3
    padding-top: 24px
    padding-left: 18px
    font-size: 13px
    font-weight: 400
    line-height: 16px
    text-align: left
  p
    padding-top: 12px
    padding-left: 18px
    font-size: 14px
    font-weight: 300
    line-height: 17px
    color: #5d5d5d
    text-align: left
    &.price
      padding-top: 18px
      padding-left: 18px
      padding-bottom: 20px
      color: #f26376
  .product
    &-img
      transition: all ease-in-out .1s
  .catalog-item
    display: flex
    flex-direction: column
    max-width: 360px
    flex-wrap: wrap
    background: #f8f8f8
    position: relative
    margin-bottom: 30px
    &:hover .product-img
      filter: brightness(50%)
    &:hover .add
      display: flex
  .button
    position: absolute
    top: 188px
    left: 111px
    width: 139px
    height: 44px
    border: 1px solid white
    border-radius: 5px
    background: none
    color: #FBFBFB
    align-items: center
    justify-content: center
    display: none
    transition: all ease-in-out .2s
    cursor: pointer
    &:hover
      box-shadow: 0 0 8px 2px #ffffff
    img
      padding-right: 8px
</style>
