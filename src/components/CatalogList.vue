<template>
    <div class="catalog-list center">
      <CatalogItem v-for="item of goods" :item="item" :key="item.id"/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogItem from 'components/CatalogItem.vue';

export default {
  name: 'CatalogList',
  components: { CatalogItem },
  computed: {
    ...mapGetters(['goods']),
  },
  methods: {
    ...mapActions(['getGoodsList']),
  },
  created() {
    this.getGoodsList();
  },
};
</script>

<style scoped lang="sass">
  .catalog-list
    display: flex
    flex-flow: row wrap
    justify-content: space-between
    width: 100%
</style>
