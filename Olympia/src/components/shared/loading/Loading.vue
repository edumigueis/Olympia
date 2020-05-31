<template>
  <div id="load-modal">
    <div id="preloader">
      <div id="loader"></div>
    </div>
  </div>
</template>
<style>
#load-modal {
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: #ffeeff;
  display: none;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: 0.5s all ease;
}
#load-modal.loading {
  display: block;
}
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 180px;
  height: 180px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 6px solid transparent;
  border-top-color: #fc6c85;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
@media only screen and (max-width: 600px) {
  #loader {
    width: 150px;
    height: 150px;
  }
}
@media only screen and (min-width: 1800px) {
  #loader {
    width: 200px;
    height: 200px;
  }
}
#loader:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 6px solid transparent;
  border-top-color: #fc836c;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}
#loader:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 6px solid transparent;
  border-top-color: #fc6c9d;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
