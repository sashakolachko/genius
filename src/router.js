import VueRouter from 'vue-router';
import SearchSongs from './components/pages/SearchSongs.vue';
import DetailedSong from './components/pages/song/DetailedSong.vue';
import DetailedArtist from './components/pages/artist/DetailedArtist.vue';
import StartPage from './components/pages/StartPage.vue';
import NotFound from './components/pages/NotFound.vue';


export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: StartPage,
      name: "StartPage"
    },
    {
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