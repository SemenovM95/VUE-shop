<template>
    <ul class="pages">
      <li>
        <button class="btn" @click="setPage(getCurrPage - 1)">Prev</button>
      </li>
      <li v-for="page in getPagesAmount" :key="page" class="pagination-btn">
        <button
          class="btn"
          :class="{'page--current': getCurrPage === page}"
          @click="setPage(page)">
            {{ page }}
        </button>
      </li>
      <li>
        <button class="btn" @click="setPage(getCurrPage + 1)">Next</button>
      </li>
    </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'pagination',
  computed: {
    ...mapGetters(['getPagesAmount', 'getCurrPage']),
  },
  methods: {
    ...mapActions(['setCurrPage']),
    setPage(page) {
      this.setCurrPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
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
