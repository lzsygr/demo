<template>
  <div id="app">
    <nav class="top_nav">
      <nav-menu :menuData="menuData" />
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
 import db from '@/db/allDb.js'
 import NavMenu from '@/components/NavMenu.vue'

export default {
  name: 'App',
  components: {
    NavMenu
  },
  data() {
    return {
      menuData: []
    }
  },
  methods: {

  },
  created(){
    this.menuData = db.menuList
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .top_nav{
    width: 1200px; padding:16px 0; margin:0 auto;
  }
}
</style>
