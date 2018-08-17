<template>
  <div id='app'>
    <router-view class="view"></router-view>
    <router-view class="view" name="subject"></router-view>
    <router-view class="view" name="search"></router-view>
  </div>
</template> 

<script>

export default {
  name: 'app'
};

</script>

<style>
#app {
  max-width: 7.5rem;
  margin: 0 auto;
}
.header-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 998;
  display: flex;
  align-items: center;
  height: .48rem;
  padding: 0 .18rem;
  background: #fff;
  border-bottom: 1px solid #f3f3f3;
}
.has-header {
  margin-top: 0.48rem;
}
</style>