<template>
 <div class="crumbs center">
   <h2 class="crumbs__page">NEW ARRIVALS</h2>
   <div class="crumbs__path">
     <BreadCrumb
       v-for="crumb in crumbs"
       :key="crumb.index"
       :crumb="crumb"
     />
   </div>
 </div>
</template>

<script>
import BreadCrumb from 'components/Bits/BreadCrumb.vue';

export default {
  name: 'BreadCrumbs',
  components: { BreadCrumb },
  data() {
    return {
      crumbs: {
        type: Array,
        required: true,
        default: () => [],
      },
    };
  },
  beforeMount() {
    this.crumbs = this.$route.meta.breadcrumbs;
  },
};
</script>

<style scoped lang="sass">
h2
  font-weight: 400
  color: $accentColor
.crumbs
  background: #F8F3F4
  display: flex
  justify-content: space-between
  align-items: center
  min-height: 148px
  padding-left: 48px
  padding-right: 48px
  &__link:last-child
    font-weight: bold
    color: $accentColor
  &__link:not(:last-child)::after
    content: "/"
    padding-left: 5px
    padding-right: 5px
@media (max-width: $maxWidthMobileL)
  .crumbs
    flex-direction: column
    justify-content: space-around
    align-items: center
    padding-top: 24px
    padding-bottom: 24px
</style>
