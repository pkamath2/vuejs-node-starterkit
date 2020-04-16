<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/techladies-logo.png">
    <test-component msg="#bootcamp6"/>
    <test-component :msg="apiData"/>
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
