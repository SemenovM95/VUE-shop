<template>
  <div>
    <div v-if="isCatalogLoaded" class="catalog-wrapper">
      <div class="catalog-list">
        <CatalogItem v-for="item of getPage" :item="item" :key="item.id"/>
      </div>
      <Pagination v-if="isPaginationVisible"/>
    </div>
    <div v-else>
      <pre>Loading <font-awesome-icon icon="fa-solid fa-spinner" size="xl" spin/></pre>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogItem from 'components/CatalogItem.vue';
import Pagination from 'components/UI/Pagination.vue';

export default {
  name: 'CatalogList',
  components: { Pagination, CatalogItem },
  computed: {
    ...mapGetters(['goods', 'getPage', 'getPagesAmount', 'isCatalogLoaded']),
    isPaginationVisible() {
      return this.$route.path === '/catalog';
    },
  },
  methods: {
    ...mapActions(['getGoodsList']),
  },
  mounted() {
    this.getGoodsList();
  },
  beforeDestroy() {
    this.$store.commit('SET_CATALOG_LOAD_STATUS', false);
  },
};
</script>

<style scoped lang="sass">
.catalog
  &-wrapper
    display: flex
    flex-direction: column
    align-items: center
  &-list
    display: flex
    flex-flow: row wrap
    justify-content: space-between
    width: 100%
@media (max-width: $maxWidthLaptop)
  .catalog-list
    justify-content: space-between
@media (max-width: $maxWidthMobileL)
  .catalog-list
    justify-content: center
</style>
