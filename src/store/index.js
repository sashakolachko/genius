import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    accessToken: '0uhiwXyomaqp-UxlV6IXqFPRL6ranUHVpcVITE0pW_wuHrOjTY8rQDkt9NgrPp62',
    clientId: 'ws9RPxGWJWR1p6omWfC8J-OejzQVtsyvraLONNsLkL1ejJzy7oj6ROAEExW8A8Xq',
    clientSecret: 'rkJJ4aJ3Tu0fy0WpzNsYhr6K9DiAduMQ7koGd8hV14ggsdjJgYXda_hD7wqfP7YByIwc1HSqyKuEQWhCtUYmGA',
    searchedSongs: [],
  },
  mutations: {
    setsearchedSongs(state, songs) {
      state.searchedSongs = songs;
    },
  }
})