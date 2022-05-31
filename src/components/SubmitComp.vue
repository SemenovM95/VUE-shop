<template>
  <section class="submit">
    <img src="@/assets/img/submit-bg-img.jpg" alt="background" class="submit-bg">
    <div class="submit-content center">
      <div class="submit-left">
        <img src="@/assets/img/submit-photo.png" alt="photo">
        <p class="submit-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
          <span class="italic">a pulvinar purus condimentum</span> “
        </p>
      </div>
      <div class="submit-right">
        <h2 class="submit-heading">SUBSCRIBE</h2>
        <p class="submit-heading_text">FOR OUR NEWSLETTER AND PROMOTION</p>
        <form class="submit-form" action="#">
          <input class="submit-input" type="email" placeholder="Enter Your Email">
          <button class="submit-btn">Subscribe</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Submit',
};
</script>

<style scoped lang="sass">
.submit
  display: flex
  flex-direction: column
  align-items: center
  position: relative
  padding-top: 30px
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
@media (max-width: $maxWidthTablet)
  @media (max-width: $maxWidthMobileL)
  .submit
    &-bg
      min-height: $subscribeBackgroundHeightTablet
@media (max-width: $maxWidthMobileL)
  .submit
    &-content
      flex-direction: column
    &-bg
      min-height: $subscribeBackgroundHeightS
</style>
