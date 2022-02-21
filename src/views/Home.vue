<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <!--.hero-->
      <section class="hero is-fullheight">
        <div id="hero1">
          <div class="hero1 container">
            <div>
            <h1>Hello, <span></span></h1>
            <h1>My Name Is <span></span></h1>
            <h1>Martin <span></span></h1>
            <router-link to="#" class="buttons cta">Know More</router-link>
          </div>
          </div>
        </div>
      </section>
    <!--/.hero-->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
//    HelloWorld
  }
}
</script>

<style scoped type="text/css" media="all">
@import '../assets/mystyles.css';

  /* .hero{
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/profile-photo2.jpg) center / cover;
  } */

</style>
