<template>
  <div class="home">
    <!-- Banner Area -->
    <div class="block">
      <section class="hero is-fullheight">
        <NavBar />
        <div class="hero-body">
          <div class="content is-medium" id="container">
            <p>Hello, <span id="typed_text"></span></p>
            <p>My Name Is <span id="typed_text"></span></p>
            <p>Martin <span id="typed_text"></span></p>
            <p>I <span id="typed_text"></span>
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
            </p>
            <p>Welcome to my website</p>
          </div>
        </div>
      </section>
    </div>
    <!-- End of Banner Area -->
  </div>
</template>

<script type="text/javascript" charset="utf-8">
import NavBar from '@/components/NavBar.vue'
import { setTimeout } from 'timers'

  export default {
    name: 'Home1',
    components: {
      NavBar,
    },
    data() {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['help bsinesses and companies develop websites and software applications', 'help businesses with network and systems administration', 'help businesses manage their information and communications security', 'am an Entreprenuer', 'am a Creator'],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    props:{
      
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

<style type="text/css" media="all" scoped>
.hero {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../assets/profile-photo2.jpg) no-repeat center / cover;
  background-position: relative;
}

#container p {
  display: block;
  width: fit-content;
  /* font-size: ; */
  position: relative;
  color: transparent;
  animation: text_reveal .5s ease forwards;
  animation-delay: 1s;
}

#container p:nth-child(1){
  animation-delay: 1s;
}
#container p:nth-child(2){
  animation-delay: 2s;
}
#container p:nth-child(3){
  animation: text_reveal_name .5s ease forwards;
  animation-delay: 3s;
}

#container p span #typed_text {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: crimson;
  animation: text_reveal_box 1s ease;
  animation-delay: .3s;
}

#container p:nth-child(1) span #typed_text{
  animation-delay: .5s;
}
#container p:nth-child(2) span #typed_text{
  animation-delay: 1.5s;
}
#container p:nth-child(3) span #typed_text{
  animation-delay: 2.5s;
}

#container .cta{
  display: inline-block;
  padding: 10px 30px;
  color: crimson;
  background-color: transparent;
  border: 2px solid crimson;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  margin-top: 30px;
  transition: .3s ease;
  transition-property: background-color, color;
}
#container .cta:hover{
  color: white;
  background-color: crimson;
}

@keyframes text_reveal_box {
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes text_reveal {
  100% {
    color: white;
  }
}

@keyframes text_reveal_name {
  100% {
    color: crimson;
    font-weight: 500;
  }
}
</style>
