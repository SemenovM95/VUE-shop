<template>
<!--  TODO: сделать slide-on описание -->
  <div class="item">
    <router-link :to="{ name: 'Product', params: {id: item.id} }" class="link">
      <img
        :src="require(`@/assets/img/product/${item.img}`)"
        alt="Product Image"
        class="item-img"
      />
      <button class="button" @click.prevent="addProduct(item)" title="Add to cart">
        <img src="../assets/svg/cart.svg" alt="cart"> Add To Cart
      </button>
    </router-link>
    <div class="item-bio">
      <h3>{{ item.title }}</h3>
      <p class="description">{{ item.desc }}</p>
      <p class="price">${{ item.price }}</p>
    </div>
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
.item
  display: flex
  flex-direction: column
  max-width: 360px
  background: #f8f8f8
  position: relative
  margin-bottom: 30px
  &:hover .item-img
    filter: brightness(.5)
  &-img
    transition: .2s ease-in-out
    width: 100%
  &:hover .button
    display: flex
  &-bio
    padding: 24px 16px 16px 16px
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 100%
.button
  position: absolute
  padding: 5px 10px
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
//.description
//  max-height: 148px
//  overflow: hidden
//  display: -webkit-box
//  -webkit-line-clamp: 8
//  -webkit-box-orient: vertical
.link
  position: relative
  display: flex
  justify-content: center
  align-items: center
  width: 100%
h3
  font-size: 13px
  font-weight: 400
  line-height: 16px
  text-align: left
p
  padding: 3% 0 2% 0
  font-size: 14px
  font-weight: 300
  line-height: 17px
  color: #5d5d5d
  text-align: left
  &.price
    padding: 0
    color: $accentColor

@media (max-width: $maxWidthLaptop)
  .item
    width: calc((100% - 16px*2)/3)

@media (max-width: $maxWidthTablet)
  .item
    width: calc((100% - 16px)/2)
    max-width: unset

@media (max-width: $maxWidthMobileL)
  .item
    width: 100%

@media (max-width: $maxWidthMobileS)
  .item
    width: 100%
</style>
