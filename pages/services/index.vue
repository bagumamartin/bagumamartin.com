<template>
  <div>
    <NuxtLazyHydrate when-visible>
      <div class="w-full h-[70vh] text-center">
        <div class="text-heading-1 text-primary font-poppins">
          <h1>Coming Soon</h1>
        </div>
        <div class="text-paragraph text-black font-lexend">
          <p>Page is still under development</p>
        </div>
        <div class="w-full flex justify-center mt-[10vh]">
          <UtilitiesButton
            class="w-[70vw] rounded-full bg-accent md:w-[50vw] lg:w-[20vw]"
            label="Go back to home page"
            navigation-path="/"
          />
        </div>
      </div>
    </NuxtLazyHydrate>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Software Applications Development Services",
  description:
    "Discover the top-notch applications development services I offer. I will help you create an application that meets your specific needs. Let's turn your ideas into reality with cutting-edge solutions.",
  image: "/images/social_cards_image.jpg",
  imageAlt:
    "Photograph of a software developer's desk with a laptop connecter to a monitor.",
  imageType: "image/jpeg",
});
</script>
