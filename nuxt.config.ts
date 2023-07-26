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
      title: "Baguma Martin | Applications Developer",
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
            "I am Baguma Martin, I am an applications developer based in Kampala, Uganda. I am a full-stack developer with a passion for building web applications and mobile applications.",
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
