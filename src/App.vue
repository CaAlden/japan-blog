<template>
  <div id="app">
    <NavBar :blogs="blogs"/>
      <div class="main content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    NavBar, SideBar
  },
  data () {
    return {
      blogs: [
        {
          title: 'First Blog in Japan!',
          link: '/blogs/first-in-japan'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
  background: var(--bg-color);
}

</style>
