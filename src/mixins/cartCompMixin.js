import { mapActions, mapGetters } from 'vuex';
import dialog from 'components/Modals/dialog';
import DeleteDialog from 'components/Modals/DeleteDialog.vue';

const cartCompMixin = {
  computed: {
    ...mapGetters([
      'cartItems',
      'getItemsQuantity',
      'getItemsAmount',
    ]),
  },
  methods: {
    ...mapActions([
      'getUserCart',
      'deleteProduct',
      'increaseQuantity',
      'decreaseQuantity',
      'clearCart',
      'syncWithLS',
    ]),
    onDelete(item) {
      dialog(DeleteDialog)
        .then((result) => (result === 'confirm' ? this.deleteProduct(item) : null));
    },
  },
};

export default cartCompMixin;
