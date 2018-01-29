<template>
    <div class="loading" v-if="flag">
        <img src="./loading-spinning-bubbles.svg" alt="loading">
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ['flag']
    }
</script>

<style lang="less" scoped>
    .loading {
        img {
            width: 80px;
            height: 80px;
        }
    }
</style>
