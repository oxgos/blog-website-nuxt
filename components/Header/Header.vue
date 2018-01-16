<template>
   <div class="header">
      <h1>如影随形</h1>
      <h2>影子是一个会撒谎的精灵，它在虚空中流浪和等待被发现之间;在存在与不存在之间....</h2>
      <nav class="nav">
          <ul>
              <li :class="{'active': current === 'Index'}" @click="current = 'Index'"><router-link to="/">首页</router-link></li>
              <li :class="{'active': current === index}" @click="current = index" v-for="(item, index) in navData" :key="index"><router-link :to="item.path">{{item.name}}</router-link></li>
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
        axios.get('/categories').then(res => {
          this.navData = res.data.result
        })
      }
    }
  }
</script>


<style lang="less" scoped>
  @import './header.less';
</style>
