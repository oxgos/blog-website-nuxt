<template>
    <div class="category">
    </div>
</template>

<script type="text/ecmascript-6">
    // import axios from 'axios'
    export default {
        data () {
            return {

            }
        },
        asyncData () {
            // axios.get()
            console.log(1)
        },
        created () {
            console.log(this.$route.params)
        }
    }
</script>
