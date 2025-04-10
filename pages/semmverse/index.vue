<template>
  <div class="semmverse-home">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-indigo-700 to-purple-800 text-white py-16 md:py-24"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 font-poppins">
              Manage Your Information With Complete Privacy
            </h1>
            <p class="text-lg md:text-xl mb-8 font-lexend text-indigo-100">
              SemmVerse keeps your personal data secure and private while giving
              you powerful tools to organize your digital life.
            </p>
            <div
              class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a
                href="#"
                class="bg-white text-indigo-700 px-6 py-3 rounded-lg font-bold hover:bg-indigo-100 transition duration-300 flex items-center justify-center"
              >
                <Icon name="mdi:apple" class="mr-2 text-2xl" /> App Store
              </a>
              <a
                href="#"
                class="border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-600 transition duration-300 flex items-center justify-center"
              >
                <Icon name="mdi:google-play" class="mr-2 text-2xl" /> Google
                Play
              </a>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <!-- Placeholder for app screenshot/mockup -->
            <div
              class="w-3/4 h-96 bg-indigo-900 rounded-3xl border-4 border-indigo-500 shadow-2xl flex items-center justify-center"
            >
              <div class="text-center">
                <div class="bg-white p-3 rounded-full inline-block mb-4">
                  <span class="text-indigo-700 font-bold text-3xl">S</span>
                </div>
                <p class="text-xl font-semibold">SemmVerse App</p>
                <p class="text-sm text-indigo-300">App Screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Overview -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 font-poppins text-indigo-800"
        >
          Key Features
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-indigo-600 mb-4">
              <Icon name="material-symbols:lock" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">
              Privacy-First Design
            </h3>
            <p class="text-gray-600 font-lexend">
              All your data stays on your device. We don't collect, store, or
              process any of your personal information.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-indigo-600 mb-4">
              <Icon name="material-symbols:folder" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">
              Powerful Organization
            </h3>
            <p class="text-gray-600 font-lexend">
              Categorize, tag, and sort all your digital content in a way that
              makes sense to you.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-indigo-600 mb-4">
              <Icon name="material-symbols:search" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Instant Search</h3>
            <p class="text-gray-600 font-lexend">
              Find what you need instantly with powerful search functionality
              that works even offline.
            </p>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="/semmverse/features"
            class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition duration-300"
          >
            Explore All Features
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 font-poppins text-indigo-800"
        >
          How SemmVerse Works
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div
              class="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-indigo-600 font-bold text-xl">1</span>
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Download</h3>
            <p class="text-gray-600 font-lexend">
              Get SemmVerse from the App Store or Google Play Store.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="text-center">
            <div
              class="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-indigo-600 font-bold text-xl">2</span>
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Set Up</h3>
            <p class="text-gray-600 font-lexend">
              Create your categories and customize your organization system.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="text-center">
            <div
              class="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-indigo-600 font-bold text-xl">3</span>
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Add Content</h3>
            <p class="text-gray-600 font-lexend">
              Import or create content directly in the app.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="text-center">
            <div
              class="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-indigo-600 font-bold text-xl">4</span>
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Enjoy</h3>
            <p class="text-gray-600 font-lexend">
              Access your organized digital life anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-indigo-900 text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 font-poppins">
          What Our Users Say
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-indigo-800 p-8 rounded-lg">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400">
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star" />
              </div>
              <span class="ml-2">5.0</span>
            </div>
            <p class="italic mb-6 font-lexend">
              "SemmVerse completely transformed how I manage my digital
              information. The privacy-focused approach gives me peace of mind."
            </p>
            <div class="font-semibold">Alex M.</div>
            <div class="text-indigo-300 text-sm">Software Developer</div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-indigo-800 p-8 rounded-lg">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400">
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star" />
              </div>
              <span class="ml-2">5.0</span>
            </div>
            <p class="italic mb-6 font-lexend">
              "The search functionality is incredible. I can find any document
              or note in seconds, even when I'm offline."
            </p>
            <div class="font-semibold">Sarah K.</div>
            <div class="text-indigo-300 text-sm">Project Manager</div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-indigo-800 p-8 rounded-lg">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400">
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star" />
                <Icon name="material-symbols:star-half" />
              </div>
              <span class="ml-2">4.5</span>
            </div>
            <p class="italic mb-6 font-lexend">
              "As someone who values privacy, I appreciate that SemmVerse keeps
              all my data local. The organization features are just a bonus!"
            </p>
            <div class="font-semibold">Jamie T.</div>
            <div class="text-indigo-300 text-sm">Privacy Advocate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2
          class="text-3xl font-bold text-center mb-12 font-poppins text-indigo-800"
        >
          Frequently Asked Questions
        </h2>

        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="font-bold text-lg mb-2 font-poppins">
              Is SemmVerse really privacy-focused?
            </h3>
            <p class="text-gray-600 font-lexend">
              Yes! All your data is stored locally on your device. We don't
              collect or transmit any of your personal information to external
              servers.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="font-bold text-lg mb-2 font-poppins">
              Do I need an internet connection to use SemmVerse?
            </h3>
            <p class="text-gray-600 font-lexend">
              No, SemmVerse works completely offline. You only need an internet
              connection to download the app and any updates.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="font-bold text-lg mb-2 font-poppins">
              Can I backup my data?
            </h3>
            <p class="text-gray-600 font-lexend">
              Yes, SemmVerse offers encrypted backup options that you can save
              to your preferred cloud storage service or locally.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <h3 class="font-bold text-lg mb-2 font-poppins">
              Is SemmVerse free to use?
            </h3>
            <p class="text-gray-600 font-lexend">
              SemmVerse offers a free version with core features. A premium
              version is available with additional organization options and
              advanced search capabilities.
            </p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="mb-4 text-gray-600 font-lexend">Have more questions?</p>
          <a
            href="mailto:support@semmverse.com"
            class="text-indigo-600 hover:text-indigo-800 font-bold"
            >Contact our support team</a
          >
        </div>
      </div>
    </section>

    <!-- Download CTA -->
    <section
      class="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white"
    >
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6 font-poppins">
          Get SemmVerse Today
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto font-lexend">
          Take control of your digital life with privacy and organization at its
          core.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            class="bg-white text-indigo-700 px-6 py-3 rounded-lg font-bold hover:bg-indigo-100 transition duration-300 flex items-center justify-center"
          >
            <Icon name="mdi:apple" class="mr-2 text-2xl" /> App Store
          </a>
          <a
            href="#"
            class="border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-600 transition duration-300 flex items-center justify-center"
          >
            <Icon name="mdi:google-play" class="mr-2 text-2xl" /> Google Play
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "semmverse",
  title: "SemmVerse - Privacy-First Information Manager",
  description:
    "SemmVerse is a privacy-focused information manager app that keeps your personal data organized and secure on your device.",
});
</script>
