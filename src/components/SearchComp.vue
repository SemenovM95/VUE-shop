<template>
  <form action="#" class="search-form" @submit.prevent="searchGoods">
    <div class="search-block">
      <input type="text" class="search-field" @input="updateSearch" placeholder="Search">
      <button class="search-btn" type="submit">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SearchComp',
  computed: { ...mapGetters(['']) },
  methods: {
    ...mapActions(['searchGoods']),
    updateSearch(e) {
      this.$store.commit('SET_SEARCH', e.target.value);
    },
  },
};
</script>

<style scoped lang="sass">
.search
  &-form
    display: flex
    align-items: center
    align-self: center
    width: 240px
    justify-content: space-between
  &-block
    position: relative
  &-field
    width: 240px
    height: 36px
    border-radius: 25px
    border: none
    padding: 8px 15px
    font-size: 20px
  &-btn
    background: transparent
    cursor: pointer
    border: none
    &:hover .fa-search
      color: $accentColor
.fa-search
  color: #000
  height: 20px
  width: 20px
  transition: all ease-in-out .2s
  position: absolute
  right: 10px
  top: 8px
</style>
