<template>
  <div>
    <section class="sticky top-0 bg-black-500 lg:h-[15vh]">
      <header
        class="w-full h-[10vh] py-[0.5rem] px-[2rem] flex justify-between items-center bg-white lg:h-[15vh] lg:px-[4rem]"
      >
        <NuxtLink to="/" @click="storeShowMenu.closeMenu">
          <HeaderLogo class="w-[2.0625rem] h-[1.9925rem] fill-[#DC143C]" />
        </NuxtLink>
        <NuxtLazyHydrate when-idle>
          <HeaderBurger
            burger-background-class="bg-primary"
            class="absolute right-[2rem] z-[9999]"
          />
        </NuxtLazyHydrate>
        <nav
          class="h-[100vh] pt-[10vh] inset-[0_0_0_30%] bg-black-50 backdrop-blur-[1.5rem] fixed transition-[all_1s_ease-in-out] lg:inset-[0_0_0_50%] lg:h-full lg:translate-x-0 lg:pt-0 lg:static lg:bg-transparent lg:backdrop-blur-0 lg:transition-none"
          :class="storeShowMenu.showMenu ? 'translate-x-0' : 'translate-x-full'"
        >
          <div
            class="h-full pl-[20vw] text-left text-heading-5 text-primary font-poppins flex flex-col gap-y-[3vh] justify-start lg:w-auto lg:flex-row lg:justify-end lg:items-center lg:gap-x-[4vw] lg:pl-0"
          >
            <NuxtLink to="/" @click="storeShowMenu.closeMenu"> Home </NuxtLink>
            <NuxtLink to="/samples" @click="storeShowMenu.closeMenu">
              Samples
            </NuxtLink>
            <NuxtLink to="/services" @click="storeShowMenu.closeMenu">
              Services
            </NuxtLink>
            <NuxtLink to="/technologies" @click="storeShowMenu.closeMenu">
              Technologies
            </NuxtLink>
            <NuxtLink to="/about" @click="storeShowMenu.closeMenu">
              About me
            </NuxtLink>
            <NuxtLink to="/contact" @click="storeShowMenu.closeMenu">
              Contact
            </NuxtLink>
          </div>
        </nav>
      </header>
    </section>
    <section>
      <div><hr /></div>
      <main>
        <NuxtLazyHydrate when-visible>
          <slot />
        </NuxtLazyHydrate>
      </main>
      <div><hr /></div>
    </section>
    <footer>
      <section class="pt-[1.5rem] lg:pt-0">
        <div
          class="px-[2rem] flex flex-col items-center justify-center gap-y-[1rem] lg:h-[15vh] lg:px-[4rem] lg:flex-row lg:justify-between lg:gap-y-0"
        >
          <div
            class="w-full flex items-center justify-center gap-x-[2rem] lg:w-fit"
          >
            <NuxtLink
              to="https://www.linkedin.com/in/baguma-martin-b924381a7/"
              target="_blank"
            >
              <IconLinkedin />
            </NuxtLink>
            <NuxtLink
              to="https://wa.me/36205381733?urlencodedtext=Hello%20Baguma!%0A%0AI'm%20interested%20in%20your%20software%20solution%20services"
              target="_blank"
            >
              <IconWhatsapp />
            </NuxtLink>
            <NuxtLink to="https://twitter.com/BagumaMartinA" target="_blank">
              <IconTwitter />
            </NuxtLink>
            <NuxtLink
              to="https://www.facebook.com/baguma.a.martinamanya"
              target="_blank"
            >
              <IconFacebook />
            </NuxtLink>
          </div>
          <div
            class="w-full flex items-center justify-center gap-x-[1.5rem] text-black text-heading-6 font-poppins lg:w-fit"
          >
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div
            class="w-full text-center text-black text-lexend text-[0.5rem] pb-[.5rem] lg:w-fit lg:text-[0.75rem]"
          >
            <p>
              Copyright &copy Baguma Martin 2023 todate. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useShowMenuStore } from "@/stores/header/showMenuStore";

const storeShowMenu = useShowMenuStore();
const route = useRoute();

const baseURI = "https://bagumamartin.com";

useHead({
  meta: [
    // Open graph tag for SEO
    {
      key: "og:site_name",
      property: "og:site_name",
      content: "Baguma Martin | Applications Developer",
      tagPriority: "critical",
    },
    {
      key: "og:title",
      property: "og:title",
      content: () => {
        return route.meta.title
          ? `${route.meta.title}  | Hire a Professional Developer`
          : "Software Applications Developer | Hire a Professional Developer";
      },
      tagPriority: "critical",
    },
    {
      key: "og:type",
      property: "og:type",
      content: "website",
      tagPriority: "critical",
    },
    {
      key: "og:description",
      property: "og:description",
      content: () => {
        return route.meta.description
          ? `${route.meta.description}`
          : "I develop a wide range of custom software applications that meet your specific needs - website, mobile and desktop apps design and development. Hire me for your project today.";
      },
      tagPriority: "critical",
    },
    {
      key: "og:image",
      property: "og:image",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
      tagPriority: "critical",
    },
    {
      key: "og:image:secure_url",
      property: "og:image:secure_url",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
      tagPriority: "critical",
    },
    {
      key: "og:image:alt",
      property: "og:image:alt",
      content: () => {
        return route.meta.imageAlt
          ? `${route.meta.imageAlt}`
          : "Photograph about software development";
      },
      tagPriority: "critical",
    },
    {
      key: "og:image:type",
      property: "og:image:type",
      content: () => {
        return route.meta.imageType ? `${route.meta.imageType}` : "image/jpeg";
      },
      tagPriority: "critical",
    },
    {
      key: "og:image:width",
      property: "og:image:width",
      content: "1200",
      tagPriority: "critical",
    },
    {
      key: "og:image:height",
      property: "og:image:height",
      content: "630",
      tagPriority: "critical",
    },
    {
      key: "og:url",
      property: "og:url",
      content: `${baseURI}${route.fullPath}`,
      tagPriority: "critical",
    },
    // Twitter card data for SEO
    {
      key: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
      tagPriority: "critical",
    },
    {
      key: "twitter:site",
      name: "twitter:site",
      content: "@BagumaMartinA",
      tagPriority: "critical",
    },
    {
      key: "twitter:creator",
      name: "twitter:creator",
      content: "@BagumaMartinA",
      tagPriority: "critical",
    },
    {
      key: "twitter:title",
      name: "twitter:title",
      content: () => {
        return route.meta.title
          ? `${route.meta.title}  | Hire a Professional Developer`
          : "Software Applications Developer | Hire a Professional Developer";
      },
      tagPriority: "critical",
    },
    {
      key: "twitter:description",
      name: "twitter:description",
      content: () => {
        return route.meta.description
          ? `${route.meta.description}`
          : "I develop a wide range of custom software applications that meet your specific needs - website, mobile and desktop apps design and development. Hire me for your project today.";
      },
      tagPriority: "critical",
    },
    {
      key: "twitter:image",
      name: "twitter:image",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
      tagPriority: "critical",
    },
    {
      key: "twitter:url",
      name: "twitter:url",
      content: `${baseURI}${route.fullPath}`,
      tagPriority: "critical",
    },

    // Microsoft tiles
    {
      key: "msapplication-TileColor",
      name: "msapplication-TileColor",
      content: "#DC143C",
    },
    {
      key: "msapplication-TileImage",
      name: "msapplication-TileImage",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
    },
    {
      key: "theme-color",
      name: "theme-color",
      content: "#DC143C",
    },

    // Other SEO
    {
      key: "robots",
      name: "robots",
      content: "index, follow",
    },
    {
      key: "googlebot",
      name: "googlebot",
      content: "index, follow",
    },
    {
      key: "bingbot",
      name: "bingbot",
      content: "index, follow",
    },
    {
      key: "apple-mobile-web-app-capable",
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      key: "apple-mobile-web-app-status-bar-style",
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    {
      key: "apple-mobile-web-app-title",
      name: "apple-mobile-web-app-title",
      content: "Baguma Martin",
    },
    {
      key: "application-name",
      name: "application-name",
      content: "Baguma Martin",
    },
    {
      key: "msapplication-TileColor",
      name: "msapplication-TileColor",
      content: "#DC143C",
    },
    {
      key: "msapplication-TileImage",
      name: "msapplication-TileImage",
      content: "/images/mstile-144x144.png",
    },
    {
      key: "theme-color",
      name: "theme-color",
      content: "#DC143C",
    },
    {
      key: "format-detection",
      name: "format-detection",
      content: "telephone=no",
    },
    {
      key: "mobile-web-app-capable",
      name: "mobile-web-app-capable",
      content: "yes",
    },
    {
      key: "apple-mobile-web-app-capable",
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      key: "apple-mobile-web-app-status-bar-style",
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    {
      key: "apple-mobile-web-app-title",
      name: "apple-mobile-web-app-title",
      content: "Baguma Martin",
    },

    // General SEO
    {
      key: "description",
      name: "description",
      content: () => {
        return route.meta.description
          ? `${route.meta.description}`
          : "I develop a wide range of custom software applications that meet your specific needs - website, mobile and desktop apps design and development. Hire me for your project today.";
      },
    },
    {
      key: "author",
      name: "author",
      content: "Baguma Martin",
    },
    {
      key: "keywords",
      name: "keywords",
      content:
        "software developer, applications developer, web developer, mobile app developer, Vue.js, React, JavaScript, Python, PHP, fullstack developer, Budapest, remote developer, healthcare IT, data science, cybersecurity",
    },
    {
      key: "viewport",
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      key: "geo.position",
      name: "geo.position",
      content: "47.4979;19.0402",
    },
    {
      key: "geo.placename",
      name: "geo.placename",
      content: "Budapest, Hungary",
    },
  ],
  link: [
    {
      key: "canonical",
      rel: "canonical",
      href: `${baseURI}${route.fullPath}`,
    },
    {
      key: "thumbnailUrl",
      href: `${baseURI}${route.meta.image}`,
    },
  ],
  title: () => {
    return route.meta.title
      ? `${route.meta.title}`
      : "Software Applications Developer";
  },
});
</script>
