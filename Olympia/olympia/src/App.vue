<template>
  <div class="corpo">
    
    <router-view></router-view>
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
  body{
    margin:0 !important;
    overflow-x: hidden;
    width: 100%;
  }
  .corpo{
    width: 100%;
  }
</style>
<script href="/src/assets/js/menu.js"></script>
