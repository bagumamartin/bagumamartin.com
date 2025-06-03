<template>
  <div class="semmverse-layout min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-indigo-700 text-white sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-4">
            <NuxtLink to="/semmverse" class="flex items-center">
              <!-- You can replace this with your app logo -->
              <div class="bg-white p-2 rounded-full">
                <span class="text-indigo-700 font-bold text-xl">S</span>
              </div>
              <span class="ml-2 font-bold text-xl">SemmVerse</span>
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <div class="block lg:hidden">
            <button
              @click="toggleMobileMenu"
              class="text-white focus:outline-none"
            >
              <Icon
                v-if="!showMobileMenu"
                name="heroicons:bars-3-20-solid"
                class="w-6 h-6"
              />
              <Icon v-else name="heroicons:x-mark-20-solid" class="w-6 h-6" />
            </button>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-8">
            <NuxtLink
              to="/semmverse"
              class="text-white hover:text-indigo-200 transition duration-300"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/semmverse/features"
              class="text-white hover:text-indigo-200 transition duration-300"
              >Features</NuxtLink
            >
            <NuxtLink
              to="/semmverse/privacy-policy"
              class="text-white hover:text-indigo-200 transition duration-300"
              >Privacy</NuxtLink
            >
            <a
              href="https://bagumamartin.com"
              class="text-white hover:text-indigo-200 transition duration-300"
              >Developer</a
            >
            <a
              href="#"
              class="bg-white text-indigo-700 px-4 py-2 rounded-full font-bold hover:bg-indigo-100 transition duration-300"
              >Download</a
            >
          </nav>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="showMobileMenu" class="lg:hidden bg-indigo-800">
        <div class="container mx-auto px-4 py-3">
          <div class="flex flex-col space-y-3">
            <NuxtLink
              to="/semmverse"
              class="text-white hover:text-indigo-200 transition duration-300 py-2"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/semmverse/features"
              class="text-white hover:text-indigo-200 transition duration-300 py-2"
              >Features</NuxtLink
            >
            <NuxtLink
              to="/semmverse/privacy-policy"
              class="text-white hover:text-indigo-200 transition duration-300 py-2"
              >Privacy</NuxtLink
            >
            <a
              href="https://bagumamartin.com"
              class="text-white hover:text-indigo-200 transition duration-300 py-2"
              >Developer</a
            >
            <a
              href="#"
              class="bg-white text-indigo-700 px-4 py-2 rounded-full font-bold hover:bg-indigo-100 transition duration-300 inline-block text-center mt-2"
              >Download</a
            >
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-indigo-900 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <div class="bg-white p-2 rounded-full">
                <span class="text-indigo-700 font-bold text-xl">S</span>
              </div>
              <span class="ml-2 font-bold text-xl">SemmVerse</span>
            </div>
            <p class="text-indigo-200 mb-4">
              Your personal information management app with privacy at its core.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-white hover:text-indigo-300">
                <Icon name="mdi:twitter" class="w-6 h-6" />
              </a>
              <a href="#" class="text-white hover:text-indigo-300">
                <Icon name="mdi:facebook" class="w-6 h-6" />
              </a>
              <a href="#" class="text-white hover:text-indigo-300">
                <Icon name="mdi:instagram" class="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/semmverse"
                  class="text-indigo-200 hover:text-white transition duration-300"
                  >Home</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/semmverse/features"
                  class="text-indigo-200 hover:text-white transition duration-300"
                  >Features</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/semmverse/privacy-policy"
                  class="text-indigo-200 hover:text-white transition duration-300"
                  >Privacy Policy</NuxtLink
                >
              </li>
              <li>
                <a
                  href="https://bagumamartin.com"
                  class="text-indigo-200 hover:text-white transition duration-300"
                  >Developer</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-lg mb-4">Contact</h3>
            <p class="text-indigo-200 mb-2">Questions or feedback?</p>
            <a
              href="mailto:martin@bagumamartin.com"
              class="text-indigo-200 hover:text-white transition duration-300"
              >martin@bagumamartin.com</a
            >
            <div class="mt-4">
              <a
                href="#"
                class="bg-white text-indigo-700 px-4 py-2 rounded-full font-bold hover:bg-indigo-100 transition duration-300 inline-block"
                >Download App</a
              >
            </div>
          </div>
        </div>

        <div
          class="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-300"
        >
          <p>
            &copy; {{ new Date().getFullYear() }} SemmVerse. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Mobile menu state
const showMobileMenu = ref(false);

// Function to toggle mobile menu
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

// Close mobile menu when route changes
const route = useRoute();
watch(
  () => route.path,
  () => {
    showMobileMenu.value = false;
  }
);

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | SemmVerse App`
      : "SemmVerse - Your Personal Information Manager";
  },
  meta: [
    {
      name: "description",
      content:
        "SemmVerse is a privacy-focused information management app that keeps your data secure and organized.",
    },
    {
      name: "theme-color",
      content: "#4338ca", // Indigo-700
    },
  ],
});
</script>

<style>
/* Add any app-specific global styles here */
html,
body {
  scroll-behavior: smooth;
}
</style>
