<template>
    <div class="hero-head">
        <div class="columns is-mobile is-marginless">
            <div class="column">
                <div class="navbar-brand" @click="showMobileMenu = false">
                  <router-link to="/" class="title is-4">
                    <strong>Baguma Martin</strong>
                  </router-link>
                </div>
              </div>

              <div class="column">
                <div id="navbar-menu" class="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
                  <div class="navbar-start">
                    <router-link to="/" class="navbar-item is-2">Home</router-link>
                    <router-link to="/my-story" class="navbar-item is-2">My Story</router-link>
                    <router-link to="chat" class="navbar-item is-2">Chat</router-link>
                  </div>
                </div>
            </div>

            <div class="column">
                <div class="navbar-menu" id="navbar-menu">
                  <div class="navbar-item">
                    <div class="buttons">
                      <router-link to="/login" class="button is-primary">
                        <span class="icon">
                          <i class="fas"><fai icon="user" /></i>
                        </span>
                        <span>Sign In</span>
                      </router-link>
                    </div>
                  </div>
                </div>

                <div class="navbar-brand">
                  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu" v-bind:class="{'is-active': showMobileMenu }">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            showMobileMenu: false,
        }
    },
}
</script>