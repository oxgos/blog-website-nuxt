<template>
    <div>
        <div class="articleDetail">
            <NavBread>
                <a slot="link" href="javascript: void(0);">文章详情</a>
            </NavBread>
            <Loading :flag="loadingFlag"></Loading>
            <div v-if="!loadingFlag" class="content" v-html="article.htmlContent"></div>
        </div>
        <IndexAside></IndexAside>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    import NavBread from '~/components/NavBread/NavBread'
    import IndexAside from '~/components/IndexAside/IndexAside'
    import Loading from '~/components/Loading/Loading'
    export default {
        data () {
            return {
                article: '',
                loadingFlag: false
            }
        },
        created () {
            this.loadingArticleDetail()
        },
        methods: {
            loadingArticleDetail () {
                this.loadingFlag = true
                axios.get('/feArticles/detail', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then(res => {
                    this.loadingFlag = false
                    if (res.data.status === '1') {
                        this.article = res.data.result
                    }
                })
            }
        },
        components: {
            NavBread,
            IndexAside,
            Loading
        }
    }
</script>

<style lang="less" scoped>
    .articleDetail {
        width: 73%;
        float: left;
        .content {
            text-align: left;
            line-height: 22px;
            margin: 20px;
        }
    }  
</style>
