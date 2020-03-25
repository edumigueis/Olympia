<template>
  
</template>

<script>
export default {
  data() { 
      return;
    },
    mounted () {
      let aos = document.createElement('script')
      aos.setAttribute('src', '../../../assets/dist/aos.js')
      document.head.appendChild(aos)
    }
};
</script>
