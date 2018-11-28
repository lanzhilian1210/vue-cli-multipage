<template>
  <div id="app">
    <div>详情内容</div>
    <detail></detail>
    <hr />
    <!-- <p>name: {{url.name}}</p>
     <p>id: {{url.id}}</p>
     <p>color: {{url.color}}</p> -->
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import detail from 'components/detail/detail'
  import urlArgs from '../../common/js/config'
  export default {
    name: 'app',
    components: {
      detail
    },
    data() {
      return {
        url:{}
      }
    },
    mounted() {
      urlArgs();
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
