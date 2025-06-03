// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  sourcemap: true,

  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "nuxt-gtag",
    "nuxt-schema-org",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/image",
    "@nuxtjs/partytown",
    "@nuxtjs/google-fonts",
    "nuxt-lazy-hydrate",
    "nuxt-delay-hydration",
    "nuxt-swiper",
    "@nuxtjs/tailwindcss",
  ],

  icon: {
    serverBundle: {
      collections: [
        "heroicons",
        "material-symbols",
        "mdi",
        "logos",
        "simple-icons",
        "ic",
      ],
    },
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
    },
  },

  css: ["~/assets/style/tailwind.css", "~/assets/style/main.scss"],

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
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["vue", "@vue/runtime-core"],
            iconify: ["@iconify/vue"],
          },
        },
      },
    },
  },

  tailwindcss: {
    cssPath: "~/assets/style/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      "postcss-nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
    routeRules: {
      "/semmverse/**": {
        headers: {
          "x-subdomain-content": "semmverse",
        },
      },
      "/bodysync/**": {
        headers: {
          "x-subdomain-content": "bodysync",
        },
      },
    },
    experimental: {
      wasm: true,
    },
    esbuild: {
      options: {
        target: "es2022",
      },
    },
  },

  generate: {
    // fallback: true, // Uses '404.html' instead of the default '200.html'
  },

  partytown: {
    forward: ["dataLayer.push"],
  },

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID || "",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title:
        "Software Applications Development Services | Hire a Professional Developer",
      link: [
        {
          rel: "canonical",
          href: "https://bagumamartin.com",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://bagumamartin.com/images/logo/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          type: "apple-touch-icon",
          sizes: "180x180",
          href: "https://bagumamartin.com/images/logo/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "https://bagumamartin.com/images/logo/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "https://bagumamartin.com/images/logo/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "https://bagumamartin.com/images/logo/site.webmanifest",
        },
        // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        // <link rel="manifest" href="/site.webmanifest">
      ],
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://bagumamartin.com",
    name: "Baguma Martin",
  },

  image: {
    format: ["webp"],
  },

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700, 800],
      Lexend: [300, 400, 500, 600, 700],
    },
    display: "swap",
    preload: true,
  },

  delayHydration: {
    mode: "mount",
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
  },

  compatibilityDate: "2024-08-11",
});
