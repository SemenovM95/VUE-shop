<template>
  <div class="catalog-list">
    <CatalogItem v-for="item of list" :item="item" :key="item.id"/>
  </div>
</template>

<script>
import CatalogItem from 'components/CatalogItem.vue';

export default {
  name: 'ProductList',
  components: { CatalogItem },
  props: ['list'],
};
</script>

<style scoped lang="sass">
.catalog-list
 display: flex
 flex-flow: row wrap
 justify-content: space-between
 width: 100%
</style>
