<template>
  <div class="bodysync-home">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-blue-600 to-green-400 text-white py-16"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 font-poppins">
              Track Your Health Journey with BodySync
            </h1>
            <p class="text-lg mb-8 font-lexend">
              Your personal health companion that helps you monitor, analyze,
              and improve your fitness and well-being.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                class="bg-white text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300 text-center"
              >
                Download App
              </a>
              <a
                href="#features"
                class="border border-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div class="md:w-1/2">
            <div class="aspect-w-9 aspect-h-16 max-w-xs mx-auto">
              <div class="bg-blue-800 rounded-3xl p-3 shadow-xl">
                <div
                  class="bg-blue-900 rounded-2xl h-full flex items-center justify-center"
                >
                  <p class="text-xl text-center px-6">
                    App Screenshot Placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 font-poppins text-blue-800"
        >
          Key Features
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <Icon name="material-symbols:monitoring" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Health Tracking</h3>
            <p class="text-gray-600 font-lexend">
              Monitor key health metrics like weight, BMI, body fat percentage,
              and more in one centralized dashboard.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <Icon name="material-symbols:insights" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">
              Progress Analysis
            </h3>
            <p class="text-gray-600 font-lexend">
              View detailed charts and insights to understand your health trends
              and progress over time.
            </p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-blue-600 mb-4">
              <Icon name="material-symbols:privacy-tip" class="text-4xl" />
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Data Privacy</h3>
            <p class="text-gray-600 font-lexend">
              Your health data remains securely stored on your device and isn't
              shared with external servers.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works Section -->
    <section class="bg-blue-50 py-16">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 font-poppins text-blue-800"
        >
          How BodySync Works
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="bg-blue-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-3xl font-bold text-blue-700">1</span>
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Input Data</h3>
            <p class="text-gray-600 font-lexend">
              Enter your health metrics or connect to compatible devices.
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-blue-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-3xl font-bold text-blue-700">2</span>
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Track Progress</h3>
            <p class="text-gray-600 font-lexend">
              Monitor changes and track your journey with visual graphs.
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-blue-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-3xl font-bold text-blue-700">3</span>
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Get Insights</h3>
            <p class="text-gray-600 font-lexend">
              Receive personalized health insights and recommendations.
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-blue-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <span class="text-3xl font-bold text-blue-700">4</span>
            </div>
            <h3 class="font-bold text-xl mb-3 font-poppins">Achieve Goals</h3>
            <p class="text-gray-600 font-lexend">
              Set realistic health goals and celebrate your progress.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6 font-poppins text-blue-800">
          Get BodySync Today
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto font-lexend text-gray-700">
          Join thousands of users who have transformed their health journey with
          BodySync.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            class="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition duration-300 flex items-center justify-center"
          >
            <Icon name="mdi:apple" class="mr-2 text-2xl" /> App Store
          </a>
          <a
            href="#"
            class="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            <Icon name="mdi:google-play" class="mr-2 text-2xl" /> Google Play
          </a>
        </div>
      </div>
    </section>

    <!-- User Reviews -->
    <section class="bg-blue-50 py-16">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 font-poppins text-blue-800"
        >
          User Reviews
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <Icon name="material-symbols:star" v-for="i in 5" :key="i" />
              </div>
            </div>
            <p class="text-gray-600 italic mb-4 font-lexend">
              "BodySync has been instrumental in my weight loss journey. Being
              able to visualize my progress keeps me motivated."
            </p>
            <p class="font-bold">James R.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <Icon name="material-symbols:star" v-for="i in 5" :key="i" />
              </div>
            </div>
            <p class="text-gray-600 italic mb-4 font-lexend">
              "I love that my data stays private. The charts and insights make
              it easy to understand my health trends."
            </p>
            <p class="font-bold">Emma W.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <Icon name="material-symbols:star" v-for="i in 5" :key="i" />
              </div>
            </div>
            <p class="text-gray-600 italic mb-4 font-lexend">
              "As someone with fitness goals, BodySync has been a game-changer.
              The interface is intuitive and the insights are valuable."
            </p>
            <p class="font-bold">David L.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "bodysync",
  title: "BodySync - Health & Fitness Companion App",
  description:
    "BodySync is your personal health companion that helps you monitor, analyze, and improve your fitness and well-being.",
});

// Add any additional script logic here
</script>
