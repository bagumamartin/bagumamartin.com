<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="banner-area">
      <div class="content-area">
        <div class="content">
          
          <h1>Baguma Martin</h1>
          
          <p>Big things have small origins. This website is still under development process: It will be officially launched before 20th March, 2022. Please come again.</p>
          
          <router-link to="#" class="button">Know More</router-link>
          
        </div>
      </div>
    </div>
    
    <div class="main-area">
      <div class="contents-box">
        <p>
          Some content here ...
        </p>
      </div>
      
      <div class="contents-box">
        <p>
          Some other content here ...
        </p>
      </div>
    </div>
    
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

<style type="text/css" media="all">
  .banner-area{
    width: 100%;
    height: 100v;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/profile-photo2.jpg);
    background-size: cover;
  }
  
  .content-area{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .content{
    text-align: center;
  }
  
  .content h1{
    font-size: 60px;
    color: #fff;
  }
  
  .content p{
    font-size: 20px;
    color: #fff;
  }
  
  .content .buttons{
    border: none;
    outline: name;
    padding: 15px;
    margin-top: 100px;
    border-radius: 4px;
    color: #eee;
    font-size: 18px;
    cursor: pointer;
    background: #222;
  }
  
  /*Main area styles*/
  .main-area{
    width: 80%;
    margin: 50px auto;
    padding: 10px;
  }
  
  .main-area .contents-box{
    width: 100%;
    padding: 20%;
    background: #fff;
    margin-top: 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px -3px rgba(0, 0, 0, .1);
  }
</style>
