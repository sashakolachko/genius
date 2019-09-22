<template lang="html">
  <v-card  flat class="text-xs-center ma-3" height="98%">
    <v-img :src="imagePath"></v-img>
    <v-card-title class="headline">
      {{ fullTitle }}
    </v-card-title>
    <v-card-text>
      <div class="body-1 black--text">
        {{ artistName }}
      </div>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn color="secondary" @click="detailedSong(songId)" >See more...</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Song',
  props: {
    songId: Number,
    fullTitle: String,
    imagePath: String,
    artistName: String,
  },
  methods: {
    detailedSong(id) {
      this.$router.push({
        name: "DetailedSong",
        params: {
          songId: id
        }
      });
    },
  }
}
</script>

<style lang="css" scoped>
</style>
