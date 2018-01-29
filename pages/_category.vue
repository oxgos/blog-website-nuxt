<template>
    <div>
        <div class="category">
            <NavBread>
                <a slot="link" href="javascript: void(0);">{{ categoryType }}</a>
            </NavBread>
            <Loading :flag="loadingFlag"></Loading>
            <div v-if="!loadingFlag" class="bloglist">
                <div class="newblog" v-for="(item, index) in articles" :key="index">
                    <ul>
                        <h3>
                            <router-link :to="`/articles/${item._id}`">{{item.title}}</router-link>
                        </h3>
                        <div class="autor"><span>作者：郭剑伟</span><span>分类：[<a href="javascript: void(0);">{{categoryType}}</a>]</span><span>浏览（<a href="javascript: void(0);">459</a>）</span><span>评论（<a href="javascript: void(0);">30</a>）</span></div>
                        <p>{{item.introduce}}<router-link :to="`/articles/${item._id}`" target="_blank" class="readmore">全文</router-link></p>
                    </ul>
                    <figure>
                        <img :src="item.poster">
                    </figure>
                    <div class="dateview">{{item.meta.createdAt | formatDate}}</div>
                </div>
            </div>
            <Page v-if="page > 1 && !loadingFlag" :total="total" :page="page" :current="current" @changeCurrent="changeCurrent"></Page>
        </div>
        <IndexAside></IndexAside>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    import NavBread from '~/components/NavBread/NavBread'
    import IndexAside from '~/components/IndexAside/IndexAside'
    import Page from '~/components/Page/Page'
    import Loading from '~/components/Loading/Loading'
    export default {
        data () {
            return {
                articles: [],
                categoryType: '',
                total: 0,
                page: 0,
                current: 0,
                loadingFlag: false
            }
        },
        /* async asyncData ({ params }) {
            let { data } = await axios.get('/feCategories/articleList', {
                    params: {
                        path: `/${params.category}`
                    }
                })
            return {
                articles: data.result.articles,
                categoryType: data.result.name
            }
        }, */
        created () {
            this.loadingArticles()
        },
        methods: {
            loadingArticles () {
                this.loadingFlag = true
                axios.get('/feCategories/articleList', {
                    params: {
                        path: this.$route.path,
                        index: this.current
                    }
                }).then(res => {
                    this.loadingFlag = false
                    if (res.data.status === '1') {
                        this.articles = res.data.result.articles
                        this.categoryType = res.data.result.name
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
            NavBread,
            IndexAside,
            Page,
            Loading
        }
    }
</script>

<style lang="less" scoped>
    .category {
        width: 73%;
        float: left;
        .newblog {
            width: 690px;
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
                top: -1px;
                z-index: 1;
                color: #F5F5F5;
            }
        }
    }
</style>

