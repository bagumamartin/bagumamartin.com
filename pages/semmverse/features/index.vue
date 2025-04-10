<template>
  <div class="features-page">
    <!-- Header -->
    <section class="bg-indigo-700 text-white py-16">
      <div class="container mx-auto px-4">
        <h1
          class="text-4xl md:text-5xl font-bold mb-6 font-poppins text-center"
        >
          SemmVerse Features
        </h1>
        <p class="text-lg max-w-3xl mx-auto text-center font-lexend">
          Discover all the powerful features that make SemmVerse the ideal
          information management solution.
        </p>
      </div>
    </section>

    <!-- Feature Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-indigo-600 mb-4">
              <Icon name="material-symbols:auto-awesome" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">
              Smart Organization
            </h3>
            <p class="text-gray-600 font-lexend mb-4">
              Our AI-powered organization system automatically categorizes your
              information, saving you hours of manual sorting.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Auto-categorization of documents</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Smart tagging system</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Customizable organization rules</span>
              </li>
            </ul>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-indigo-600 mb-4">
              <Icon name="material-symbols:search" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Powerful Search</h3>
            <p class="text-gray-600 font-lexend mb-4">
              Find any piece of information instantly with our powerful natural
              language search engine.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Natural language queries</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Content-based search</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Filter by categories and tags</span>
              </li>
            </ul>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-indigo-600 mb-4">
              <Icon name="material-symbols:security" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Privacy First</h3>
            <p class="text-gray-600 font-lexend mb-4">
              Your data stays on your device. We prioritize your privacy with
              strong security measures.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Local data storage</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>End-to-end encryption</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>No data collection</span>
              </li>
            </ul>
          </div>

          <!-- Feature 4 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-indigo-600 mb-4">
              <Icon name="material-symbols:sync" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Seamless Sync</h3>
            <p class="text-gray-600 font-lexend mb-4">
              Optional encrypted sync between your devices ensures your
              information is always accessible.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Multi-device synchronization</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Encrypted data transfer</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Conflict resolution</span>
              </li>
            </ul>
          </div>

          <!-- Feature 5 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-indigo-600 mb-4">
              <Icon name="material-symbols:touch-app" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">
              Intuitive Interface
            </h3>
            <p class="text-gray-600 font-lexend mb-4">
              A user-friendly design that makes managing information effortless.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Clean, modern design</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Customizable dashboard</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Gesture controls</span>
              </li>
            </ul>
          </div>

          <!-- Feature 6 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-indigo-600 mb-4">
              <Icon name="material-symbols:notifications" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Smart Reminders</h3>
            <p class="text-gray-600 font-lexend mb-4">
              Never forget important information with intelligent reminder
              suggestions.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Context-aware reminders</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Priority-based notifications</span>
              </li>
              <li class="flex items-start">
                <span class="text-indigo-500 mr-2">✓</span>
                <span>Calendar integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-16 bg-indigo-50">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 font-poppins text-indigo-800"
        >
          SemmVerse vs Alternatives
        </h2>

        <div class="overflow-x-auto">
          <table class="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr class="bg-indigo-700 text-white">
                <th class="py-4 px-6 text-left">Feature</th>
                <th class="py-4 px-6 text-center">SemmVerse</th>
                <th class="py-4 px-6 text-center">Competitor A</th>
                <th class="py-4 px-6 text-center">Competitor B</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-6 font-medium">Privacy-First Approach</td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:check-circle"
                    class="text-green-500 mx-auto"
                  />
                </td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:close"
                    class="text-red-500 mx-auto"
                  />
                </td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:close"
                    class="text-red-500 mx-auto"
                  />
                </td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-6 font-medium">Smart Organization</td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:check-circle"
                    class="text-green-500 mx-auto"
                  />
                </td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:check-circle"
                    class="text-green-500 mx-auto"
                  />
                </td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:close"
                    class="text-red-500 mx-auto"
                  />
                </td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-6 font-medium">Natural Language Search</td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:check-circle"
                    class="text-green-500 mx-auto"
                  />
                </td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:close"
                    class="text-red-500 mx-auto"
                  />
                </td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:check-circle"
                    class="text-green-500 mx-auto"
                  />
                </td>
              </tr>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-6 font-medium">Cross-Platform Sync</td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:check-circle"
                    class="text-green-500 mx-auto"
                  />
                </td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:check-circle"
                    class="text-green-500 mx-auto"
                  />
                </td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:check-circle"
                    class="text-green-500 mx-auto"
                  />
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-medium">Ad-Free Experience</td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:check-circle"
                    class="text-green-500 mx-auto"
                  />
                </td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:close"
                    class="text-red-500 mx-auto"
                  />
                </td>
                <td class="py-4 px-6 text-center">
                  <Icon
                    name="material-symbols:check-circle"
                    class="text-green-500 mx-auto"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-indigo-700 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6 font-poppins">
          Ready to Get Started?
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto font-lexend">
          Join thousands of users who have simplified their information
          management with SemmVerse.
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
  title: "Features - SemmVerse App",
  description:
    "Explore the powerful features of SemmVerse, including smart organization, privacy-first design, seamless sync, and intuitive interface.",
});
</script>
