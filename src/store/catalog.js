import { getGoodsListFromDB } from 'mixins/db';

export default {
  state: {
    isCatalogLoaded: false,
    goods: [],
    userSearch: '',
    currPage: 1,
    pageSize: 6,
  },
  getters: {
    goods(state) {
      return state.goods;
    },
    getPage(state) {
      const startIndex = (state.currPage - 1) * state.pageSize;
      const endIndex = startIndex + state.pageSize;
      return state.goods.slice(startIndex, endIndex);
    },
    getPagesAmount(state) {
      return Math.ceil(state.goods.length / state.pageSize);
    },
    getCurrPage(state) {
      return state.currPage;
    },
    isCatalogLoaded(state) {
      return state.isCatalogLoaded;
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
    SET_PAGE(state, value) {
      state.currPage = value;
    },
    SET_CATALOG_LOAD_STATUS(state, status) {
      state.isCatalogLoaded = status;
    },
  },
  actions: {
    async getGoodsList({ commit }) {
      await getGoodsListFromDB()
        .then((res) => {
          commit('SET_GOODS_LIST', res);
          commit('SET_CATALOG_LOAD_STATUS', true);
        })
        .catch((err) => console.error(err));
    },
    // async getGoodsList({ commit }) {
    //   await getGoodsListFromAPI()
    //     .then((res) => {
    //       commit('SET_GOODS_LIST', res);
    //       commit('SET_CATALOG_LOAD_STATUS', true);
    //     })
    //     .catch((err) => console.error(err));
    // },
    searchGoods({ commit, state }) {
      const regexp = new RegExp(state.userSearch, 'i');
      const filtered = state.goods.filter((el) => regexp.test(el.title));
      commit('SET_GOODS_LIST', filtered);
    },
    setCurrPage({ commit }, pageNumber) {
      if (pageNumber < 1 || pageNumber > this.getters.getPagesAmount) return;
      commit('SET_PAGE', pageNumber);
    },
  },
};
