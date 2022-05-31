<template>
  <div>
    <BreadCrumbs/>
    <section id="content" class="catalog center">
      <router-view/>
    </section>
  </div>
</template>

<script>
import BreadCrumbs from 'components/BreadCrumbs.vue';

export default {
  name: 'Catalog',
  components: { BreadCrumbs },
};
</script>

<style scoped lang="sass">
  .catalog
    display: flex
    flex-direction: column
    align-items: center
    margin-top: 48px
    &-heading
      margin-top: 30px
      color: $accentColor

  @media (max-width: $maxWidthMobileL)
    .catalog
      justify-content: center
</style>
