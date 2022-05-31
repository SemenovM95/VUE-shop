<template>
  <div>
    <BreadCrumbs/>
    <div>Product page</div>
    <div>{{ this.product.title }}</div>
    <div>Product Img Slider</div>
    <div>Product desc</div>
    <div>Carousel</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BreadCrumbs from 'components/BreadCrumbs.vue';

export default {
  components: { BreadCrumbs },
  data() {
    return {
      name: 'Product',
      productId: '',
    };
  },
  computed: {
    ...mapGetters(['product']),
  },
  methods: {
    ...mapActions(['getProductById']),
  },
  beforeMount() {
    this.productId = Number(this.$route.params.id);
    console.log(this.productId);
    this.getProductById(this.productId);
  //  TODO: таймаут неудачной загрузки
  },
};
</script>

<style>

</style>
