<template>
  <div class="item">
    <img
      :src="require(`@/assets/img/product/product-img-${item.id}.png`)"
      alt="Some image"
      class="item-img"
    >
    <div class="item-info">
      <router-link :to="{ path: `/catalog/product/${item.id}` }">
        <h4 class="item-heading">{{ item.title }}</h4>
      </router-link>
      <div class="item-features">
        <span>Price:
          <span class="accent">${{ item.price }}</span>
        </span>
        <span>Color: {{ item.color }}</span>
        <span>Size: {{ item.size }}</span>
        <span>Quantity:
            <button class="btn" @click="$emit('decrease', item)">
              <font-awesome-icon icon="fa-solid fa-minus" class="icon"/>
            </button>
            <span class="item-quantity">{{ item.quantity }}</span>
            <button class="btn" @click="$emit('increase', item)">
              <font-awesome-icon icon="fa-solid fa-plus" class="icon"/>
            </button>
          </span>
      </div>
    </div>
    <button class="btn delete" @click="$emit('remove', item)">
      <font-awesome-icon icon="fa-solid fa-xmark" size="lg" class="icon"/>
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
.item
  display: flex
  position: relative
  width: 100%
  max-width: 640px
  background: #FFFFFF
  box-shadow: 15px 15px 30px -5px rgba(0, 0, 0, 0.21)
  &:not(:last-child)
    margin-bottom: 40px
  &-img
    width: 40%
  &-info
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start
    padding: 24px 32px
  &-heading
    text-align: left
    font-size: 24px
    line-height: 29px
    color: #222222
    max-width: 90%
    margin-bottom: 42px
    overflow: hidden
    display: -webkit-box
    word-break: break-word
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
  &-features
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: center
    font-size: 22px
    line-height: 26px
    color: #575757
  &-quantity
    font-size: 16px
    border: 1px solid #EAEAEA
    padding-left: 10px
    padding-right: 10px
    margin-left: 8px
    margin-right: 8px
    &_block
      margin-left: 16px
      width: 80px
      display: flex
      justify-content: space-between
.btn
  &:first-child
    padding-left: 5px
button
  &:hover .icon path
    fill: $accentColor
.delete
  position: absolute
  top: 5%
  right: 3%

@media (max-width: $maxWidthLaptop)
  .item
    &-info
      padding: 16px 24px

@media (max-width: $maxWidthMobileL)
  .item
    max-height: 188px
    &-info
      padding: 16px 20px
    &-heading
      font-size: 16px
      line-height: 18px
      margin-bottom: 16px
    &-features
      font-size: 14px
      line-height: 16px
    &:not(:last-child)
      margin-bottom: 20px
@media (max-width: $maxWidthMobileS)
  .item
    &-info
      padding: 8px 16px
</style>
