<template>
  <section class="section" id="header-section">
    <NavBar :routes='routes'/>
  </section>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ formInput }}</h1>
    <input type="text" v-model="formInput">
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';

  export default {
    components: {
      NavBar
    },
    data () {
      return {
        formInput: '',
        routes: [
          {
            "name": "home",
            "path": "/"
          },
          {
            "name": "about",
            "path": "/about"
          }
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: crimson;
      }
    }
  }
</style>