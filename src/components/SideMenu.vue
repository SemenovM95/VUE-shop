<template>
<!--  TODO: придумать, что сюда доделать -->
  <div class="menu-container" @click.stop.self>
    <div class="menu-list">
      <button
        v-for="item in buttons"
        :key="item.index"
        class="menu-item" @click.stop
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      buttons: ['Понятия', 'Не', 'Имею', 'Что', 'Сделать', 'В', 'Этом', 'Меню', 'Ведь', 'В', 'Макете', 'Его', 'Вообще', 'Не', 'Было'],
    };
  },
};
</script>

<style scoped lang="sass">
.active
  left: 0 !important
.menu
  &-container
    padding: 8px 0
    position: fixed
    top: 0
    left: 0
    max-width: 800px
    background: #222222
    z-index: 1000
    height: 100vh
    transition: left .3s ease-in
    overflow-y: scroll
    overscroll-behavior-y: none
    cursor: default

  &-list
    display: flex
    flex-direction: column
    padding: 16px
    &::-webkit-scrollbar
      background-color: #acacac
      width: 6px
  &-item
    width: 180px
    height: 48px
    &:not(:last-child)
      margin-bottom: 8px
</style>
