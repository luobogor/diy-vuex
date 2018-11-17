<template>
  <div id="app">
    <img src="./assets/logo.png">
    <VuexDemo/>
  </div>
</template>

<script>
import VuexDemo from './components/VuexDemo'

export default {
  name: 'App',
  components: {
    VuexDemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
