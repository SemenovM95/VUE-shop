<template>
  <button class="navbar-mobile__btn" @click="$router.push(element.href)">
          <span
            v-if="element.name === 'Cart'"
            class="quantity"
          >
        {{ this.$store.getters.getItemsQuantity }}
      </span>
    <font-awesome-icon :icon="element.icon" class="icon" />
    <span>{{ element.name }}</span>
  </button>
</template>

<script>
export default {
  name: 'NavbarBtn',
  props: ['element'],
};
</script>

<style scoped lang="sass">
.navbar-mobile__btn
  position: relative
  width: 24px
.icon
  height: 70%
  width: 70%
.quantity
  position: absolute
  background: #f16d7f
  color: white
  width: 9px
  height: 9px
  font-size: 8px
  border-radius: 100%
  top: 2px
  right: 0
</style>
