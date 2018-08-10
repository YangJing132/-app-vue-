<template>
  <div id='app'>
    <router-view class="view"></router-view>
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

.has-header {
  margin-top: 0.48rem;
}
</style>