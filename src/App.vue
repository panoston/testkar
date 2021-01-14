<template>
  <the-header></the-header>
  <img alt="Vue logo" src="./assets/logo.png">
  <test-form></test-form>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue'
import TestForm from './components/gui/TestForm.vue'

export default {
  components: {
    TheHeader,
    TestForm
  },

}
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
