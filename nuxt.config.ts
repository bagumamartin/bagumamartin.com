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
    "@nuxtjs/partytown",
    "@nuxtjs/google-fonts",
    "nuxt-lazy-hydrate",
    "nuxt-delay-hydration",
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
  partytown: {
    forward: ["dataLayer.push"],
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
    initialConsent: true,
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
  googleFonts: {
    display: "swap",
    download: true,
    inject: true,
    preload: true,
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
  delayHydration: {
    mode: "mount",
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
  },
});
