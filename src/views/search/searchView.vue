<template>
  <div class="search-view has-header">
    <div class="search">
      <form id="search_form" onsubmit="return false">
        <input
          type="text"
          name="query"
          v-model.trim.lazy="queryStr"
          placeholder="搜索 书 / 影 / 音 / 标签">
        <a href="javascript:void(0);" @click="query()">搜索</a>
      </form>
    </div>
    <div v-if="queryStr" class="search-res">
      <group title="影视" :items="queryRes_movie">
        <a class="list-link" href="#" slot="more">查看更多影视结果</a>
      </group>
      <group title="图书" :items="queryRes_movie">
        <a class="list-link" href="#" slot="more">查看更多图书结果</a>
      </group>
      <group title="音乐" :items="queryRes_movie">
        <a class="list-link" href="#" slot="more">查看更多音乐结果</a>
      </group>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Group from './components/group'

export default {
  name: 'search-view',
  components: { Group },
  data () {
    return {
      queryStr: ''
    }
  },
  computed: {
    // Getting Vuex State from store/modules/search
    ...mapState({
      queryRes_movie: state => state.search.queryRes_movie
      // API rate limit exceeded
      // queryRes_book: state => state.search.queryRes_book,
      // queryRes_music: state => state.search.queryRes_music
    })
  },
  methods: {
    query: function () {
      if (this.queryStr) {
        // Dispatching query
        this.$store.dispatch({
          type: 'query',
          queryStr: this.queryStr
        })
      }
    }
  },
  created: function () {
    const q = this.$route.params.q
    if (q) {
      // console.log(q)
      this.queryStr = q
      this.query()
    }
  }
}
</script>

<style lang="scss" scoped>
.search-view {
  .search {
    padding: 0.07rem 0.2rem;
    border-bottom: 0.01rem solid #F2F2F2;
    overflow: hidden;

    input {
      width: 85%;
      height: .3rem;
      padding: 0.05rem 0.08rem;
      box-sizing: border-box;
      font-size: .14rem;
      color: #111;
      background: #f5f5f5;
      border-radius: 0.03rem;
      border: 0;
      outline: 0;
    }

    a {
      display: inline-block;
      float: right;
      width: 10%;
      height: .3rem;
      padding-left: 5%;
      line-height: .3rem;
      font-size: .14rem;
      color: #333;
      text-decoration: none;
    }
  }

  .list-link {
    display: block;
    margin-bottom: .15rem;
    padding: .15rem 0 .15rem .5rem;
    font-size: .16rem;
    line-height: .18rem;
    color: #42bd56;
  }
}
</style>
