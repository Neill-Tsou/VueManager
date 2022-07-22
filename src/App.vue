<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'App',
  component: Main
  
}
</script>

<style>
html, body {
margin: 0;
padding: 0;
}
#app{
  height: 100vh;
}
</style>
