<template>
  <div id="content" class="home">
    <section class="promo">
      <div class="promo-left" v-if="screenWidth > 425">
        <img class="promo-img" :src="require(`@/assets/img/home/promo-img.png`)" alt="promo-img"/>
      </div>
      <div class="promo-right">
        <div class="promo-content">
          <h1 class="promo-heading">THE BRAND</h1>
          <p class="promo-text">
            OF LUXURIOUS <span class="accent">FASHION</span>
          </p>
        </div>
      </div>
    </section>
    <section class="browse center">
        <a href="#" class="browse-item">
          <img
            src="@/assets/img/home/catalog-women.png"
            alt="catalog-women"
            class="browse-img"
          />
          <div class="browse-content">
            <p class="browse-text">30% OFF</p>
            <h3 class="browse-heading accent">FOR WOMEN</h3>
          </div>
        </a>
      <a href="#" class="browse-item">
          <img
            src="@/assets/img/home/catalog-men.png"
            alt="catalog-men"
            class="browse-img"
          />
          <div class="browse-content">
            <p class="browse-text">HOT DEAL</p>
            <h3 class="browse-heading accent">FOR MEN</h3>
          </div>
        </a>
      <a href="#" class="browse-item">
          <img
            src="@/assets/img/home/catalog-kids.png"
            alt="catalog-kids"
            class="browse-img"
          />
          <div class="browse-content">
            <p class="browse-text">NEW ARRIVALS</p>
            <h3 class="browse-heading accent">FOR KIDS</h3>
          </div>
        </a>
      <a href="#" class="browse-item_big">
          <img
            src="@/assets/img/home/catalog-accessories.png"
            alt="catalog-accessories"
            class="browse-img"
          />
          <div class="browse-content">
            <p class="browse-text">LUXURIOUS & TRENDY</p>
            <h3 class="browse-heading accent">ACESSORIES</h3>
          </div>
        </a>
    </section>
    <section class="featured center">
      <h3>Featured Items</h3>
      <p>
        Shop for items based on what we featured in this week
      </p>
      <div class="catalog-content">
        <ProductList :list="getPage"/>
      </div>
      <router-link to="/catalog" class="featured-button">
        <p>Browse All Products</p>
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductList from 'components/ProductList.vue';

export default {
  name: 'Home',
  components: { ProductList },
  data() {
    return {
      screenWidth: undefined,
    };
  },
  computed: {
    ...mapGetters(['getPage']),
  },
  methods: {
    ...mapActions(['getGoodsList']),
    onResize() {
      this.screenWidth = window.innerWidth;
    },
  },
  created() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  mounted() {
    this.getGoodsList();
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>
<style scoped lang="sass">
.promo
  padding-left: calc(50% - 800px)
  padding-right: calc(50% - 800px)
  background: rgba(113, 103, 105, 0.08)
  display: flex
  &-left
    width: 50%
  &-img
    width: 100%
  &-right
    width: 50%
    background: #f1e4e6
    display: flex
    align-items: center
    padding-left: 64px
  &-heading
    font-weight: 900
    font-size: 48px
    line-height: 57.6px
  &-text
    font-weight: 700
    font-size: 32px
    line-height: 38.4px
  &-content
    padding-left: 24px
    border-left: 13px solid $accentColor
.browse
  margin: 64px 0
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  &-item
    position: relative
    width: calc((100% - 30px*2)/3)
    max-height: 260px
    display: flex
    justify-content: center
    align-items: center
    &_big
      position: relative
      width: 100%
      max-height: 180px
      margin-top: 24px
      display: flex
      justify-content: center
      align-items: center
  &-content
    position: absolute
    font-weight: 400
  &-content p
    color: white
  &-img
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: -1

.featured
  display: flex
  flex-direction: column
  align-items: center
  &>h3
    font-size: 30px
  &>p
    font-size: 20px
    color: #9f9f9f
    margin-bottom: 36px
  &-button
    border: 1px solid $accentColor
    padding: 10px
    width: 200px
    &:hover
      background: $accentColor
      color: white

@media (max-width: $maxWidthTablet)
  .promo
    &-right
      padding-left: 0
      display: flex
      justify-content: center
    &-content
      width: calc(100% - 24px*2)
@media (max-width: $maxWidthMobileL)
  .promo
    flex-direction: column
    height: 100vw
    align-items: center
    &-right
      width: 100%
      height: 100%
      padding-left: 0
      display: flex
      justify-content: center
    &-heading
      font-weight: 900
      font-size: 36px
      line-height: 42px
    &-text
      font-weight: 700
      font-size: 26px
      line-height: 30px
  .browse
    flex-direction: column
    justify-content: space-between
    &-item
      width: 100%
      max-height: unset
      &:not(:last-child)
        margin-bottom: 24px
      &_big
        height: 70vw
        max-height: unset
        margin: 0
        &>img
          height: 100%
          max-height: unset
          object-fit: cover
    &-content
      font-size: 22px
    &-img
      height: initial
@media (max-width: $maxWidthMobileS)
  .browse
    margin: 24px 0
    &-item
      &:not(:last-child)
        margin-bottom: 16px

</style>
