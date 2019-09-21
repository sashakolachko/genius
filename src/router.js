import VueRouter from 'vue-router';
import SearchSongs from './components/pages/SearchSongs.vue';
import DetailedSong from './components/pages/DetailedSong.vue';
import DetailedArtist from './components/pages/DetailedArtist.vue';
import NotFound from './components/pages/NotFound.vue';


export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/songs',
      component: SearchSongs,
      name: "SearchSongs"
    },
    {
      path: '/songs/:songId?',
      name: "DetailedSong",
      component: DetailedSong
    },
    {
      path: '/artist/:artistId?',
      name: "DetailedArtist",
      component: DetailedArtist
    },
    {
      path: '*',
      component: NotFound,
      props: {
        msg: "Cannot find the page you requested"
      }
    }
  ]
});