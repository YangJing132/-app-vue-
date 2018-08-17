<template>
    <div class="home has-header">
        <!-- 快速导航 -->
        <sub-nav mold="quickNav"></sub-nav>
        <!-- 新闻列表 -->
        <list mold="thumbnail"  :items="events"></list>
        <infinite-loading @infinite="onInfinite" ref="infiniteLoading">
            <loading slot="spinner"></loading>
        </infinite-loading>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
import SubNav from './components/subNav'
import List from './components/list'
import Loading from './components/loading'
export default {
    name:'home-view',
    components:{
        SubNav,
        List,
        InfiniteLoading,
        Loading
    },
    computed: {
    // Getting Vuex State from store/modules/activities
    ...mapState({
      events: state => state.activities.events
    })
  },
   methods: {
    // Using vue-infinite-loading
    onInfinite () {
      
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        // this.$refs.infiniteLoading.loaded()
      }, 1000)
    },
    // Dispatching Actions
    ...mapActions([
      'loadMore'
    ])
  }
}
</script>
