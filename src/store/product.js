import { getProductFromDB } from 'mixins/db';

export default {
  state: {
    product: {},
    isProductLoaded: false,
  },
  getters: {
    product(state) {
      return state.product;
    },
    isProductLoaded(state) {
      return state.isProductLoaded;
    },
  },
  mutations: {
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    SET_PRODUCT_LOAD_STATUS(state, status) {
      state.isProductLoaded = status;
    },
  },
  actions: {
    async getProductById({ commit }, id) {
      await getProductFromDB(id)
        .then((res) => {
          commit('SET_PRODUCT', res);
          commit('SET_PRODUCT_LOAD_STATUS', true);
        })
        .catch((err) => console.error(err));
    },
  },
};
