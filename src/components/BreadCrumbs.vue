<template>
 <div class="crumbs center">
   <h2 class="crumbs-page">NEW ARRIVALS</h2>
   <div class="crumbs-path">
     <a class="crumbs-link" href="/">HOME</a>
     <a class="crumbs-link" href="#">NEW ARRIVALS</a>
   </div>
 </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',
};
</script>

<style scoped lang="sass">
h2
  font-weight: 400
  padding-top: 60px
  padding-bottom: 60px
  color: $accentColor
.crumbs
  background: #F8F3F4
  display: flex
  justify-content: space-between
  align-items: center
  &-link:last-child
    font-weight: bold
    color: $accentColor
  &-link:not(:last-child)::after
    content: "/"
    padding-left: 5px
    padding-right: 5px
</style>
