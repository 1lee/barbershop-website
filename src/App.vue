<template>
  <div>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Welcome from './components/welcome.vue';

export default {

}


</script>

<style lang="scss">

* {
  font-family: 'Noto Serif', serif;
}

body {
  background-color: #e0e0eb;
  background: url('./assets/wood-pexels.png') repeat; 
  overflow-x: hidden;
}

</style>
