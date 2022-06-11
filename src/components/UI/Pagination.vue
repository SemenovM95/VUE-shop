<template>
    <ul class="pages">
      <li>
        <button class="btn" @click="$emit( 'setPage',currPage - 1)">Prev</button>
      </li>
      <li v-for="page in pages" :key="page" class="pagination-btn">
        <button
          class="btn"
          :class="{'page--current': currPage === page}"
          @click="$emit( 'setPage', page)">
            {{ page }}
        </button>
      </li>
      <li>
        <button class="btn" @click="$emit( 'setPage',currPage + 1)">Next</button>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'pagination',
  props: ['pages', 'currPage'],
};
</script>

<style scoped lang="sass">
.pages
  display: flex
  list-style: none
  position: center
  border: 1px solid #ebebeb
  border-radius: 3px
button
  background: none
  padding: 5px 10px
  &:hover
    background: $accentColor
    color: #fff
.page--current
  color: $accentColor
</style>
