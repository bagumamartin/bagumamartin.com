<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="hero">
      <NavBar :routes="routes" />
      <div class="hero-animations">
        <p>Hello. <span class="reveal-box"></span></p>
        <p>My name is, <span class="reveal-box"></span></p>
        <p>Baguma Martin. <span class="reveal-box"></span></p>
        <p>
          <span class="typer">
            <WordTyper :typeAttributes="services" cursorColor="#f9004d" />
          </span>
          <span class="reveal-box"></span>
        </p>
      </div>
      <div class="welcome-text">
        <p>Welcome to my website.</p>
        <button class="cta">Let's get started</button>
      </div>
    </div>
    <section style="height: 100vh;">
      <div>About</div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from "@/components/NavBar.vue";
import WordTyper from "@/components/WordTyper.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    NavBar,
    WordTyper,
  },
  data() {
    return {
      routes: [
        {
          name: "home",
          path: "/",
        },
        {
          name: "blog",
          path: "/blog",
        },
        {
          name: "about",
          path: "/about",
        },
      ],
      services: [
        "Do you need a website?",
        "Do you need an app?",
        "Do you need software solutions?",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/images/landing-page-mobile-image.jpg) no-repeat center / cover;
  background-position: relative;
  height: 100vh;

  @include media-query(extra-large-screens) {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(../assets/images/landing-page-image.jpg) no-repeat center / cover;
    background-position: relative;
  }

  .hero-animations {
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 15vh;
    margin-left: 0.7rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & p {
      display: block;
      width: fit-content;
      position: relative;
      color: transparent;
      margin-top: 3vh;
      animation: text-reveal 0.5s ease forwards;
      animation-delay: 1s;

      &:nth-child(1) {
        animation-delay: 1s;

        span {
          &.reveal-box {
            animation-delay: 0.5s;
          }
        }
      }

      &:nth-child(2) {
        animation-delay: 2s;

        span {
          &.reveal-box {
            animation-delay: 1.5s;
          }
        }
      }

      &:nth-child(3) {
        font-size: 2.5rem;
        animation: text-reveal-name 0.5s ease forwards;
        animation-delay: 3s;

        span {
          &.reveal-box {
            animation-delay: 2.5s;
          }
        }
      }

      &:nth-child(4) {
        margin-top: 5vh;
        animation-delay: 4s;

        span {
          &.typer {
            visibility: hidden;
            animation: element-reveal 0.5s ease forwards;
            animation-delay: 4s;

            color: $primary-color;
            font-weight: 600;

            @include media-query(mobile-portrait) {
              font-size: 5.5vw;
            }
          }
          &.reveal-box {
            animation-delay: 3.5s;
          }
        }
      }

      span {
        &.reveal-box {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background-color: $primary-color;
          animation: text-reveal-box 1s ease;
          animation-delay: 0.3s;
        }
      }
    }
  }

  & .welcome-text {
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    animation: element-reveal 1.5s ease infinite;
    animation-delay: 5s;

    @include media-query(mobile-landscape) {
      display: none;
    }

    & p {
      color: yellow;
      font-weight: 700;
      font-size: 1.5rem;

      @include media-query(mobile-landscape) {
        color: blue;
      }
    }

    & button {
      &.cta {
        display: inline-block;
        padding: 10px 30px;
        color: crimson;
        background-color: transparent;
        border: 2px solid crimson;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        margin-top: 30px;
        transition: 0.3s ease;
        transition-property: background-color, color;

        &:hover {
          color: white;
          background-color: crimson;
        }
      }
    }
  }
}
</style>
