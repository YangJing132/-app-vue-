<template>
  <div class="loading">
    <img src="src/assets/images/loading_green.gif" alt="loading">
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.loading {
  margin: .2rem;
  text-align: center;

  img {
    width: .48rem;
  }
}
</style>
