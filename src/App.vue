<template>
  <div id="wrapper" v-cloak>
    <section>
      <router-view/>
    </section>
    
    <footer class="footer is-info">
      <p class="has-text-centered">Copyright &#169; 2021-2022</p>
    </footer>
  </div>
  
</template>

<script type="text/javascript" charset="utf-8">
  export default {
    data() {
      return {
        showMobileMenu: false,
      }
    },
  }
</script>

<style lang="scss">
@import '../node_modules/bulma';

[v-cloak] {
  display: none;
}
/* Footer styles */
</style>
