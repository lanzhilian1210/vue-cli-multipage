<template>
  <div id="app">
   <h1>news html</h1>
    <div>new</div>
    <button @click="handleTab">调转</button>
  </div>
</template>

<script>
  import 'common/css/reset.css';

  export default {
    name: 'app',
    methods: {
      handleTab() {
        location.href = './detail.html'
      }
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
