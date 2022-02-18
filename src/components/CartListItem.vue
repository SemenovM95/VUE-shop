<template>
  <div class="item">
    <img
      :src="require(`@/assets/img/product-img-${item.id}.png`)"
      alt="Some image"
      class="item-img"
    >
    <div class="item-content">
      <h4 class="item-heading">{{ item.title }}</h4>
      <p class="item-features accent">Price: <span class="accent">${{ item.price }}</span></p>
      <p class="item-features">Color: {{ item.color }}</p>
      <p class="item-features">Size: {{ item.size }}</p>
      <div class="item-features flex">Quantity:
        <div class="item-quantity_block">
          <button class="btn decrease" @click="$emit('decrease', item)">
            <i class="fas fa-minus"></i>
          </button>
          <span class="item-quantity">{{ item.quantity }}</span>
          <button class="btn increase" @click="$emit('increase', item)">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
    <button class="btn delete" @click="$emit('remove', item)">
      <i class="fas fa-trash del-btn_ico"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: ['item'],
};
</script>

<style scoped lang="sass">
.accent
  color: $accentColor
.item
  display: flex
  position: relative
  width: 652px
  background: #FFFFFF
  box-shadow: 15px 15px 30px -5px rgba(0, 0, 0, 0.21)
  &:not(:last-child)
    margin-bottom: 40px
  &-img
    width: 262px
  &-content
    display: flex
    flex-direction: column
    align-items: flex-start
    margin-top: 22px
    margin-left: 31px
    margin-bottom: 62px
  &-heading
    font-size: 24px
    line-height: 29px
    color: #222222
    width: 262px
    margin-bottom: 42px
  &-features
    font-size: 22px
    line-height: 26px
    color: #575757
  &-quantity
    font-size: 16px
    border: 1px solid #EAEAEA
    padding-left: 10px
    padding-right: 10px
    &_block
      margin-left: 16px
      width: 80px
      display: flex
      justify-content: space-between
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
.delete
  position: absolute
  top: 28px
  right: 22px
  height: 18px
.flex
  display: flex
  align-items: center
  justify-content: center
</style>
