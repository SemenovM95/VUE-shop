<template>
  <div>
    <BreadCrumbs/>
    <section id="content" class="catalog center">
      <CatalogList/>
    </section>
  </div>
</template>

<script>
import CatalogList from 'components/CatalogList.vue';
import BreadCrumbs from 'components/BreadCrumbs.vue';

export default {
  name: 'Catalog',
  components: { BreadCrumbs, CatalogList },
};
</script>

<style scoped lang="sass">
  .center
    padding-left: calc(50% - 570px)
    padding-right: calc(50% - 570px)
  .catalog
    display: flex
    flex-direction: column
    align-items: center
    margin-top: 48px
    &-heading
      margin-top: 30px
      color: $accentColor
</style>
