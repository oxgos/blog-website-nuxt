<template>
    <aside class="IndexAside">
        <router-link to="/">
            <Loading class="avatar" :flag="loadingFlag"></Loading>
            <img v-if="!loadingFlag" class="avatar" :src="'../' + userInfo.avatar"/>
        </router-link>
        <div class="topspaceinfo">
            <h1>秉承学到老，活到老</h1>
            <p>千万不要放纵自己，给自己找不必要的借口。对自己严格一点儿，时间长了，自律便成为一种习惯</p>
        </div>
        <Loading :flag="loadingFlag"></Loading>
        <ul v-if="!loadingFlag" class="about-me">
            <li>姓名：{{userInfo.username}}</li>
            <li>职业：{{userInfo.job}}</li>
            <li>籍贯：{{userInfo.address}}</li>
            <li>电话：{{userInfo.tel}}</li>
            <li>邮箱：{{userInfo.email}}</li>
        </ul>
        <!-- <div class="sharebutton">
        <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
        <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到新浪微博"></a>
        <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到腾讯微博"></a>
        <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到人人网"></a>
        <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到微信"></a>
        <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
        <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
        </div> -->
        <div class="tj_news">
        <h2>
            <p class="tj_t1">最新文章</p>
        </h2>
        <Loading :flag="loadingFlag"></Loading>
        <ul v-if="!loadingFlag">
            <li v-for="(item, index) in newest" :key="index">
                <router-link :to="`/articles/${item._id}`">{{item.title}}</router-link>
            </li>
        </ul>
        <h2>
            <p class="tj_t2">点击排行</p>
        </h2>
        <Loading :flag="loadingFlag"></Loading>
        <ul v-if="!loadingFlag">
            <li v-for="(item, index) in pv" :key="index">
                <router-link :to="`/articles/${item._id}`">{{item.title}}</router-link>
            </li>
        </ul>
        </div>
        <div class="links">
        <h2>
            <p>友情链接</p>
        </h2>
        <ul>
            <li>
            <router-link to="/">郭剑伟个人站点</router-link>
            </li>
            <li>
            <a href="https://github.com/oxgos">个人Github</a>
            </li>
            <li>
            <a href="http://blog.csdn.net/oxgos">其他博客</a>
            </li>
        </ul>
        </div>
        <div class="copyright">
        <div>
            <p>粤ICP备17114290号</p>
        </div>
        </div>
    </aside>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    import Loading from '~/components/Loading/Loading'
    export default {
        data () {
            return {
                userInfo: '',
                newest: [],
                pv: [],
                loadingFlag: false
            }
        },
        created () {
            this.loadingInit()
        },
        methods: {
            getInfo () {
                return axios.get('/feUser/author')
            },
            getNewest () {
                return axios.get('/feArticles/newest')
            },
            getPv () {
                return axios.get('/feArticles/pv')
            },
            loadingInit () {
                this.loadingFlag = true
                axios.all([this.getInfo(), this.getNewest(), this.getPv()]).then(axios.spread((user, newest, pv) => {
                    this.loadingFlag = false
                    this.userInfo = user.data.result.info
                    this.newest = newest.data.result
                    this.pv = pv.data.result
                }))
            }
        },
        components: {
            Loading
        }
    }
</script>

<style lang="less" scoped>
    @import './IndexAside.less';
</style>
