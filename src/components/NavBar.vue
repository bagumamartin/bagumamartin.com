<template>
  <div class="hero-head is-transperent">
    <div class="columns is-mobile is-marginless navigation heading has-text-weight-bold">
      <div class="column left">
        <div class="navbar-item" @click="showMobileMenu = false">
          <router-link to="/" class="title is-6">
            <strongs>Baguma Martin</strongs>
          </router-link>
        </div>
      </div>

      <div class="column center" v-bind:class="{'desktop': !showMobileMenu }">
        <div id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
          <div class="navbar-start nav-menu">
            <router-link to="/" class="navbar-item is-2 nav-link">Home</router-link>
            <router-link to="/my-story" class="navbar-item is-2 nav-link">My Story</router-link>
            <router-link to="chat" class="navbar-item is-2 nav-link">Chat</router-link>
          </div>
        </div>
      </div>

      <div class="column right">
          <div id="navbar-other-menu" class="desktop">
            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/signin" class="button is-primary">
                  <span class="icon">
                    <i class="fas"><fai icon="user" /></i>
                  </span>
                  <span>Sign In</span>
                </router-link>
              </div>
            </div>
          </div>
          <a role="button" class="navbar-burger ham-btn" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu" v-bind:class="{'is-active': showMobileMenu }">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
          // showMobileMenu: false,
        }
    },
    props: {
      showMobileMenu: false,
    }
}
</script>

<style scoped>
@import url(../assets/helpers.css);

.navigation .ham-btn {
  background: black;
  z-index: 500;
  clip-path: circle(25px at calc(100% - 26.5px) 25px);
  transition: all 300ms ease-in-out;
}

#navbar-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation .is-active:not(.navbar-burger, .ham-btn) {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 200;
}

.navigation .is-active .ham-btn {
  background: black;
  z-index: 500;
  transition: all 300ms ease-out-in;
}

.navigation .ham-btn {
  position: absolute;
  /* background: crimson; */
  /* border-radius: 50%; */
  cursor: pointer;
}

.navigation .ham-btn span {
  position: absolute;
  height: 2px;
  background: white;
}

.navigation .is-active .ham-btn span {
  position: absolute;
  height: 2px;
  background: white;
}

.navigation .is-active .nav-menu, .start-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  justify-content: center;
  text-align: left;
  /* top: 25%;
  left: 27%; */
  /* transform: translated(-50%, -50%); */
}

.navigation .is-active .nav-link {
  display: inline-block;
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;
}
</style>