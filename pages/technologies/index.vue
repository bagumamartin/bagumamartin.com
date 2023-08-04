<template>
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
</template>

<script setup>
definePageMeta({
  title: "Technologies I Use",
  description:
    "Explore the programming languages, frameworks, platforms, and tools I am proficient in. Discover the tools I use for robust solutions.",
  image: "/images/social_cards_image.jpg",
  imageAlt:
    "Photograph of a software developer's desk with a laptop connecter to a monitor.",
  imageType: "image/jpeg",
});
</script>
