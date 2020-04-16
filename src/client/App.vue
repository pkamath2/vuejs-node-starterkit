<template>
  <div id="app">
    <img alt="Techladies logo" src="./assets/techladies-logo.png">
    <br/><br/>
    <test-component msg="#bootcamp6"/>
    <test-component :msg="apiData"/>
    <div class="mt-3">
  </div>
  </div>
</template>

<script>

const axios = require('axios');

export default {
  data(){
    return {
      name: 'App',
      apiData: ''
    }
  },

  created(){
    axios
      .get('/test-api')
      .then(res => (this.apiData = res.data))
  }
}
</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
