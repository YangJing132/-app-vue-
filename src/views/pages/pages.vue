<template>
    <div class="pages">
        <header-bar @showTalion="open"></header-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderBar from './components/headerBar';

export default {
    name: 'pages',
    components:{
        HeaderBar,
    },
    methods: {
        open (){

        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
