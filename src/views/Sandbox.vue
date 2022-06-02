<template>
  <div id="content" class="about center">
    <h1>Here i'm playing around with everything new</h1>
    <button @click="show">Show animation</button>
    <transition name="animate">
      <p v-if="isVisible">I'M ANIMATED!!!</p>
    </transition>
    <div style="display: flex; justify-content: space-between">
      <ul>
        <li style="--i:6">Item1</li>
        <li style="--i:5">Item2</li>
        <li style="--i:4">Item3</li>
        <li style="--i:3">Item4</li>
        <li style="--i:2">Item5</li>
        <li style="--i:1">Item6</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    show() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped lang="sass">
ul
  margin-top: 100px
  width: 200px
  transform: skewY(-15deg)
ul li
  z-index: var(--i)
  position: relative
  list-style: none
  letter-spacing: .2em
  height: 40px
  padding: 10px
  background: #5a5a5a
  color: #d4d4d4
  text-transform: uppercase
  transition: .3s
  margin-bottom: 8px
ul li:hover
  background: #4545ea
  color: white
  transform: translateX(50px)
ul li::before
  position: absolute
  content: ''
  background: #3c3c3c
  width: 40px
  height: 100%
  top: 0
  left: -40px
  transform: skewY(45deg)
  transform-origin: right
ul li:hover::before
  background: #2d2d9b
ul li::after
  position: absolute
  content: ''
  background: #4c4c4c
  width: 100%
  height: 40px
  top: -40px
  left: 0
  transform: skewX(45deg)
  transform-origin: bottom
ul li:hover::after
  background: #3434b7
.animate-enter-active, .animate-leave-active
  transition: .5s
.animate-enter, .animate-leave-to
  transform: translateX(100px)
  opacity: 0
.animate-enter-to, .animate-leave
  opacity: 1
</style>
