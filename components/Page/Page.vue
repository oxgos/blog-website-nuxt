<template>
    <div class="page">
        <a title="文章数"><b>{{total}}</b></a>
        <a @click="changeCurrent(current - 1)" href="javascript: void(0);">&lt;</a>
        <a :class="{'active': (current + 1) === n}" @click="changeCurrent(n - 1)" href="javascript: void(0);" v-for="n in page" :key="n">{{ n }}</a>
        <a  @click="changeCurrent(current + 1)" href="javascript: void(0);">&gt;</a>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {

            }
        },
        props: {
            total: {
                type: Number
            },
            page: {
                type: Number
            },
            current: {
                type: Number
            }
        },
        methods: {
            changeCurrent (index) {
                if (index < 0) {
                    index = this.page - 1
                } else if (index >= this.page) {
                    index = 0
                }
                this.$emit('changeCurrent', index)
            }
        }
    }
</script>

<style lang="less" scoped>
    .page {
        margin: 20px 0;
        text-align: center;
        width: 100%;
        overflow: hidden;
        a {
            color: #F33;
            border: #999 1px solid;
            margin: 0 2px;
            height: 26px;
            line-height: 26px;
            border-radius: 50%;
            width: 26px;
            text-align: center;
            display: inline-block;
            b {
                color: #999;
            }
            &.active, &:hover {
                background: #333;
                color: #FFF;
            }
        }
    }
</style>
