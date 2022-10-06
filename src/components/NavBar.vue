<template>
  <section>
    <div>
      <header>
        <div class="brand">
          <MainLogo />
        </div>
        <div
          class="hamburger-menu-button"
          :class="{ open: showMenu }"
          @click="toggleMenu"
        >
          <span
            class="hamburger-menu-button-burger"
            :class="{ open: showMenu }"
          ></span>
        </div>
        <nav :class="{ open: showMenu }">
          <div class="menu-nav" :class="{ open: showMenu }">
            <router-link
              v-for="route in routes"
              :key="route"
              :to="route.path"
              class="menu-nav-item"
              :class="{ open: showMenu }"
              >{{
                `${route.name[0].toLocaleUpperCase() + route.name.substring(1)}`
              }}</router-link
            >
          </div>
        </nav>
        <div class="social-media">
          <fai icon="fa-brands fa-youtube" size="lg" />
          <fai icon="fa-brands fa-tiktok" size="lg" />
          <fai icon="fa-brands fa-twitter" size="lg" />
          <fai icon="fa-brands fa-facebook" size="lg" />
          <fai icon="fa-brands fa-whatsapp" size="lg" />
          <fai icon="fa-brands fa-linkedin" size="lg" />
        </div>
      </header>
    </div>
  </section>
</template>

<script>
import MainLogo from "@/components/MainLogo.vue";

export default {
  name: "NavBar",
  components: {
    MainLogo,
  },
  props: ["routes"],
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log("clicked");
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  padding: 1rem;
  & .brand {
    position: absolute;
    left: 1rem;
    top: 1rem;
    z-index: 2;
    width: 3rem;
  }
  & .hamburger-menu-button {
    position: absolute;
    z-index: 2;
    right: 1rem;
    top: 1rem;
    height: 20px;
    width: 28px;
    @include transition-ease;

    @include media-query(small-screens) {
      display: none;
    }

    @include media-query(large-screens) {
      display: none;
    }

    @include media-query(extra-large-screens) {
      display: none;
    }

    &-burger {
      position: absolute;
      right: 0;
      top: 0.5rem;
      width: 28px;
      height: 3px;
      background: yellow;
      @include transition-ease;

      &::before {
        content: "";
        position: absolute;
        top: -8px;
        width: 28px;
        height: 3px;
        background: yellow;
        @include transition-ease;
      }

      &::after {
        content: "";
        position: absolute;
        top: 8px;
        width: 20px;
        height: 3px;
        background: yellow;
        @include transition-ease;
      }

      &.open {
        transform: rotate(360deg);
        background: transparent;

        &::before {
          transform: rotate(45deg) translate(5px, 8px);
        }

        &::after {
          width: 28px;
          transform: rotate(-45deg) translate(3px, -7px);
        }
      }
    }
  }

  & nav {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    opacity: 0.98;
    visibility: hidden;

    @include media-query(extra-large-screens) {
      visibility: visible;
    }

    &.open {
      visibility: visible;
    }

    & .menu-nav {
      display: flex;
      flex-flow: column wrap;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      height: 100vh;
      overflow: hidden;
      background: black;
      // padding-right: 1rem;
      transform: translateY(0);
      @include transition-ease;

      @include media-query(extra-large-screens) {
        display: block;
        transform: translateY(0);
        height: 100%;
        background: transparent;
        text-align: center;
      }

      &.open {
        transform: translateY(0);
      }

      & a {
        font-size: 2rem;
        font-weight: bold;
        color: #2c3e50;
        display: block;

        @include media-query(extra-large-screens) {
          font-weight: 500;
          display: inline-block;
          padding: 0 1rem;
        }

        &.router-link-exact-active {
          color: crimson;
        }
      }

      &-item {
        transform: translateX(100vw);
        @include transition-ease;

        @include media-query(extra-large-screens) {
          transform: translateX(0);
        }

        &.open {
          transform: translateX(0);
        }
      }
    }
  }

  & .social-media {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    color: yellow;

    @include media-query(extra-large-screens) {
      justify-content: flex-end;
    }
  }
}
</style>
