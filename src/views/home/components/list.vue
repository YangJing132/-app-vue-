<template>
  <div class="list">
    <template v-if="mold === 'thumbnail'" v-for="item in items">
      <router-link
        class="thumbnail"
        :to="{name: 'DetailView', params: { id: item.id }}">
        <div class="content">
          <img :src="item.image_hlarge" alt="cover">
          <h3>{{item.title}}</h3>
          <p>{{item.content | subStr}}</p>
        </div>
        <div class="author">
          <span class="name">{{item.category_name}}</span>
          <span class="label" v-if="item.subcategory_name">
            本活动来自栏目 {{item.subcategory_name}}
          </span>
        </div>
      </router-link>
    </template>
    
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    mold: {
      type: String,
      default: 'thumbnail'
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 30)
    }
  }
}
</script>

<style lang='scss' scoped>
.list {
  .thumbnail {
    position: relative;
    display: block;
    padding: .25rem .18rem .25rem 0;
    margin-left: .18rem;

    .content {
      overflow: hidden;
      margin-bottom: .1rem;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 0.06rem;
      line-height: 1.41;
      text-align: justify;
      font-size: .17rem;
      font-weight: 500;
      color: #494949;
    }

    p {
      line-height: 1.5;
      text-align: justify;
      color: #aaa;
      font-size: .12rem;
      overflow: hidden;
    }

    img {
      float: right;
      width: 25.6%;
      height: .8678rem;
      margin-left: .25rem;
    }

    .author {
      font-size: .12rem;
      color: #ccc;
    }

    .label {
      position: absolute;
      bottom: .25rem;
      right: .18rem;
    }
  }

  .thumbnail ~ .thumbnail::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.01rem;
    content: '';
    background: #e3e3e3;
  }

  .basic {
    h3 {
      padding: 0;
      line-height: 1.41;
      font-size: .17rem;
      font-weight: 500;
      color: #494949;
    }

    .info {
      margin-top: 0.05rem;
      font-size: .14rem;
      color: #42bd56;
    }
  }
}
</style>
