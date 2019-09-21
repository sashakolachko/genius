import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    accessToken: '0uhiwXyomaqp-UxlV6IXqFPRL6ranUHVpcVITE0pW_wuHrOjTY8rQDkt9NgrPp62',
    searchedSongs: [],
  },
  mutations: {
    setsearchedSongs(state, songs) {
      state.searchedSongs = songs;
    },
  },
  actions: {

  }
})