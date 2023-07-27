// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-icon"],
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
  app: {
    head: {
      title:
        "Software Applications Development Services in Uganda | Hire a Professional Developer",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Looking for a professional application developer in Uganda? I offer a wide range of custom software development services, including website, mobile and desktop apps design and development. I am experienced in various major programming languages and platforms, and I can help you create applications that meets your specific needs. Hire me for your project today.",
        },
      ],
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
