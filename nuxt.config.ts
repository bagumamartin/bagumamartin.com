// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  sourcemap: true,
  modules: [
    "@pinia/nuxt",
    "nuxt-icon",
    "nuxt-gtag",
    "nuxt-schema-org",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "nuxt-swiper",
    "@nuxt/image",
    "nuxt-delay-hydration",
    "@nuxtjs/partytown",
    "@nuxtjs/google-fonts",
    // "nuxt-purgecss",
  ],
  css: ["~/assets/style/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/style/_transitions.scss" as *;
          @use "@/assets/style/_colors.scss" as *;
          @use "@/assets/style/_animations.scss" as *;
            `,
        },
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  generate: {
    fallback: true, // Uses '404.html' instead of the default '200.html'
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
    initialConsent: true,
  },
  partytown: {
    forward: ["dataLayer.push"],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title:
        "Software Applications Development Services in Uganda | Hire a Professional Developer",
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://bagumamartin.com",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://bagumamartin.com/favicon.ico",
        },
      ],
    },
  },
  site: {
    url: "https://bagumamartin.com",
  },
  image: {
    format: ["webp"],
  },
  delayHydration: {
    mode: "manual",
    include: ["/samples/**"],
    hydrateOnEvents: [
      "mousemove",
      "scroll",
      "keydown",
      "click",
      "touchstart",
      "wheel",
    ],
    idleCallbackTimeout: 4000,
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
  },
  googleFonts: {
    download: true,
    base64: true,
    overwriting: false,
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      Lexend: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  // purgeCSS: {
  //   enabled: true, // Always enable purgecss
  //   mode: "postcss",
  //   // safelist: ['my-class'], // Add my-class token to the safelist (e.g. .my-class)
  // },
});
