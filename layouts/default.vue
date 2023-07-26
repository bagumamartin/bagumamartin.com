<template>
  <div>
    <section class="h-[10vh] bg-black-500">
      <header
        class="w-full h-[10vh] py-[0.5rem] px-[2rem] flex justify-between items-center fixed bg-white"
      >
        <NuxtLink to="/" @click="storeShowMenu.closeMenu">
          <HeaderLogo class="w-[2.0625rem] h-[1.9925rem] fill-[#DC143C]" />
        </NuxtLink>
        <HeaderBurger class="absolute right-[2rem] z-[9999]" />
        <nav
          class="h-[100vh] pt-[10vh] inset-[0_0_0_30%] bg-black-50 backdrop-blur-[1.5rem] fixed transition-[all_1s_ease-in-out]"
          :class="storeShowMenu.showMenu ? 'translate-x-0' : 'translate-x-full'"
        >
          <div
            class="h-full pl-[20vw] text-left text-heading-5 text-primary font-poppins flex flex-col gap-y-[3vh] justify-start"
          >
            <NuxtLink to="/" @click="storeShowMenu.closeMenu"> Home </NuxtLink>
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
      <section class="pt-[1.5rem]">
        <div
          class="px-[2rem] flex flex-col items-center justify-center gap-y-[1rem]"
        >
          <div class="w-full flex items-center justify-center gap-x-[2rem]">
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
            class="w-full flex items-center justify-center gap-x-[1.5rem] text-black text-heading-6 font-poppins"
          >
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div
            class="w-full text-center text-black text-lexend text-[0.5rem] pb-[.5rem]"
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

<script setup>
import { useShowMenuStore } from "@/stores/header/showMenuStore";

const storeShowMenu = useShowMenuStore();

// Head meta tags for SEO
const route = useRoute();

useHead({
  meta: [{ property: "og:title", content: `App Name - ${route.meta.title}` }],
});

// Social media meta tags
useSeoMeta({
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
