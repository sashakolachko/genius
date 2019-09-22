<template lang="html">
  <div class="start-container" fill-height>
    <div class="title-container">
      <p class="title-text">Get it started</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'StartPage',
  data: () => ({
    url: 'http://localhost:8080'
  }),
  mounted() {
    // window.open(`https://api.genius.com/oauth/authorize?client_id=ws9RPxGWJWR1p6omWfC8J-OejzQVtsyvraLONNsLkL1ejJzy7oj6ROAEExW8A8Xq&redirect_uri=http://localhost:8080&scope=me&state=state&response_type=code`);
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');
.start-container{
  width:100%;
  height:100%;
  background-color: white;
  background-image: url('../../assets/1.jpg');
  background-position: center;
  background-size: cover;
  display:flex;
  justify-content: center;
  align-items: center;
}
.title-text{
  font-family: 'Monoton', cursive;
  font-size: 60px;
  color:#fc6d05;
}
</style>
