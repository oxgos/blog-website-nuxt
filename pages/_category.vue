<template>
    <div class="category">
        <NavBread>
            <a slot="link" href="javascript: void(0);">{{ name }}</a>
        </NavBread>
        <div class="bloglist">
            <div class="newblog">
                <ul>
                    <h3><a href="/">个人博客从简不繁</a></h3>
                    <div class="autor"><span>作者：杨青</span><span>分类：[<a href="/">日记</a>]</span><span>浏览（<a href="/">459</a>）</span><span>评论（<a href="/">30</a>）</span></div>
                    <p>十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗... <a href="/" target="_blank" class="readmore">全文</a></p>
                </ul>
                <figure><img src="~assets/img/category/001.jpg"></figure>
                <div class="dateview">2014-04-08</div>
            </div>
            <div class="newblog">
                <ul>
                    <h3><a href="/">个人博客从简不繁</a></h3>
                    <div class="autor"><span>作者：杨青</span><span>分类：[<a href="/">日记</a>]</span><span>浏览（<a href="/">459</a>）</span><span>评论（<a href="/">30</a>）</span></div>
                    <p>十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗... <a href="/" target="_blank" class="readmore">全文</a></p>
                </ul>
                <figure><img src="~assets/img/category/001.jpg"></figure>
                <div class="dateview">2014-04-08</div>
            </div>
            <div class="newblog">
                <ul>
                    <h3><a href="/">个人博客从简不繁</a></h3>
                    <div class="autor"><span>作者：杨青</span><span>分类：[<a href="/">日记</a>]</span><span>浏览（<a href="/">459</a>）</span><span>评论（<a href="/">30</a>）</span></div>
                    <p>十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗... <a href="/" target="_blank" class="readmore">全文</a></p>
                </ul>
                <figure><img src="~assets/img/category/001.jpg"></figure>
                <div class="dateview">2014-04-08</div>
            </div>
            <div class="newblog">
                <ul>
                    <h3><a href="/">个人博客从简不繁</a></h3>
                    <div class="autor"><span>作者：杨青</span><span>分类：[<a href="/">日记</a>]</span><span>浏览（<a href="/">459</a>）</span><span>评论（<a href="/">30</a>）</span></div>
                    <p>十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗... <a href="/" target="_blank" class="readmore">全文</a></p>
                </ul>
                <figure><img src="~assets/img/category/001.jpg"></figure>
                <div class="dateview">2014-04-08</div>
            </div>
            <div class="newblog">
                <ul>
                    <h3><a href="/">个人博客从简不繁</a></h3>
                    <div class="autor"><span>作者：杨青</span><span>分类：[<a href="/">日记</a>]</span><span>浏览（<a href="/">459</a>）</span><span>评论（<a href="/">30</a>）</span></div>
                    <p>十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗... <a href="/" target="_blank" class="readmore">全文</a></p>
                </ul>
                <figure><img src="~assets/img/category/001.jpg"></figure>
                <div class="dateview">2014-04-08</div>
            </div>
            <div class="newblog">
                <ul>
                    <h3><a href="/">个人博客从简不繁</a></h3>
                    <div class="autor"><span>作者：杨青</span><span>分类：[<a href="/">日记</a>]</span><span>浏览（<a href="/">459</a>）</span><span>评论（<a href="/">30</a>）</span></div>
                    <p>十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗... <a href="/" target="_blank" class="readmore">全文</a></p>
                </ul>
                <figure><img src="~assets/img/category/001.jpg"></figure>
                <div class="dateview">2014-04-08</div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    import NavBread from '~/components/NavBread/NavBread'
    export default {
        data () {
            return {
            }
        },
        async asyncData ({ params }) {
           let { data } = await axios.get('/categories/articleList', {
                params: {
                    path: `/${params.category}`
                }
            })
           return {
               articles: data.result.articles,
               name: data.result.name
           }
        },
        components: {
            NavBread
        }
        /* ,
        created () {
            this.loadingArticles()
        },
        methods: {
            loadingArticles () {
                axios.get('/categories/articleList', {
                    params: {
                        path: this.$route.path
                    }
                }).then(res => {
                    this.articles = res.data
                })
            }
        } */
    }
</script>

<style lang="less" scoped>
    .category {
        width: 73%;
        float: left;
        .newblog {
            margin: 0 20px 20px 20px;
            border-bottom: #dcdcdc 1px dashed;
            position: relative;
            clear: both;
            display: inline-block;
            padding-bottom: 20px;
            text-align: left;
            &::before {
                content: "";
                width: 10px;
                height: 10px;
                border-radius: 50%;
                position: absolute;
                background: #cac1c1;
                border: 2px solid #fff;
                left: -27px;
                -webkit-transition: all 1s;
                -moz-transition: all 1s;
                -o-transition: all 1s;
                transition: all 1s;
            }
            &::after {
                content: "";
                width: 121px;
                height: 29px;
                position: absolute;
                left: -148px;
                top: -9px;
                z-index: 0;
                background: #474645 url('./../assets/img/ti.png') no-repeat;
                opacity: 0;
                -webkit-transition: all 1s;
                -moz-transition: all 1s;
                -o-transition: all 1s;
                transition: all 1s;
            }
            &:hover::before {
                background: #474645;
            }
            &:hover::after {
                opacity: 1;
            }
            ul {
                float: left;
                line-height: 20px;
                width: 72%;
                color: #474645;
            }
            h3 {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 10px;
                a {
                    color: #181818;
                }
            }
            .autor {
                color: #8c8d8d;
                line-height: 26px;
                background: url('./../assets/img/category/book.png') no-repeat left;
                padding-left: 25px;
                span {
                    margin: 0 5px 0 0;
                }
            }
            a {
                color: #0f9c7c;
                font-weight: bold;
                &.readmore {
                    color: #f55f77;
                    margin-left: 10px;
                    font-weight: bold;
                }
            }
            figure {
                float: right;
                width: 25%;
                overflow: hidden;
                img {
                    width: 100%;
                    margin: auto;
                    -moz-transition: all 0.5s;
                    -webkit-transition: all 0.5s;
                    -o-transition: all 0.5s;
                    transition: all 0.5s;
                }
                &:hover img {
                    transform: scale(1.1);
                }
            }
            .dateview {
                position: absolute;
                left: -125px;
                top: -3px;
                z-index: 1;
                color: #F5F5F5;
            }
        }
    }
</style>

