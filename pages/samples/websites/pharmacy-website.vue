<template>
  <div>
    <NuxtLazyHydrate when-visible>
      <div class="bg-green-100 flex flex-col gap-y-[1svh]">
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
            class="w-full h-[12dhv] py-[1dvh] px-[2dvw] grid grid-col-3 grid-row-2 gap-y-[1svh] justify-between items-center md:grid-cols-5 md:grid-rows-1 md:gap-x-[5dvw] md:gap-y-0"
          >
            <NuxtLink
              class="col-start-1 col-span-1 row-start-1 row-span-1"
              to="/samples/websites/pharmacy-website"
              @click="storeShowMenu.closeMenu"
            >
              <TwicImg
                src="images/samples/websites/pharmacy_website/pharmacy_sample_website_logo.png"
                mode="contain"
                anchor="center"
                refit
                class="w-[4rem]"
              />
            </NuxtLink>
            <div
              class="w-full relative col-start-1 col-span-3 row-start-2 row-span-1 bg-white z-30 rounded-full md:col-start-2 md:col-span-3 md:row-start-1 md:row-span-1 md:py-[0.5rem]"
              :class="storeSearch.openDrawer ? 'rounded-t-3xl' : 'rounded-full'"
            >
              <div
                class="flex items-center shadow-[0_0_60px_-15px_rgba(0,0,0,0.4)] p-1.5"
                :class="
                  storeSearch.openDrawer ? 'rounded-t-3xl' : 'rounded-full'
                "
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
              class="col-start-3 col-span-1 row-start-1 row-span-1 flex gap-[5vw] items-center md:col-start-5 md:col-span-1 md:row-start-1 md:row-span-1 md:gap-[2vw] md:gap-y-0 md:justify-end"
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
              <HeaderBurger
                burger-background-class="bg-black"
                class="relative z-[9999] lg:hidden"
              />
            </div>
            <HeaderNavigator
              :links="links"
              links-color-class="text-green-500"
              class="lg:hidden"
            />
          </header>
        </section>
        <section class="flex flex-col gap-y-[6svh]">
          <section class="flex flex-col gap-y-[2dvh]">
            <NuxtLazyHydrate when-visible>
              <div
                class="relative lg:px-[2dvw] lg:grid lg:grid-cols-7 lg:gap-x-[2dvw]"
              >
                <HeaderNavigator
                  :links="links"
                  links-color-class="text-green-500"
                  class="hidden lg:block lg:py-[2svh] col-start-1 col-span-2"
                />
                <div
                  class="flex flex-col gap-y-[2dvh] py-[2svh] col-start-3 col-span-5"
                >
                  <div class="bg-white py-[1svh] lg:px-[1svh] lg:rounded-lg">
                    <Swiper
                      :modules="[SwiperAutoplay]"
                      :slides-per-view="1.4"
                      :centered-slides="true"
                      :space-between="16"
                      :loop="true"
                      :lazy="true"
                      :pagination="{ clickable: true }"
                      :autoplay="{
                        delay: 5000,
                        disableOnInteraction: false,
                      }"
                      :breakpoints="{
                        900: {
                          slidesPerView: 1,
                          // pagination: { clickable: true },
                        },
                      }"
                    >
                      <SwiperSlide
                        v-for="advert in productsData.adverts"
                        :key="advert.id"
                      >
                        <div
                          class="border-2 rounded-lg border-green-500 contain"
                        >
                          <figure>
                            <TwicImg
                              :src="advert.imagePath"
                              mode="cover"
                              anchor="center"
                              refit
                              class="rounded-lg"
                              ratio="16:9"
                            />
                          </figure>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div class="h-fit bg-white py-[1svh]">
                    <Swiper
                      :modules="[SwiperAutoplay]"
                      :slides-per-view="4"
                      :breakpoints="{
                        600: { slidesPerView: 5 },
                        900: { slidesPerView: 7 },
                      }"
                      :space-between="16"
                      :loop="true"
                      :lazy="true"
                      :autoplay="{
                        delay: 8000,
                        disableOnInteraction: false,
                      }"
                    >
                      <SwiperSlide
                        v-for="category in productsData.categories"
                        :key="category.id"
                      >
                        <div class="twic-item square p-[1px]">
                          <figure
                            class="grid grid-cols-1 grid-rows-1 items-center justify-center isolate"
                          >
                            <TwicImg
                              class="h-full w-full rounded-lg col-start-1 row-start-1"
                              :src="category.imagePath"
                              refit
                              ratio="1"
                            />
                            <div
                              class="w-full h-full rounded-lg col-start-1 row-start-1 z-10 text-[.8rem] text-white bg-black-50 flex items-center justify-center"
                            >
                              <span class="font-bold">
                                {{ category.name }}
                              </span>
                            </div>
                          </figure>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </NuxtLazyHydrate>
            <div class="px-[1svh]">
              <div
                class="flex justify-between text-heading-5 font-poppins px-[1dvh] pb-[1dvh]"
              >
                <div class="">
                  <h1>High Demand Products</h1>
                </div>
                <div>
                  <NuxtLink to="/samples/websites/pharmacy-website">
                    See all
                  </NuxtLink>
                </div>
              </div>
              <div
                class="grid grid-cols-2 gap-[1dvh] min-h-[42svh] p-[1dvh] lg:grid-cols-6"
              >
                <div
                  v-for="product in highDemandProducts"
                  class="bg-white col-span-1 row-span-1 rounded-lg"
                >
                  <figure>
                    <TwicImg :src="product.imagePath" class="rounded-lg" />
                  </figure>
                  <div class="py-2 font-lexend">
                    <div class="text-[0.75rem] text-center px-[1rem]">
                      <p class="truncate">{{ product.name }}</p>
                    </div>
                    <div class="text-[0.9rem] text-center">
                      <p class="py-1 font-bold">{{ product.quantity }}</p>
                      <p>UGX {{ product.price.toLocaleString() }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="px-[1svh]">
            <div class="">
              <div
                class="flex justify-between text-heading-5 font-poppins px-[1dvh] pb-[1dvh]"
              >
                <div class="">
                  <h1>High Demand Categories</h1>
                </div>
                <div>
                  <NuxtLink to="/samples/websites/pharmacy-website">
                    See all
                  </NuxtLink>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-[1dvh] p-[1dvh] lg:grid-cols-9">
                <div
                  v-for="category in selectRandomObjects(
                    productsData.categories,
                    6
                  )"
                  class="bg-white col-span-1 row-span-1 rounded-lg relative"
                >
                  <figure>
                    <TwicImg
                      :src="category.imagePath"
                      class="rounded-lg"
                      refit
                      anchor="center"
                      ratio="1:1.5"
                    />
                  </figure>
                  <div
                    class="w-full py-2 absolute bottom-0 rounded-b-lg bg-black opacity-70 text-[.9rem] font-lexend text-white text-center"
                  >
                    <p>
                      <strong>{{ category.name }}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="px-[1svh]">
            <div class="">
              <div
                class="flex justify-between text-heading-5 font-poppins px-[1dvh] pb-[1dvh]"
              >
                <div class="">
                  <h1>Available Products</h1>
                </div>
                <div>
                  <NuxtLink to="/samples/websites/pharmacy-website">
                    See all
                  </NuxtLink>
                </div>
              </div>
              <div
                class="grid grid-cols-2 gap-[1dvh] min-h-[42svh] p-[1dvh] lg:grid-cols-6"
              >
                <div
                  v-for="product in productsData.products"
                  class="bg-white col-span-1 row-span-1 rounded-lg"
                >
                  <figure>
                    <TwicImg :src="product.imagePath" class="rounded-lg" />
                  </figure>
                  <div class="py-2 font-lexend">
                    <div class="text-[0.75rem] text-center px-[1rem]">
                      <p class="truncate">{{ product.name }}</p>
                    </div>
                    <div class="text-[0.9rem] text-center">
                      <p class="py-1 font-bold">{{ product.quantity }}</p>
                      <p>UGX {{ product.price.toLocaleString() }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <footer class="text-white font-lexend">
              <div>
                <NuxtLink>
                  <div
                    class="w-full flex flex-col items-center bg-green-400 text-heading-6 text-white py-4"
                  >
                    <i>
                      <Icon
                        class="text-white text-heading-5"
                        name="material-symbols:arrow-circle-up-outline"
                      />
                    </i>
                    <b> Top of page </b>
                  </div>
                </NuxtLink>
                <div class="bg-green-500">
                  <ul class="grid grid-cols-2 gap-2 p-2">
                    <li class="p-1">
                      <NuxtLink>
                        <span> Your Orders </span>
                      </NuxtLink>
                    </li>

                    <li class="p-1">
                      <NuxtLink>
                        <span class=""> Your Account </span>
                      </NuxtLink>
                    </li>
                    <li class="p-1">
                      <NuxtLink>
                        <span class=""> Your Recalls </span>
                      </NuxtLink>
                    </li>
                    <li class="p-1">
                      <NuxtLink>
                        <span class=""> Product Safety Alerts </span>
                      </NuxtLink>
                    </li>
                    <li class="p-1">
                      <NuxtLink>
                        <span class=""> Customer Service </span>
                      </NuxtLink>
                    </li>

                    <li class="p-1">
                      <NuxtLink>
                        <span class=""> Your Lists </span>
                      </NuxtLink>
                    </li>
                    <li class="p-1">
                      <NuxtLink>
                        <span> Refills </span>
                      </NuxtLink>
                    </li>
                    <li class="p-1">
                      <NuxtLink>
                        <span> Browsing History </span>
                      </NuxtLink>
                    </li>
                    <li class="p-1">
                      <NuxtLink>
                        <span> Returns </span>
                      </NuxtLink>
                    </li>
                    <li class="p-1">
                      <NuxtLink>
                        <span> Disability Customer Support </span>
                      </NuxtLink>
                    </li>
                  </ul>
                  <div
                    class="flex flex-col items-center justify-center gap-4 bg-green-700 py-4"
                  >
                    <div class="flex items-center justify-between gap-2">
                      <NuxtLink>
                        <i class="mr-2">
                          <Icon
                            name="ion:globe-outline"
                            class="text-heading-5"
                          />
                        </i>
                        <span class="">English</span>
                      </NuxtLink>
                      <NuxtLink>
                        <span class="mr-2">
                          <b>Shs</b>
                        </span>
                        <span>UGX - Uganda Shillings</span>
                      </NuxtLink>
                      <NuxtLink>
                        <span class="mr-2">
                          <i>
                            <Icon
                              name="twemoji:flag-uganda"
                              class="text-heading-5"
                            />
                          </i>
                        </span>
                        <span class="">Uganda</span>
                      </NuxtLink>
                    </div>
                    <div class="text-center">
                      Already a customer?
                      <NuxtLink> Sign in </NuxtLink>
                    </div>
                    <div>
                      <ul
                        class="flex items-center justify-center gap-4 text-[0.7rem]"
                      >
                        <li>
                          <NuxtLink>Conditions of Use</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink>Privacy Notice</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink>Your Ads Privacy Choices</NuxtLink>
                        </li>
                        <li>
                          <hr class="text-[1rem]" />
                        </li>
                      </ul>
                      <p>© 2022-2023, Pharmacy.com, Inc. or its affiliates</p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </section>
        </section>
      </div>
    </NuxtLazyHydrate>
  </div>
</template>

<script setup>
import { useShowMenuStore } from "@/stores/header/showMenuStore";
import { useSearchStore } from "@/stores/header/searchStore";
import { drugsList } from "@/assets/data/drugs";
import productsInfo from "@/assets/data/products.json";

const storeShowMenu = useShowMenuStore();

const storeSearch = useSearchStore();
storeSearch.init(drugsList);

const productsData = productsInfo;

const links = [
  {
    name: "Orders",
    path: "/samples/websites/pharmacy-website/#",
    iconName: "material-symbols:box-outline-rounded",
  },
  {
    name: "Saved Items",
    path: "/samples/websites/pharmacy-website/#",
    iconName: "material-symbols:favorite-outline",
  },
  {
    name: "Contact",
    path: "/samples/websites/pharmacy-website/#",
    iconName: "material-symbols:phone-enabled-outline-sharp",
  },
  {
    name: "About",
    path: "/samples/websites/pharmacy-website/#",
    iconName: "material-symbols:info-outline",
  },
  {
    name: "Help",
    path: "/samples/websites/pharmacy-website/#",
    iconName: "material-symbols:help-outline",
  },
  {
    name: "Settings",
    path: "/samples/websites/pharmacy-website/#",
    iconName: "material-symbols:settings-outline",
  },
  {
    name: "Logout",
    path: "/samples/websites/pharmacy-website/#",
    iconName: "material-symbols:logout-sharp",
  },
];

function selectRandomObjects(dataset, n) {
  // Check if the number of objects to select is greater than the length of the dataset.
  if (n > dataset.length) {
    throw new Error(
      "The number of objects to select cannot be greater than the length of the dataset."
    );
  }

  // Create an array to store the selected objects.
  let selectedObjects = [];

  // Loop through the dataset until the selected objects array has n elements.
  while (selectedObjects.length < n) {
    // Generate a random index for an object in the dataset.
    const randomIndex = Math.floor(Math.random() * dataset.length);

    // Check if the object at the random index has already been selected.
    let isUnique = true;
    for (let j = 0; j < selectedObjects.length; j++) {
      if (selectedObjects[j] === dataset[randomIndex]) {
        isUnique = false;
        break;
      }
    }

    // If the object at the random index is unique, add it to the selected objects array.
    if (isUnique) {
      selectedObjects.push(dataset[randomIndex]);
    }
  }

  // Return the array of selected objects.
  return selectedObjects;
}

let highDemandProducts = selectRandomObjects(productsData.products, 4);
let highDemandCategories = selectRandomObjects(productsData.categories, 6);

definePageMeta({
  layout: "samples",
  title: "Pharmacy website template sample",
  description:
    "This is a sample template of a pharmacy website built with NuxtJs and Tailwind CSS. It would enable your clients seamlessly browse health products, and pharmacy services you have to offer while ensuring that they experience convenience at its best.",
  image:
    "/images/samples/websites/pharmacy_website/pharmacy_sample_website_logo.png",
  imageAlt: "Picture demonstrating a generic logo of a commercial pharmacy.",
  imageType: "image/png",
});
</script>
