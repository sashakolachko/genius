<template lang="html">
  <v-layout row justify-center fill-height>
    <v-flex  text-center class="song-title">
      <v-layout row >
        <v-flex xs12 sm6>
          <v-img :src="imagePath" height="100%"></v-img>
        </v-flex>
        <v-flex xs12 sm6 class="pa-5">
          <h1 class="primary--text display-1 mb-2 mt-2">{{ fullTitle }}</h1>
          <p class="secondary--text">Released: {{ releaseDate }}</p>
          <p v-if="album" class="secondary--text">Album: {{ album.name }}</p>
          <v-img :src="primaryArtist.image_url" class="artist-img"></v-img>
          <h2>{{ primaryArtist.name }}</h2>
          <v-btn class="ma-2" outlined color="secondary" @click="artistDetailed(primaryArtist.id)">Read more</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>

</template>

<script>
import axios from 'axios';
export default {
  name: "DetailedSong",
  data: () => ({
    id: null,
    fullTitle: '',
    imagePath: '',
    primaryArtist: '',
    releaseDate: '',
    album: ''
  }),
  methods: {
    artistDetailed(id) {
      this.$router.push({
        name: "DetailedArtist",
        params: {
          artistId: id
        }
      });
    }
  },
  mounted() {
    axios.get(`https://api.genius.com/songs/${this.$route.params.songId}?&access_token=${this.$store.state.accessToken}`)
      .then(response => {
        this.id = response.data.response.song.id;
        this.fullTitle = response.data.response.song.full_title;
        this.imagePath = response.data.response.song.header_image_url;
        this.primaryArtist = response.data.response.song.primary_artist;
        this.releaseDate = response.data.response.song.release_date;
        this.album = response.data.response.song.album;
      });
  }
}
</script>

<style lang="css" scoped>
  .song-title{
    background-color: black;
    color:white;
  }
  .artist-img{
    width:50%;
    height:50%;
    margin:auto;
    margin-top:10px;
  }

</style>
