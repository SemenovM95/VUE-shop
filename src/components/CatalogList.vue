<template>
  <div>
    <div v-if="isCatalogLoaded" class="catalog-wrapper">
      <ProductList :list="getPage"/>
      <Pagination :pages="getPagesAmount" :currPage="getCurrPage" @setPage="setCurrPage"/>
    </div>
    <div v-else>
      <pre>Loading <font-awesome-icon icon="fa-solid fa-spinner" size="xl" spin/></pre>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pagination from 'components/UI/Pagination.vue';
import ProductList from 'components/ProductList.vue';

export default {
  name: 'CatalogList',
  components: { ProductList, Pagination },
  computed: {
    ...mapGetters(['goods', 'getPage', 'isCatalogLoaded', 'getPagesAmount', 'getCurrPage']),
  },
  methods: {
    ...mapActions(['getGoodsList', 'setCurrPage']),
    setPage(page) {
      this.setCurrPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    this.getGoodsList();
  },
};
</script>

<style scoped lang="sass">
.catalog-wrapper
    display: flex
    flex-direction: column
    align-items: center

@media (max-width: $maxWidthLaptop)
  .catalog-list
    justify-content: space-between
@media (max-width: $maxWidthMobileL)
  .catalog-list
    justify-content: center
</style>
