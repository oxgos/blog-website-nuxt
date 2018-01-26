<template>
    <div>
        <div class="articleDetail">
            <NavBread>
                <a slot="link" href="javascript: void(0);">文章详情</a>
            </NavBread>
            <div class="content" v-html="article.htmlContent"></div>
        </div>
        <AsideBar></AsideBar>
    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    import NavBread from '~/components/NavBread/NavBread'
    import AsideBar from '~/components/AsideBar/AsideBar'
    export default {
        data () {
            return {
                article: ''
            }
        },
        created () {
            this.loadingArticleDetail()
        },
        methods: {
            loadingArticleDetail () {
                axios.get('/feArticles/detail', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then(res => {
                    if (res.data.status === '1') {
                        this.article = res.data.result
                    }
                })
            }
        },
        components: {
            NavBread,
            AsideBar
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
