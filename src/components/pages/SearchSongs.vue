<template lang="html">
<v-container grid-list-xs,sm,md,lg,xl >
  <v-layout row  justify-space-around >
  <v-flex xs12 sm6 md4 lg3 v-for="song in songs" :key="song.result.id">
    <Song
      :songId="song.result.id"
      :fullTitle="song.result.full_title"
      :imagePath="song.result.header_image_thumbnail_url"
      :artistName="song.result.primary_artist.name"
    />
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
import Song from './Song.vue';
export default {
  name: 'SearchSongs',
  components: {
    Song
  },
  data: () => ({

  }),
  computed: {
    songs() {
      return this.$store.state.searchedSongs;
    }
  },
  mounted() {}
}
</script>

<style lang="css" scoped>
</style>
