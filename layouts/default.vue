<template>
  <div>
    <section class="h-[10vh] bg-black-500 lg:h-[15vh]">
      <header
        class="w-full h-[10vh] py-[0.5rem] px-[2rem] flex justify-between items-center fixed bg-white lg:h-[15vh] lg:px-[4rem]"
      >
        <NuxtLink to="/" @click="storeShowMenu.closeMenu">
          <HeaderLogo class="w-[2.0625rem] h-[1.9925rem] fill-[#DC143C]" />
        </NuxtLink>
        <HeaderBurger class="absolute right-[2rem] z-[9999] sm:hidden" />
        <nav
          class="h-[100vh] pt-[10vh] inset-[0_0_0_30%] bg-black-50 backdrop-blur-[1.5rem] fixed transition-[all_1s_ease-in-out] md:w-full md:h-full md:translate-x-0 md:pt-0 md:inset-auto md:static md:bg-transparent md:backdrop-blur-0 md:transition-none md:inset-auto"
          :class="storeShowMenu.showMenu ? 'translate-x-0' : 'translate-x-full'"
        >
          <div
            class="h-full pl-[20vw] text-left text-heading-5 text-primary font-poppins flex flex-col gap-y-[3vh] justify-start md:w-full md:flex-row md:justify-end md:items-center md:gap-x-[4vw] md:pl-0"
          >
            <NuxtLink to="/" @click="storeShowMenu.closeMenu"> Home </NuxtLink>
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
      <div>
        <slot />
      </div>
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
              to="https://wa.me/256754518384?urlencodedtext=Hello%20Baguma!%0A%0AI'm%20interested%20in%20your%20software%20solution%20services"
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
  title: () => {
    return route.meta.title
      ? `${route.meta.title}`
      : "Software Applications Developer";
  },
  meta: [
    {
      hid: "description",
      name: "description",
      content: () => {
        return route.meta.description
          ? `${route.meta.description}`
          : "I develop a wide range of custom software applications that meet your specific needs - website, mobile and desktop apps design and development. Hire me for your project today.";
      },
    },
    {
      hid: "author",
      name: "author",
      content: "Baguma Martin",
    },

    // Twitter card data for SEO
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    { hid: "twitter:site", name: "twitter:site", content: "@BagumaMartinA" },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@BagumaMartinA",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: () => {
        return route.meta.title
          ? `${route.meta.title}`
          : "Software Applications Developer | Hire a Professional Developer";
      },
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: () => {
        return route.meta.description
          ? `${route.meta.description}`
          : "I develop a wide range of custom software applications that meet your specific needs - website, mobile and desktop apps design and development. Hire me for your project today.";
      },
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: `${baseURI}${route.fullPath}`,
    },

    // Open graph tag for SEO
    {
      hid: "og:site_name",
      property: "og:site_name",
      content: "Baguma Martin | Applications Developer",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: () => {
        return route.meta.title
          ? `${route.meta.title}`
          : "Software Applications Developer | Hire a Professional Developer";
      },
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:description",
      property: "og:description",
      content: () => {
        return route.meta.description
          ? `${route.meta.description}`
          : "I develop a wide range of custom software applications that meet your specific needs - website, mobile and desktop apps design and development. Hire me for your project today.";
      },
    },
    {
      hid: "og:image",
      property: "og:image",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
    },
    {
      hid: "og:image:secure_url",
      property: "og:image:secure_url",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
    },
    {
      hid: "og:image:alt",
      property: "og:image:alt",
      content: () => {
        return route.meta.imageAlt
          ? `${route.meta.imageAlt}`
          : "Photograph about software development";
      },
    },
    {
      hid: "og:image:type",
      property: "og:image:type",
      content: () => {
        return route.meta.imageType ? `${route.meta.imageType}` : "image/jpeg";
      },
    },
    {
      hid: "og:image:width",
      property: "og:image:width",
      content: "1200",
    },
    {
      hid: "og:image:height",
      property: "og:image:height",
      content: "630",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: `${baseURI}${route.fullPath}`,
    },

    // Microsoft tiles
    {
      hid: "msapplication-TileColor",
      name: "msapplication-TileColor",
      content: "#DC143C",
    },
    {
      hid: "msapplication-TileImage",
      name: "msapplication-TileImage",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
    },
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#DC143C",
    },
  ],
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `${baseURI}${route.fullPath}`,
    },
    {
      hid: "thumbnailUrl",
      itemprop: "thumbnailUrl",
      href: `${baseURI}${route.meta.image}`,
    },
  ],
});
</script>
