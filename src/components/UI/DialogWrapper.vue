<template>
  <div class="dialog-wrapper">
    <transition name="backdrop">
      <div v-if="show" class="dialog-backdrop" @click="onClose('closed')"></div>
    </transition>
    <transition name="dialog">
      <div v-if="show" class="dialog-content" @click.stop>
        <component :is="component" @close="onClose"></component>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      show: false,
    };
  },
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onClose(payload) {
      this.show = false;
      setTimeout(() => {
        this.closeDialog(payload);
      }, 250);
    },
    closeDialog(payload) {
      this.$emit('close', payload);
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 50);
  },
};
</script>

<style scoped lang="sass">
.dialog-enter-active, .dialog-leave-active
  transition: all .2s
.dialog-enter, .dialog-leave-to
  transform: translateY(-150px)
  opacity: 0
.backdrop-enter-active
  animation: .3s fade-blur forwards
.backdrop-leave-active
  animation: .3s fade-blur reverse
@keyframes fade-blur
  from
    background: rgba(0,0,0,0)
    backdrop-filter: blur(0)
  to
    background: rgba(0,0,0,.5)
    backdrop-filter: blur(8px)
.dialog
  &-wrapper
    z-index: 1000
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    min-height: 100vh
    display: flex
    align-items: center
    justify-content: center
  &-backdrop
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    min-height: 100vh
    background: rgba(0,0,0,.5)
    backdrop-filter: blur(8px)
  &-content
    z-index: 1001
    padding: 16px
    background: white
    border-radius: 8px
    min-height: 160px
    min-width: 320px
    box-shadow: 0 0 25px -15px black
</style>
