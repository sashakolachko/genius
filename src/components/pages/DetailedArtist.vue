<template lang="html">
  <v-layout row justify-center fill-height class="container">
    <v-flex>
      <v-layout row justify-center class="">
        <v-flex xs4 >
          <v-img :src="imagePath" height="300" width="300"></v-img>
        </v-flex>
        <v-flex xs4  class="text-center">
          <h2>{{name}}</h2>
          <p>Full Name: {{ alternativeName }}</p>
          <v-btn outlined color="secondary" @click="showList()">
            <span v-if="!show">Show more songs</span>
            <span v-else>Hide</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 ref="listBox" class="text-center" v-if="show">
      <v-list class="table">
           <v-list-item v-for="song in songList" :key="song.id">
             <v-list-item-content>
               <v-list-item-title v-text="song.full_title"></v-list-item-title>
             </v-list-item-content>
           </v-list-item>
      </v-list>
    </v-flex>
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
    show: false
  }),
  methods: {
    showList() {
      if (!this.songList) {
        axios.get(`https://api.genius.com/artists/${this.id}/songs?&access_token=${this.$store.state.accessToken}`)
          .then(response => this.songList = (response.data.response.songs));
      }
      this.show = !this.show;
      console.log(this.songList);
    }
  },
  mounted() {
    axios.get(`https://api.genius.com/artists/${this.$route.params.artistId}?&access_token=${this.$store.state.accessToken}`)
      .then(response => {
        console.log(response.data.response.artist);
        this.id = response.data.response.artist.id;
        this.name = response.data.response.artist.name;
        this.alternativeName = response.data.response.artist.alternate_names[0];
        this.imagePath = response.data.response.artist.image_url;
        this.instagramName = response.data.response.artist.instagram_name;
      });


  }
}
</script>

<style lang="css" scoped>
.container{
  background-color: black;
  color:white;
  margin:auto;
}
.table{
  width:60%;
  margin:auto;

}
</style>
