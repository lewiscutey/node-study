<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{aa}}{{bb}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
      aa: 1,
      bb: 2
    }
  },
  components: {
    HelloWorld
  },
  mounted() {
    this.aa = 11
    this.bb = 22
  },
  watch: {
    aa: function() {
      // eslint-disable-next-line no-console
      console.log(`this`, this)
    },
    bb: () => {
      // eslint-disable-next-line no-console
      console.log(`this`, this)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
