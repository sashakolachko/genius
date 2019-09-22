<template lang="html">
  <v-layout row justify-center class="container-box">
    <v-tabs vertical color="secondary">
      <v-tab>
        <v-icon left >mdi-account</v-icon>{{name}}
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>Songs
      </v-tab>
      <v-tab-item class="container-item" >
        <v-layout row wrap justify-center align-center class="pt-5">
          <v-flex xs10 md4>
            <v-img :src="imagePath" class="artist-image"></v-img>
          </v-flex>
          <v-flex xs10 md4  class="text-center">
            <h2>{{name}}</h2>
            <p v-if="alternativeName">Full Name: {{ alternativeName }}</p>
          </v-flex>
        </v-layout>
      </v-tab-item>

      <v-tab-item class="container-item" >
        <v-layout row wrap >
          <v-flex xs8 md12 >
            <v-radio-group v-model="radios" row  dark>
              <v-radio color="secondary"  default class="tabs-items" label="By title" value="title"></v-radio>
              <v-radio color="secondary" class="tabs-items" label="By popularity" value="popularity"></v-radio>
              <div >
                <v-btn  v-if="page > 1" small class="ma-3" @click="prevPage()">
                  <v-icon dark>arrow_back_ios</v-icon>
                </v-btn>
                <v-btn v-if="nextpage" small class="ma-3" @click="nextPage()">
                  <v-icon dark>arrow_forward_ios</v-icon>
                </v-btn>
              </div>
            </v-radio-group>
          </v-flex>
          <v-flex xs8 md12>
            <v-list class="list-container">
                 <v-list-item v-for="song in songList" :key="song.id">
                   <v-list-item-content>
                     <v-list-item-title class="white--text" v-text="song.full_title"></v-list-item-title>
                   </v-list-item-content>
                 </v-list-item>
            </v-list>
          </v-flex>
          </v-layout>
      </v-tab-item>
    </v-tabs>
  </v-layout>
</template>

<script>
import axios from 'axios';
export default {
  name: 'DetailedArtist',
  data: () => ({
    id: null,
    name: '',
    alternativeName: '',
    imagePath: '',
    instagramName: '',
    songList: null,
    tabs: null,
    radios: 'title',
    page: 1,
    nextpage: null
  }),
  methods: {
    getSongs() {
      if (!this.songList) {
        axios.get(`https://api.genius.com/artists/${this.id}/songs?&access_token=${this.$store.state.accessToken}`)
          .then(response => this.songList = (response.data.response.songs));
      }
    },
    prevPage() {
      this.page -= 1;
      this.getSongsList();
    },
    nextPage() {
      this.page += 1;
      this.getSongsList();
    },
    getSongsList() {
      axios.get(`https://api.genius.com/artists/${this.$route.params.artistId}/songs?sort=${this.radios}&per_page=9&page=${this.page}&access_token=${this.$store.state.accessToken}`)
        .then(response => {
          this.songList = (response.data.response.songs);
          this.nextpage = response.data.response.next_page;
        });
    }
  },
  watch: {
    radios() {
      this.page = 1;
      this.getSongsList();
    }
  },
  mounted() {
    axios.get(`https://api.genius.com/artists/${this.$route.params.artistId}?&access_token=${this.$store.state.accessToken}`)
      .then(response => {
        this.id = response.data.response.artist.id;
        this.name = response.data.response.artist.name;
        this.alternativeName = response.data.response.artist.alternate_names[0];
        this.imagePath = response.data.response.artist.image_url;
        this.instagramName = response.data.response.artist.instagram_name;
      });
    this.getSongsList();
  }
}
</script>

<style lang="css" scoped>
  .container-box{
    background-color: black;
    color:white;
  }

  .container-item{
    padding-left: 30px;
    background-color: black;
    height:100vh;
  }
  .artist-image{
    border-radius: 50%;
    width:450px;
    height:400px;
  }
  .tabs-items{
    color:white;
  }
  .list-container{
    background-color: black;
  }

</style>
