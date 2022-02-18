<template>
  <div class="cart-item">
    <div class="product-bio">
      <img
        :src="require(`@/assets/img/product-img-${item.id}.png`)"
        alt="Some image"
        class="product-img"
      >
      <div class="product-desc">
        <p class="product-title">{{item.title}}</p>
        <div class="product-quantity">
          <button class="btn decrease" @click="$emit('decrease', item)">
            <i class="fas fa-minus"></i>
          </button>
          <p class="product-quantity_number">{{item.quantity}}</p>
          <button class="btn increase" @click="$emit('increase', item)">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <p class="product-price">${{item.price}} each</p>
      </div>
    </div>
    <div class="right-block">
<!--      <p class="product-price">${{item.quantity*item.price}} total</p>-->
      <button class="btn delete" @click="$emit('remove', item)">
        <i class="fas fa-trash del-btn_ico"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['item'],
};
</script>

<style scoped lang="sass">
  .cart-item
    display: flex
    justify-content: space-between
    &:not(:last-child)
      margin-bottom: 10px
  .quantity
    display: flex
    align-items: center
    justify-content: center
  .btn
    background: none
    margin-top: 5px
    border: 1px solid transparent
    border-radius: 5px
    transition: all ease-in-out .2s
    cursor: pointer
    color: #acacac
    &:hover
      color: $accentColor
  .product
    &-img
      height: 100px
    &-bio
      display: flex
      width: 300px
    &-desc
      display: flex
      flex-direction: column
      justify-content: space-evenly
      margin: 0 20px
    &-quantity
      display: flex
      justify-content: center
      align-items: baseline
      &_number
        margin: 0 5px
        user-select: none
</style>
