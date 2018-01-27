<template>
    <aside class="IndexAside">
        <div class="avatar">
            <router-link to="/"></router-link>
        </div>
        <div class="topspaceinfo">
        <h1>执子之手，与子偕老</h1>
        <p>于千万人之中，我遇见了我所遇见的人....</p>
        </div>
        <ul class="about-me">
        <li>网名：ochai</li>
        <li>职业：Web前端设计师、网页设计</li>
        <li>籍贯：广东省—广州市</li>
        <li>电话：*********</li>
        <li>邮箱：122486975@qq.com</li>
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
        <ul>
            <li><a href="#">犯错了怎么办？</a></li>
            <li><a href="#">两只蜗牛艰难又浪漫的一吻</a></li>
            <li><a href="#">春暖花开-走走停停-发现美</a></li>
            <li><a href="#">琰智国际-Nativ for Life官方网站</a></li>
            <li><a href="#">个人博客模板（2014草根寻梦</a></li>
            <li><a href="#">简单手工纸玫瑰</a></li>
            <li><a href="#">响应式个人博客模板（蓝色清新</a></li>
            <li><a href="#">蓝色政府（卫生计划生育局）网站</a></li>
        </ul>
        <h2>
            <p class="tj_t2">推荐文章</p>
        </h2>
        <ul>
            <li><a href="#">犯错了怎么办？</a></li>
            <li><a href="#">两只蜗牛艰难又浪漫的一吻</a></li>
            <li><a href="#">春暖花开-走走停停-发现美</a></li>
            <li><a href="#">琰智国际-Nativ for Life官方网站</a></li>
            <li><a href="#">个人博客模板（2014草根寻梦</a></li>
            <li><a href="#">简单手工纸玫瑰</a></li>
            <li><a href="#">响应式个人博客模板（蓝色清新</a></li>
            <li><a href="#">蓝色政府（卫生计划生育局）网站</a></li>
        </ul>
        </div>
        <div class="links">
        <h2>
            <p>友情链接</p>
        </h2>
        <ul>
            <li>
            <a href="#">郭剑伟个人站点</a>
            </li>
            <li>
            <a href="#">个人Github</a>
            </li>
            <li>
            <a href="#">其他博客</a>
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
    export default {
        data () {
            return {

            }
        },
        methods: {
            loadingInfo () {
                axios.get()
            }
        }
    }
</script>

<style lang="less" scoped>
    @import './IndexAside.less';
</style>
