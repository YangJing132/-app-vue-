<template>
    <div class="home has-header">
        <sub-nav mold="quickNav"></sub-nav>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import SubNav from './components/subNav'
export default {
    name:'home-view',
    components:{
        SubNav
    }
}
</script>
