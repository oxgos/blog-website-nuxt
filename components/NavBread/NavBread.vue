<template>
    <div class="NavBread">
        您现在的位置是：
        <router-link to="/">首页</router-link>&gt;
        <slot name="link"></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    }
</script>

<style lang="less" scoped>
    .NavBread {
        font-size: 12px;
        color: #666;
        line-height: 30px;
        text-align: left;
        height: 30px;
        border-bottom: #d7d7d7 1px solid;
        padding-left: 60px;
        margin: 20px;
        background: url('./location.png') 40px 5px no-repeat;
        a {
            color: #666;
            margin: 0 5px;
        }
    }
</style>
