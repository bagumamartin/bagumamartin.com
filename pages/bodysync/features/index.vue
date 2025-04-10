<template>
  <div class="features-page">
    <!-- Header -->
    <section
      class="bg-gradient-to-r from-blue-600 to-green-400 text-white py-16"
    >
      <div class="container mx-auto px-4">
        <h1
          class="text-4xl md:text-5xl font-bold mb-6 font-poppins text-center"
        >
          BodySync Features
        </h1>
        <p class="text-lg max-w-3xl mx-auto text-center font-lexend">
          Discover all the powerful features that make BodySync your perfect
          health and fitness companion.
        </p>
      </div>
    </section>

    <!-- Feature Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <Icon name="material-symbols:monitoring" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">
              Comprehensive Health Tracking
            </h3>
            <p class="text-gray-600 font-lexend mb-4">
              Monitor a wide range of health metrics to get a complete picture
              of your overall well-being.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Weight and BMI tracking</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Body measurements</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Body fat percentage calculation</span>
              </li>
            </ul>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <Icon name="material-symbols:insights" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">
              Advanced Analytics
            </h3>
            <p class="text-gray-600 font-lexend mb-4">
              Gain valuable insights from your health data with detailed charts
              and progress tracking.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Visual progress charts</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Trend analysis</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Custom reporting periods</span>
              </li>
            </ul>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <Icon name="material-symbols:goal" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Goal Setting</h3>
            <p class="text-gray-600 font-lexend mb-4">
              Set personalized health goals and track your progress toward
              achieving them.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Custom goal creation</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Progress visualization</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Achievement celebrations</span>
              </li>
            </ul>
          </div>

          <!-- Feature 4 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <Icon name="material-symbols:privacy-tip" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">
              Privacy Protection
            </h3>
            <p class="text-gray-600 font-lexend mb-4">
              Your health data stays on your device and isn't shared with
              external servers.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Local data storage</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Optional backup encryption</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>No data collection</span>
              </li>
            </ul>
          </div>

          <!-- Feature 5 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <Icon name="material-symbols:calendar-month" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Health Journal</h3>
            <p class="text-gray-600 font-lexend mb-4">
              Keep track of how you feel and any health-related notes in a
              dedicated journal.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Daily wellness logs</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Mood tracking</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Custom health categories</span>
              </li>
            </ul>
          </div>

          <!-- Feature 6 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <Icon name="material-symbols:notifications" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Smart Reminders</h3>
            <p class="text-gray-600 font-lexend mb-4">
              Never miss a health check-in with customizable reminders and
              notifications.
            </p>
            <ul class="space-y-2 font-lexend text-gray-700">
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Customizable schedules</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Progress check-ins</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">✓</span>
                <span>Goal milestone alerts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Health Calculators Section -->
    <section class="py-16 bg-blue-50">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 font-poppins text-blue-800"
        >
          Health Calculators
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div
              class="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                name="material-symbols:scale"
                class="text-3xl text-blue-600"
              />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">BMI Calculator</h3>
            <p class="text-gray-600 font-lexend">
              Calculate your Body Mass Index to understand your weight relative
              to your height.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div
              class="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                name="material-symbols:water-drop"
                class="text-3xl text-blue-600"
              />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">
              Body Fat Calculator
            </h3>
            <p class="text-gray-600 font-lexend">
              Estimate your body fat percentage using various measurement
              methods.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div
              class="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                name="material-symbols:local-fire-department"
                class="text-3xl text-blue-600"
              />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">
              Calorie Calculator
            </h3>
            <p class="text-gray-600 font-lexend">
              Determine your daily caloric needs based on your activity level
              and goals.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div
              class="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Icon
                name="material-symbols:fitness-center"
                class="text-3xl text-blue-600"
              />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">
              Macro Calculator
            </h3>
            <p class="text-gray-600 font-lexend">
              Calculate your ideal macronutrient balance for your fitness and
              health goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 font-poppins text-blue-800"
        >
          BodySync vs Alternatives
        </h2>

        <div class="overflow-x-auto">
          <table class="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr class="bg-blue-600 text-white">
                <th class="py-4 px-6 text-left">Feature</th>
                <th class="py-4 px-6 text-center">BodySync</th>
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
                <td class="py-4 px-6 font-medium">Advanced Health Analytics</td>
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
                <td class="py-4 px-6 font-medium">Offline Functionality</td>
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
                <td class="py-4 px-6 font-medium">
                  Multiple Health Calculators
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
    <section
      class="bg-gradient-to-r from-blue-600 to-green-400 text-white py-16"
    >
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6 font-poppins">
          Start Your Health Journey Today
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto font-lexend">
          Join thousands of users who have transformed their health journey with
          BodySync.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            class="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition duration-300 flex items-center justify-center"
          >
            <Icon name="mdi:apple" class="mr-2 text-2xl" /> App Store
          </a>
          <a
            href="#"
            class="border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-300 flex items-center justify-center"
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
  layout: "bodysync",
  title: "Features - BodySync App",
  description:
    "Explore the powerful features of BodySync, including health tracking, analytics, goal setting, and privacy protection.",
});
</script>
