<template>
<!--  TODO: сделать типы для всех пропсов и дата -->
  <div id="app">
    <div class="side-menu__overlay" v-show="isOverlayVisible"></div>
      <Header></Header>
      <div class="content-wrapper">
        <router-view/>
        <Submit/>
      </div>
      <Footer></Footer>
    <MobileNavbar class="showMobileL"/>
  </div>
</template>

<script>
import Header from 'components/Header.vue';
import Footer from 'components/Footer.vue';
import MobileNavbar from 'components/MobileNavbar.vue';
import Submit from 'components/SubmitComp.vue';

export default {
  components: {
    Submit,
    Header,
    Footer,
    MobileNavbar,
  },
  data() {
    return {
      isOverlayVisible: false,
    };
  },
};

</script>

<style lang="sass">
@import "assets/styles/style"
.side-menu__overlay
  background: black
  opacity: .3
  position: fixed
  width: 100%
  height: 100%
  z-index: 20
.content-wrapper
  min-height: calc(100vh - 79px - 75px)
  display: flex
  flex-direction: column
  justify-content: space-between
#app
  font-family: Lato, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  display: flex
  flex-direction: column
  min-height: 100vh
</style>
