<template>
   <div class="header">
      <h1>人生的旅途</h1>
      <h2>面向阳光吧，不问春暖花开，只求快乐面对。因为，透过洒满阳光的玻璃窗，蓦然回首，你何尝不是别人眼中的风景？</h2>
      <nav class="nav">
          <ul>
              <li :class="{'active': current === 'Index'}" @click="navChange('Index', $event)"><router-link to="/">首页</router-link></li>
              <li :class="{'active': current === index}" @click="navChange(index, $event)" v-for="(item, index) in navData" :key="index"><router-link :to="item.path">{{item.name}}</router-link></li>
          </ul>
          <div class="logo">
            <router-link to="/"></router-link>
          </div>
      </nav>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        navData: [],
        current: 'Index'
      }
    },
    created () {
      this.loadingNav()
    },
    methods: {
      loadingNav () {
        axios.get('/feCategories').then(res => {
          this.navData = res.data.result
        })
      },
      navChange (val, e) {
        if (e.target.nodeName === 'A') {
          this.current = val
        }
      }
    }
  }
</script>


<style lang="less" scoped>
  @import './header.less';
</style>
