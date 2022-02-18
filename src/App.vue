<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from 'components/Header.vue';
import Footer from 'components/Footer.vue';

export default {
  components: { Header, Footer },
};

</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700;900&display=swap")
@import 'assets/styles/_vars.sass'
*
  margin: 0
  padding: 0
  box-sizing: border-box
  outline: none
a
  text-decoration: none
  &:visited
    color: $accentColor
body
  font-family: 'Lato', sans-serif
summary::-webkit-details-marker
  display: none
button,
button:hover,
button:active,
button:focus
  outline: none
.center
  padding-left: calc(50% - 570px)
  padding-right: calc(50% - 570px)
#content
  flex: 1 0 auto
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
