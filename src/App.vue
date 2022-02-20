<template>
  <div id="wrapper">
    <nav class="navbar is-info">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item" @click="showMobileMenu = false"><strong>Baguma Martin</strong></router-link>
        
        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      
      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
        <div class="navbar-end" @click="showMobileMenu = !showMobileMenu">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-success">
                <span class="icon">
                  <i class="fas"><fai icon="user" /></i>
                </span>
                <span>User</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    <section class="section">
      <router-view/>
    </section>
    
    <footer class="footer is-info">
      <p class="has-text-centered">Copyright &#169 2021-2022</p>
    </footer>
  </div>
  
</template>

<script type="text/javascript" charset="utf-8">
  export default {
    data() {
      return {
        showMobileMenu: false,
      }
    }
  }
</script>

<style lang="scss">
@import '../node_modules/bulma'

/* Footer styles */
</style>
