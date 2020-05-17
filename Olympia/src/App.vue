<template>
  <div class="corpo">
    <vue-page-transition name="fade">
    <router-view/>
    </vue-page-transition>
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
  .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.37s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
<script href="/src/assets/js/menu.js"></script>
