import { getFromLS, getUserCartFromDB, saveToLS } from 'mixins/db';

export default {
  state: {
    cartItems: [],
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
    getItemsAmount(state) {
      const items = state.cartItems;
      return items.reduce((total, item) => total + (+item.price * +item.quantity), 0);
    },
    getItemsQuantity(state) {
      const items = state.cartItems;
      return items.reduce((total, item) => total + +item.quantity, 0);
    },
  },
  mutations: {
    SET_CART_STATE(state, cartData) {
      state.cartItems = cartData;
    },
    ADD_TO_CART(state, product) {
      state.cartItems.push(product);
    },
    CHANGE_CART_STATE(state, params) {
      const prod = state.cartItems.find((el) => el.id === params.product.id);
      switch (params.action) {
        case 'increase': {
          prod.quantity += 1;
          break;
        }
        case 'decrease': {
          prod.quantity -= 1;
          break;
        }
        default: break;
      }
    },
    DELETE_PRODUCT(state, product) {
      state.cartItems.splice(state.cartItems.indexOf(product), 1);
    },
  },
  actions: {
    async getUserCart({ commit }) {
      const result = await getFromLS('userCart');
      if (result instanceof Error) {
        await getUserCartFromDB()
          .then((res) => {
            commit('SET_CART_STATE', res);
            console.warn('get from fetch');
            this.dispatch('syncWithLS');
          })
          .catch((err) => console.error(err));
      } else {
        console.warn('get from localStorage');
        commit('SET_CART_STATE', result);
      }
    },
    addProduct({ commit, state }, product) {
      const find = state.cartItems.find((el) => el.id === product.id);
      if (find) {
        this.dispatch('increaseQuantity', find);
      } else {
        const prod = { quantity: 1, ...product };
        commit('ADD_TO_CART', prod);
      }
    },
    increaseQuantity({ commit }, product) {
      commit('CHANGE_CART_STATE', {
        product,
        action: 'increase',
      });
    },
    decreaseQuantity({ commit }, product) {
      if (product.quantity === 1) {
        this.dispatch('deleteProduct', product);
      } else {
        commit('CHANGE_CART_STATE', {
          product,
          action: 'decrease',
        });
      }
    },
    deleteProduct({ commit }, product) {
      commit('DELETE_PRODUCT', product);
    },
    clearCart({ commit }) {
      commit('SET_CART_STATE', []);
    },
    // Находится здесь, т.к. используется и внутри стора и в копонентах
    // позже можно будет вынести отсюда
    syncWithLS({ state }) {
      saveToLS('userCart', state.cartItems);
    },
  },
};
