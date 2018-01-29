<template>
  <div class="acticle">
      <div class="main">
          <div class="banner"></div>
          <div class="bloglist">
            <h2>
              <p><span>文章</span>推荐</p>
            </h2>
            <Loading :flag="loadingFlag"></Loading>
            <div v-if="!loadingFlag" class="blogs" v-for="(item, index) in articles" :key="index">
              <h3>
                <router-link :to="`/articles/${item._id}`">{{item.title}}</router-link>
              </h3>
              <figure>
                <img :src="item.poster" alt="">
              </figure>
              <div class="content">
                <p>{{item.introduce}}</p>
                <router-link :to="`/articles/${item._id}`" class="readmore">阅读全文>></router-link>
              </div>
              <p class="autor">
                <span>作者：郭剑伟</span>
                <span>分类：【<a href="/">{{item.category.name}}</a>】</span>
                <span>浏览（<a href="/">{{ item.pv }}</a>）</span>
                <span>评论（<a href="/">30</a>）</span>
              </p>
              <div class="dateview">{{item.meta.createdAt | formatDate}}</div>
            </div>
          </div>
          <Page v-if="page > 1 && !loadingFlag" :total="total" :page="page" :current="current" @changeCurrent="changeCurrent"></Page>
      </div>
      <IndexAside></IndexAside>
  </div>
</template>

<script>
  import axios from 'axios'
  import Page from '~/components/Page/Page'
  import IndexAside from '~/components/IndexAside/IndexAside'
  import Loading from '~/components/Loading/Loading'
  export default {
    /* async asyncData ({ params }) {
      let { data } = await axios.get('/feArticles')
      console.log(data)
      return {
        articles: data
      }
    }, */
    data () {
      return {
        articles: [],
        // 文章总数
        total: 0,
        // 总页数
        page: 0,
        // 现第几页
        current: 0,
        loadingFlag: false
      }
    },
    created () {
      this.loadingArticles()
    },
    methods: {
      loadingArticles () {
        this.loadingFlag = true
        axios.get('/feArticles', {
          params: {
            index: this.current
          }
        }).then(res => {
          this.loadingFlag = false
          if (res.data.status === '1') {
            this.articles = res.data.result.articles
            this.total = res.data.result.total
            this.page = res.data.result.page
          }
        })
      },
      changeCurrent (index) {
        this.current = index
        this.loadingArticles()
      }
    },
    filters: {
      formatDate (params) {
        let date = params.split('T')[0]
        return date
      }
    },
    components: {
      Page,
      IndexAside,
      Loading
    }
  }
</script>

<style lang="less" scoped>
  @import '~assets/less/acticle.less';
</style>
