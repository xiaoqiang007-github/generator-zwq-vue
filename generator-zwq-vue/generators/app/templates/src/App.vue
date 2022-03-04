<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <my-custom-element msg="msg" list="list" ></my-custom-element> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div></div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  created() {
    console.log(':::',this.$utils)
    
  }
}

import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import VueWebComponent from './components/hellow';
const CustomElement = wrap(Vue, VueWebComponent);
window.customElements.define('my-custom-element', CustomElement);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
