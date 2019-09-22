<template lang="html">
  <v-form ref="form">
  <v-app-bar height="84" app class="align-center">

    <v-layout  row justify-center align-center>
        <v-flex xs8 sm6 md7 lg6>
          <v-text-field
            :rules="inputRules"
            v-model="searchWord"
            color="secondary"
            placeholder="Search something"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs1 sm1 md1 lg1 class="ml-2" text-center>
          <v-btn fab small icon  :color="buttonColor" @click="search()">
            <v-icon>search</v-icon>
          </v-btn>
        </v-flex>
    </v-layout>
  </v-app-bar>
</v-form>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Header',
  data: () => ({
    searchWord: '',
    inputRules: [
      v => v.length >= 3 || 'Minimum length is 3 characters'
    ],
  }),
  methods: {
    search() {
      if (this.$refs.form.validate()) {
        axios.get(`https://api.genius.com/search?q=${this.searchWord}&access_token=${this.$store.state.accessToken}`)
          .then(response => {
            this.$store.commit('setsearchedSongs', response.data.response.hits);
          });
        if (this.$router.currentRoute.fullPath != '/songs') {
          this.$router.push('/songs');
        }
      }
    },
  },
  computed: {
    buttonColor() {
      if (this.searchWord.length >= 3) {
        return 'secondary';
      }
      return 'grey';
    }
  }
}
</script>

<style lang="css" scoped>
</style>
