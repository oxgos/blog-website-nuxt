<template>
  <div id="app">
    <div class="app-wrapper">
      <Header></Header>
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import Header from '~/components/Header/Header.vue'
  
  export default {
    components: {
      Header
    }
  }
</script>

<style>
#app {
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-wrapper {
  width: 1000px;
  margin: 0 auto;
  background: url('~assets/img/index/bg.png') repeat-y;
  box-shadow: -2px -1px 5px #666;
}
</style>
