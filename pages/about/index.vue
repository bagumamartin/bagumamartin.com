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
  title: "About Baguma Martin",
  description:
    "Get to know more about me as an applications developer. Learn about my background, skills, projects, and passion for creating innovative solutions",
  image: "/images/profile.png",
  imageAlt: "Profile photograph of Baguma Martin",
  imageType: "image/png",
});
</script>
