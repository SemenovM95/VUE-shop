<template>
  <div class="search-results">
    <template v-if="list && list.length">
      <router-link
        :to="{name: 'Product', params: {id: item.id}}"
        v-for="item in showHints"
        :key="item.id"
        class="search-hint"
      >
          {{ item.title }} {{ item.size }} {{ item.color }}
      </router-link>
    </template>
    <template v-else>
      <p>No results</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SearchHints',
  props: ['list'],
  data() {
    return {
      maxHints: 10,
    };
  },
  computed: {
    showHints() {
      return this.list.slice(0, this.maxHints - 1);
    },
  },
};
</script>

<style scoped lang="sass">
.search
  &-results
    display: flex
    flex-direction: column
    position: absolute
    max-height: 460px
    width: 100%
    background: white
    border-bottom-left-radius: 25px
    border-bottom-right-radius: 25px
    padding: 10px 20px
    box-shadow: 0 10px 15px -10px rgba(0,0,0, .2)
  &-hint
    padding: 8px
    text-align: start
    min-height: 40px
    font-size: 20px
    transition: background-color .2s
    &:hover
      background-color: #d9d9d9
  &-hint a
    width: 100%
</style>
