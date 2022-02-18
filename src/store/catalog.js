export default {
  state: {
    goods: [],
    userSearch: '',
  },
  getters: {
    goods(state) {
      return state.goods;
    },
  },
  mutations: {
    SET_GOODS_LIST(state, goods) {
      state.goods = goods;
    },
    SET_SEARCH(state, value) {
      if (value === '') {
        this.dispatch('getGoodsList');
      } else {
        state.userSearch = value;
      }
    },
  },
  actions: {
    async getGoodsList({ commit }) {
      const result = [
        {
          id: 1,
          title: 'BLUE CASUAL MEN JACKET',
          desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '52.00',
          color: 'Blue',
          size: 'XL',
        },
        {
          id: 2,
          title: 'BLACK WOMEN BLAZER',
          desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '52.00',
          color: 'Black',
          size: 'M',
        },
        {
          id: 3,
          title: 'BLACK & BLUE MEN HOODIE',
          desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '52.00',
          color: 'Black/Blue',
          size: 'M',
        },
        {
          id: 4,
          title: 'YELLOW MEN TROUSERS',
          desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '52.00',
          color: 'Yellow',
          size: 'L',
        },
        {
          id: 5,
          title: 'LIGHT BLUE WOMEN BLAZER',
          desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '52.00',
          color: 'Blue',
          size: 'M',
        },
        {
          id: 6,
          title: 'SWAMP GREEN WOMEN BLOUSE',
          desc: 'Known for her sculptural takes on traditional tailoring,\n Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '52.00',
          color: 'Swamp green',
          size: 'S',
        },
      ];
      commit('SET_GOODS_LIST', result);
    },
    searchGoods({ commit, state }) {
      const regexp = new RegExp(state.userSearch, 'i');
      const filtered = state.goods.filter((el) => regexp.test(el.title));
      commit('SET_GOODS_LIST', filtered);
    },
  },
};
