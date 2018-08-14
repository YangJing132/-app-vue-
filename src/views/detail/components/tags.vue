<template>
  <div class="tags">
    <ul>
      <li v-for="item in items">
        <a href="#">{{item.name ? item.name : item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tags',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.tags {
  li {
    display: inline-block;
    margin: .1rem .1rem 0 0;
    font-size: .15rem;
  }

  a {
    display: block;
    padding: 0 .12rem;
    line-height: .28rem;
    font-size: .15rem;
    border-radius: .28rem;
    text-align: center;
    color: #494949;
    background: #f5f5f5;
  }
}
</style>
