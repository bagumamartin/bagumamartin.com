<template>
  <div class="home">
    
    
    <!--.hero-->
      <section class="hero is-fullheight">
        <div class="hero-head" style="z-index: 999;">
          <div class="columns is-mobile is-marginless heading has-text-weight-bold">
            <div class="column left">
              <p class="navbar-item has-text-black" style="width: 6.25rem; height: 1rem;">BAGUMA MARTIN</p>
            </div>
            <div class="column center desktop">
              <router-link to="/" class="navbar-item has-text-black">Home</router-link>
              <router-link to="/about" class="navbar-item has-text-black">My Story</router-link>
            </div>
            <div class="column right">
              <router-link to="/log-in" class="button is-success desktop">
                <span class="icon">
                  <i class="fas"><fai icon="user" /></i>
                </span>
                <span>User</span>
              </router-link>
              <figure class="navbar-item image icon has-text-black">
                <i class="fas"><fai icon="bars" /></i>
              </figure>
            </div>
          </div>
        </div>
        <div id="hero1">
          <div class="hero1 container">
            <div>
            <h1>Hello, <span></span></h1>
            <h1>My Name Is <span></span></h1>
            <h1>Martin <span></span></h1>
            <div class="container2">
              <h3>I am 
              <span class="typed-text">{{ typeValue }}</span>
              <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
              </h3>
              <h4>Welcome To My Website</h4>
            </div>
            <router-link to="#" class="buttons cta">Hire Me</router-link>
          </div>
          </div>
        </div>
      </section>
    <!--/.hero-->
    
    <!-- Start of About section -->
    <section class="about" id="about">
      <div class="max-width">
        <h2 class="title">About me</h2>
        <div class="about-content">
          <div class="column left">
            <img src="../assets/profile-photo2.jpg" alt="my profile photograph" />
          </div>
          <div class="column right">
            <div class="text">
              <p>I am Baguma Martin Amanya; and I am a Software Engineer. </p>
              <p>We wield incredible power -- the power to transform, to destroy and to create again. The question, of course, before us is, "What the hell are we supposed to do with this power?" Or, more importantly, one should ask, "What are we allowed to do with this power?</p>
              <a href="#">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of About section -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { setTimeout } from 'timers';
  export default {
    name: 'Home',
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['a Pharmacy Technician', 'a Software Developer', 'an Entreprenuer', 'a Creator'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style scoped type="text/css" media="all">
/* @import '../assets/mystyles.css';
@import '../assets/helpers.css'; */

  /* .hero{
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/profile-photo2.jpg) center / cover;
  } */

</style>
