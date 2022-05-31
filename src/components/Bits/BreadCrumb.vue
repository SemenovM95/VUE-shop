<template>
  <router-link
    class="crumbs__link"
    :to="{ name: crumb.component || crumb.name }"
  >
    {{ crumb.name }}
  </router-link>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    crumb: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style scoped lang="sass">
.crumbs
  &__link:last-child
    font-weight: bold
    color: $accentColor
  &__link:not(:last-child)::after
    content: "/"
    padding-left: 5px
    padding-right: 5px
</style>
