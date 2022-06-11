<template>
  <form action="#" class="search-form" @submit.prevent="searchGoods">
    <div class="search-block" v-click-outside="onFocusOut" @keydown.esc="onFocusOut">
      <input
        type="text"
        class="search-field"
        :class="{'search-field_dropdown': isHintsVisible && userSearch}"
        v-model="userSearch"
        @input="updateSearch"
        @focus="onFocus"
        placeholder="Search"
      >
      <SearchHints v-show="isHintsVisible && userSearch" :list="getSearchResults"/>
      <button class="search-btn">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SearchHints from 'components/SearchHints.vue';
import { throttle } from 'lodash';

export default {
  name: 'SearchComp',
  components: { SearchHints },
  data() {
    return {
      userSearch: '',
      isHintsVisible: false,
    };
  },
  computed: { ...mapGetters(['getSearchResults']) },
  methods: {
    ...mapActions(['searchGoods']),
    updateSearch() {
      this.$store.commit('SET_SEARCH', this.userSearch);
      this.isHintsVisible = true;
    },
    onFocus() {
      this.isHintsVisible = true;
    },
    onFocusOut(e) {
      e.target.blur();
      this.isHintsVisible = false;
    },
  },
  watch: {
    $route() {
      this.isHintsVisible = false;
    },
  },
  created() {
    // TODO: найти нормальное решение для передачи контекста
    this.updateSearch = throttle(this.updateSearch, 500);
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
    width: 760px
    height: 36px
    border-radius: 25px
    border: none
    padding: 8px 30px
    font-size: 20px
    &_dropdown
      border-bottom-right-radius: 0
      border-bottom-left-radius: 0
    &:hover
      filter: brightness(0.90)
  &-btn
    background: transparent
    cursor: pointer
    border: none
    &:hover .fa-search > path
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
