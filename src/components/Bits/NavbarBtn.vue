<template>
  <button class="navbar-mobile__btn" @click="$router.push(element.href)">
    <font-awesome-icon :icon="element.icon" class="icon" bounce/>
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
.icon
  height: 40%
  width: 40%
</style>
