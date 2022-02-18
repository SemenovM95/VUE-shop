import { mapActions, mapGetters } from 'vuex';

const cartCompMixin = {
  computed: { ...mapGetters(['cartItems', 'getItemsQuantity', 'getItemsAmount']) },
  methods: {
    ...mapActions(['getUserCart', 'deleteProduct', 'increaseQuantity', 'decreaseQuantity', 'cartSwitch', 'clearCart']),
  },
  mounted() {
    this.getUserCart();
  },
};

export default cartCompMixin;
