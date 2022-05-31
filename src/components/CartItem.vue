<template>
  <div class="cart-item">
    <div class="cart-item__bio">
      <img
        :src="require(`@/assets/img/product/product-img-${item.id}.png`)"
        :alt="item.title"
        class="cart-item__img"
      >
      <div class="cart-item__desc">
        <router-link :to="{ path: `/catalog/product/${item.id}` }">
          <p class="cart-item__title">{{item.title}}</p>
        </router-link>
        <div class="cart-item__quantity">
          <button class="btn decrease" @click="$emit('decrease', item)" title="Add item">
            <i class="fas fa-minus"></i>
          </button>
          <p class="cart-item__number">{{item.quantity}}</p>
          <button class="btn increase" @click="$emit('increase', item)" title="Remove item">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <p class="cart-item__price">${{item.price}} each</p>
      </div>
    </div>
    <div class="cart-item__delete">
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
    &__img
      height: 100px
    &__bio
      display: flex
      width: 300px
    &__desc
      display: flex
      flex-direction: column
      justify-content: space-evenly
      margin: 0 20px
    &__quantity
      display: flex
      justify-content: center
      align-items: baseline
    &__number
      margin: 0 5px
      user-select: none
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

</style>
