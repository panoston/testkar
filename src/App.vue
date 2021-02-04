<template>
<div class=flex-container>
  <the-header></the-header>
  <div class=flex-box>
    <test-main></test-main>
  </div>
</div>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue'
import TestMain from './components/gui/TestMain.vue'

export default {
  components: {
    TheHeader,
    TestMain,
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
  margin-top: 0px;
}

.flex-container {
  display: flex;
  flex-direction: column;
}
.flex-box {
  margin-top: 50px;
  flex-basis: 500px;
}
</style>
