<template>
  <footer class="footer">
    <div class="footer-bottom center">
      <p class="copyright">© 2022 Brand All Rights Reserved.</p>
      <div class="social">
        <a href="https://facebook.com" class="social-link" target="_blank">
          <font-awesome-icon icon="fa-brands fa-facebook-square" class="icon social-ico"/>
        </a>
        <a href="https://instagram.com" class="social-link" target="_blank">
          <font-awesome-icon icon="fa-brands fa-instagram-square" class="icon social-ico"/>
        </a>
        <a href="https://pinterest.com" class="social-link" target="_blank">
          <font-awesome-icon icon="fa-brands fa-pinterest-square" class="icon social-ico"/>
        </a>
        <a href="https://twitter.com" class="social-link" target="_blank">
          <font-awesome-icon icon="fa-brands fa-twitter-square" class="icon social-ico"/>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="sass">
.footer
  background: #222224
  //margin-top: 50px
  flex: 0 0 auto
  &-bottom
    display: flex
    justify-content: space-between
    align-items: center
.submit
  display: flex
  flex-direction: column
  align-items: center
  position: relative
  // background-image: url(/assets/img/submit-bg-img.jpg)
  &-bg
    width: 100%
    max-height: 360px
    object-fit: cover
    object-position: bottom
  &-content
    display: flex
    justify-content: space-around
    position: absolute
    width: 100%
    align-items: center
    height: 100%
  &-left
    display: flex
    flex-direction: column
    align-items: center
    max-width: 360px
  &-right
    display: flex
    flex-direction: column
    align-items: center
    // margin-right: 125px
  &-text
    padding-top: 36px
    text-align: center
    font-weight: 400
    font-size: 20px
    line-height: 24px
  &-form
    padding-top: 36px
  &-heading
    &-text
      font-size: 18px
  &-input
    background: #e1e1e1
    padding: 17px
    border-radius: 50px 0 0 50px
    border: none
    width: 60%
  &-btn
    margin-left: -4px
    color: #ffffff
    padding: 17px
    border-radius: 0 50px 50px 0
    border: none
    background: $accentColor
    width: 100px
    cursor: pointer
    //transition: all ease-in-out .2s
    &:hover
      background-color: $accentColorTinted
.copyright
  font-size: 14px
  line-height: 19px
  color: #FBFBFB
  padding-top: 30px
  padding-bottom: 30px
.social
  width: 160px
  display: flex
  justify-content: space-between
  &-ico
    color: white
    height: 30px
    width: 30px
  &-link
    &:hover .icon path
      fill: $accentColor

@media (max-width: $maxWidthMobileL)
  .footer
    &-bottom
      flex-direction: column
      padding-bottom: calc(24px + 64px)
</style>
