<template>
  <div>
    <section v-if="isProductLoaded">
      <div>Product page</div>
      <div>{{ this.product.title }}</div>
      <div>Product Img Slider</div>
      <div>Product desc</div>
      <div>Carousel</div>
    </section>
    <div v-else>
      <pre>Loading <font-awesome-icon icon="fa-solid fa-spinner" spin/></pre>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      name: 'ProductComp',
      productId: '',
    };
  },
  computed: {
    ...mapGetters(['product', 'isProductLoaded']),
  },
  methods: {
    ...mapActions(['getProductById']),
  },
  beforeMount() {
    this.productId = Number(this.$route.params.id);
    this.getProductById(this.productId);
  },
  beforeDestroy() {
    this.$store.commit('SET_PRODUCT_LOAD_STATUS', false);
  },
};
</script>

<style scoped lang="sass">
.product-wrapper
  justify-self: center
  align-self: center
</style>
