<template>
    <div class="pages">
        <header-bar @showTalion="open"></header-bar>
        <router-view></router-view>
        <!-- 搜索页 -->
        <talion-view v-show="talion" @closeTalion="close"></talion-view>
    </div>
</template>

<script>
import HeaderBar from './components/headerBar';
import TalionView from './components/talionView';

export default {
    name: 'pages',
    components:{
        HeaderBar,
        TalionView
    },
    data() {
        return {
            talion:""
        }
    },
    methods: {
        open: function () {
            this.talion = 'open'
        },
        close: function () {
            this.talion = ''
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
