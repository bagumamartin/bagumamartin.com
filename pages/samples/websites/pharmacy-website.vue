<template>
  <div>
    <div class="">
      <div
        class="absolute h-[100vh] w-[100dvw] bg-transparent z-[9998]"
        @click="storeSearch.closeMatchesDrawer"
        :class="{ hidden: !storeSearch.openDrawer }"
      ></div>
      <section class="h-fit bg-white sticky top-0 z-[9998]">
        <!-- <header
          class="w-full h-[10vh] py-[0.5rem] px-[2rem] flex justify-between items-center fixed bg-white lg:h-[15vh] lg:px-[4rem]"
        > -->
        <header
          class="w-full h-[12dhv] py-[1dvh] px-[8dvw] grid grid-col-3 grid-row-2 gap-y-[2dvh] justify-between items-center"
        >
          <NuxtLink
            class="col-start-1 col-span-1 row-start-1 row-span-1"
            to="/samples/websites/pharmacy-website"
            @click="storeShowMenu.closeMenu"
          >
            <img
              src="/images/pharmacy_web_sample_logo.png"
              alt="logo"
              class="w-[4rem]"
            />
          </NuxtLink>
          <div
            class="w-full relative col-start-1 col-span-3 row-start-2 row-span-1 bg-white z-30 rounded-full"
            :class="storeSearch.openDrawer ? 'rounded-t-3xl' : 'rounded-full'"
          >
            <div
              class="flex items-center shadow-[0_0_60px_-15px_rgba(0,0,0,0.4)] p-1.5"
              :class="storeSearch.openDrawer ? 'rounded-t-3xl' : 'rounded-full'"
            >
              <input
                type="text"
                id="search-box"
                placeholder="Search products, brands, and categories"
                autocomplete="off"
                @input="(event) => storeSearch.search(event.target.value)"
                class="w-full bg-transparent outline-none border-none font-lexend text-[.95rem] text-black placeholder:text-black-50"
              />
              <button>
                <Icon
                  name="ic:outline-search"
                  class="bg-transparent text-black border-none outline-none text-[1.7rem]"
                />
              </button>
            </div>
            <div>
              <div
                class="w-full max-h-[50dvh] text-paragraph font-lexend overflow-scroll absolute bg-white shadow-[0_0_60px_-15px_rgba(0,0,0,0.4)] [clip-path:inset(0px_-60px_-60px_-60px)] rounded-b-3xl hidden"
                :class="{
                  [`[display:initial]`]: storeSearch.openDrawer,
                }"
              >
                <ul
                  v-if="storeSearch.matchesFound.displayMatches"
                  class="p-[2rem]"
                >
                  <li
                    v-for="(item, index) in storeSearch.matches"
                    :key="index"
                    class="py-[1rem] text-paragraph"
                  >
                    {{ item }}
                  </li>
                </ul>
                <p v-else class="p-[2rem] text-black-50 italic">
                  No matches found
                </p>
              </div>
            </div>
          </div>
          <!-- <HeaderBurger class="absolute right-[2rem] z-[9999] sm:hidden" /> -->
          <div
            class="col-start-3 col-span-1 row-start-1 row-span-1 flex gap-[5vw] items-center"
          >
            <Icon
              name="ic:outline-person-outline"
              color="black"
              class="text-[2rem]"
            />
            <Icon
              name="ic:outline-shopping-cart"
              color="black"
              class="text-[1.7rem]"
            />
            <HeaderBurger class="relative z-[9999]" />
          </div>
          <nav
            class="h-[100vh] pt-[10dvh] inset-[0_0_0_30%] bg-black-50 backdrop-blur-[1.5rem] fixed transition-[all_1s_ease-in-out] md:w-full md:h-full md:translate-x-0 md:pt-0 md:inset-auto md:static md:bg-transparent md:backdrop-blur-0 md:transition-none md:inset-auto z-[9998]"
            :class="
              storeShowMenu.showMenu ? 'translate-x-0' : 'translate-x-full'
            "
          >
            <div
              class="h-full pl-[20vw] text-left text-heading-5 text-primary font-poppins flex flex-col gap-y-[3vh] justify-start md:w-full md:flex-row md:justify-end md:items-center md:gap-x-[4vw] md:pl-0"
            >
              <NuxtLink
                to="/samples/websites/pharmacy-website/#"
                @click="storeShowMenu.closeMenu"
              >
                Home
              </NuxtLink>
              <NuxtLink
                to="/samples/websites/pharmacy-website/#"
                @click="storeShowMenu.closeMenu"
              >
                Services
              </NuxtLink>
              <NuxtLink
                to="/samples/websites/pharmacy-website/#"
                @click="storeShowMenu.closeMenu"
              >
                Technologies
              </NuxtLink>
              <NuxtLink
                to="/samples/websites/pharmacy-website/#"
                @click="storeShowMenu.closeMenu"
              >
                About Us
              </NuxtLink>
              <NuxtLink
                to="/samples/websites/pharmacy-website/#"
                @click="storeShowMenu.closeMenu"
              >
                Contact
              </NuxtLink>
            </div>
          </nav>
        </header>
      </section>
      <section class="px-[8dvw] flex flex-col gap-y-[2dvh]">
        <div class="flex flex-col gap-y-[2dvh]">
          <div class="">
            <Swiper
              :modules="[SwiperAutoplay]"
              :slides-per-view="1.4"
              :centered-slides="true"
              :space-between="16"
              :loop="true"
              :autoplay="{
                delay: 8000,
                disableOnInteraction: false,
              }"
              class="h-[19vh]"
            >
              <SwiperSlide v-for="slide in 10" :key="slide" class="bg-red-500">
                <strong>{{ slide }}</strong>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="">
            <Swiper
              :modules="[SwiperAutoplay]"
              :slides-per-view="4"
              :breakpoints="{
                600: { slidesPerView: 5 },
                900: { slidesPerView: 7 },
              }"
              :space-between="16"
              :loop="true"
              :autoplay="{
                delay: 8000,
                disableOnInteraction: false,
              }"
              class="h-[8.5vh]"
            >
              <SwiperSlide v-for="slide in 10" :key="slide" class="bg-red-500">
                <strong>{{ slide }}</strong>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="">
            <Swiper
              :modules="[SwiperAutoplay]"
              :slides-per-view="4"
              :breakpoints="{
                600: { slidesPerView: 5 },
                900: { slidesPerView: 7 },
              }"
              :space-between="16"
              :loop="true"
              :autoplay="{
                delay: 8000,
                disableOnInteraction: false,
              }"
              class="h-[8.5vh]"
            >
              <SwiperSlide v-for="slide in 10" :key="slide" class="bg-red-500">
                <strong>{{ slide }}</strong>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="grid grid-col-2 grid-row-2 gap-[1dvh] h-[42dvh]">
          <div class="bg-red-500 col-start-1 col-span-1 row-start-1 row-span-1">
            1
          </div>
          <div class="bg-red-500 col-start-2 col-span-1 row-start-1 row-span-1">
            2
          </div>
          <div class="bg-red-500 col-start-1 col-span-1 row-start-2 row-span-1">
            3
          </div>
          <div class="bg-red-500 col-start-2 col-span-1 row-start-2 row-span-1">
            4
          </div>
        </div>
      </section>
      <section class="h-[400vh]"></section>
    </div>
  </div>
</template>

<script setup>
import { useShowMenuStore } from "@/stores/header/showMenuStore";
import { useSearchStore } from "@/stores/header/searchStore";
import { drugsList } from "@/assets/data/drugs";

const storeShowMenu = useShowMenuStore();

const storeSearch = useSearchStore();
storeSearch.init(drugsList);

definePageMeta({
  layout: "samples",
  title: "Pharmacy website template sample",
  description:
    "This is a sample template of a pharmacy website built with NuxtJs and Tailwind CSS. It would enable your clients seamlessly browse health products, and pharmacy services you have to offer while ensuring that they experience convenience at its best.",
  image: "/images/pharmacy_wev_sample_logo.png",
  imageAlt: "Picture demonstrating a generic logo of a commercial pharmacy.",
  imageType: "image/png",
});
</script>
