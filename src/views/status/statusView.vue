<template>
  <div class="status has-header">
    <banner></banner>
    <user-bar></user-bar>
    <div class="content-list">
      <card mold="quote" v-for="item in items" :key="item"></card>
      <a class="list-link" href="#">显示更多广播</a>
    </div>
    <download-app></download-app>
  </div>
</template>

<script>
import Banner from '../detail/components/banner'
import UserBar from './components/userBar'
import Card from './components/card'
import DownloadApp from '../detail/components/downloadApp'

export default {
  name: 'status',
  components: { Banner, UserBar, Card, DownloadApp },
  data () {
    return {
      items: new Array(10)
    }
  }
}
</script>

<style lang="scss" scoped>
.list-link {
  display: block;
  padding: .15rem 0;
  font-size: .16rem;
  line-height: .18rem;
  text-align: center;
  color: #42bd56;
}
</style>
