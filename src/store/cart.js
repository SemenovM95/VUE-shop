export default {
  state: {
    cartItems: [],
    isCartVisible: false,
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
    isCartVisible(state) {
      return state.isCartVisible;
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
    SWITCH_CART_VISIBILITY(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
  actions: {
    getUserCart({ commit }) {
      const result = [
        {
          quantity: 4,
          id: 2,
          title: 'BLACK WOMEN BLAZER',
          desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '52.00',
          color: 'Black',
          size: 'M',
        },
        {
          quantity: 2,
          id: 1,
          title: 'BLUE CASUAL MEN JACKET',
          desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '52.00',
          color: 'Blue',
          size: 'XL',
        },
        {
          quantity: 1,
          id: 3,
          title: 'BLACK & BLUE MEN HOODIE',
          desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '52.00',
          color: 'Black/Blue',
          size: 'M',
        },
      ];
      commit('SET_CART_STATE', result);
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
    cartSwitch({ commit }) {
      commit('SWITCH_CART_VISIBILITY');
    },
    clearCart({ commit }) {
      commit('SET_CART_STATE', []);
    },
  },
};
