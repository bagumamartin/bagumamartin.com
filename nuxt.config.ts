// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-icon", "nuxt-gtag"],
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
  generate: {
    fallback: true, // Uses '404.html' instead of the default '200.html'
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
          href: "https://www.bagumamartin.com",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
});
