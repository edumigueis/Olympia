<template>
  <div class="corpo" id="#app-corpo">
    <router-view></router-view>
    <div id='forced-click'></div>
  </div>
</template>

<script>
import { routes } from "./routes";

export default {
  data() {
    return {
      routes
    };
  }
  
};
</script>
<style>
  html,body{
    margin: 0;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  }
  .corpo{
    width: 100%;
    height: 100%;
    margin: 0;
  }
</style>
<script href="/src/assets/js/menu.js"></script>
