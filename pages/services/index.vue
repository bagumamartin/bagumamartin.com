<template>
  <div>
    <NuxtLazyHydrate when-visible>
      <div class="px-[2rem] py-[4rem] lg:px-[8rem]">
        <section class="flex flex-col gap-y-[6vh]">
          <div
            class="w-full text-center text-primary text-heading-3 font-poppins"
          >
            <h1>Services</h1>
          </div>

          <div
            class="text-paragraph text-black font-lexend text-center max-w-3xl mx-auto mb-8"
          >
            <p>
              I offer comprehensive software development services tailored to
              your specific needs. From concept to deployment, I provide
              end-to-end solutions that drive business growth and enhance user
              experience.
            </p>
          </div>

          <!-- Services Categories -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Web Development -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-40 bg-primary flex items-center justify-center">
                <Icon name="mdi:web" class="text-6xl text-white" />
              </div>
              <div class="p-6">
                <h2 class="text-xl font-bold mb-4 font-poppins text-primary">
                  Web Application Development
                </h2>
                <ul class="space-y-2 font-lexend mb-6">
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Responsive website design</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>E-commerce solutions</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Web portals and dashboards</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Progressive Web Apps (PWAs)</span>
                  </li>
                </ul>
                <p class="text-gray-700 mb-4 font-lexend text-sm">
                  Using modern frameworks like Vue.js/Nuxt, React, Angular, and
                  backend technologies including Node.js, Python, and PHP.
                </p>
              </div>
            </div>

            <!-- Mobile Development -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-40 bg-secondary flex items-center justify-center">
                <Icon name="mdi:cellphone" class="text-6xl text-white" />
              </div>
              <div class="p-6">
                <h2 class="text-xl font-bold mb-4 font-poppins text-primary">
                  Mobile Application Development
                </h2>
                <ul class="space-y-2 font-lexend mb-6">
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Native iOS applications</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Native Android applications</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Cross-platform solutions</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>App maintenance and updates</span>
                  </li>
                </ul>
                <p class="text-gray-700 mb-4 font-lexend text-sm">
                  Creating mobile experiences with React Native, Flutter, Swift
                  for iOS, and Kotlin for Android.
                </p>
              </div>
            </div>

            <!-- Custom Solutions -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-40 bg-accent flex items-center justify-center">
                <Icon name="mdi:tools" class="text-6xl text-white" />
              </div>
              <div class="p-6">
                <h2 class="text-xl font-bold mb-4 font-poppins text-primary">
                  Custom Software Solutions
                </h2>
                <ul class="space-y-2 font-lexend mb-6">
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Desktop applications</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Enterprise solutions</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Healthcare systems</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Integration services</span>
                  </li>
                </ul>
                <p class="text-gray-700 mb-4 font-lexend text-sm">
                  Building bespoke applications that address your unique
                  business challenges and requirements.
                </p>
              </div>
            </div>

            <!-- Data & AI -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-40 bg-blue-500 flex items-center justify-center">
                <Icon name="mdi:brain" class="text-6xl text-white" />
              </div>
              <div class="p-6">
                <h2 class="text-xl font-bold mb-4 font-poppins text-primary">
                  Data Science & AI Solutions
                </h2>
                <ul class="space-y-2 font-lexend mb-6">
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Data analysis and visualization</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Machine learning models</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Predictive analytics</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Natural language processing</span>
                  </li>
                </ul>
                <p class="text-gray-700 mb-4 font-lexend text-sm">
                  Leveraging data science and AI technologies to extract
                  insights and create intelligent solutions.
                </p>
              </div>
            </div>

            <!-- Consulting -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-40 bg-purple-500 flex items-center justify-center">
                <Icon name="mdi:chart-line" class="text-6xl text-white" />
              </div>
              <div class="p-6">
                <h2 class="text-xl font-bold mb-4 font-poppins text-primary">
                  Technical Consulting
                </h2>
                <ul class="space-y-2 font-lexend mb-6">
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Technology assessment</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Architecture planning</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Code reviews and optimization</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Technical strategy and roadmapping</span>
                  </li>
                </ul>
                <p class="text-gray-700 mb-4 font-lexend text-sm">
                  Providing expert guidance to make informed technical decisions
                  for your business.
                </p>
              </div>
            </div>

            <!-- Cybersecurity -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-40 bg-gray-800 flex items-center justify-center">
                <Icon name="mdi:shield-lock" class="text-6xl text-white" />
              </div>
              <div class="p-6">
                <h2 class="text-xl font-bold mb-4 font-poppins text-primary">
                  Cybersecurity Services
                </h2>
                <ul class="space-y-2 font-lexend mb-6">
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Security assessment</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Vulnerability testing</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Security implementation</span>
                  </li>
                  <li class="flex items-center">
                    <Icon
                      name="material-symbols:check-circle"
                      class="text-green-500 mr-2"
                    />
                    <span>Compliance guidance</span>
                  </li>
                </ul>
                <p class="text-gray-700 mb-4 font-lexend text-sm">
                  Protecting your digital assets with comprehensive security
                  solutions and best practices.
                </p>
              </div>
            </div>
          </div>

          <!-- Process Section -->
          <div class="mt-16">
            <h2
              class="text-2xl font-bold mb-8 text-center text-primary font-poppins"
            >
              My Development Process
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <div
                  class="inline-block p-3 rounded-full bg-primary bg-opacity-10 mb-4"
                >
                  <Icon name="mdi:lightbulb" class="text-4xl text-primary" />
                </div>
                <h3 class="text-lg font-semibold mb-2">1. Discovery</h3>
                <p class="font-lexend text-sm">
                  Understanding your requirements, objectives, and challenges
                  through in-depth consultation.
                </p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <div
                  class="inline-block p-3 rounded-full bg-primary bg-opacity-10 mb-4"
                >
                  <Icon name="mdi:pencil" class="text-4xl text-primary" />
                </div>
                <h3 class="text-lg font-semibold mb-2">2. Planning & Design</h3>
                <p class="font-lexend text-sm">
                  Creating detailed project plans, wireframes, and architecture
                  designs tailored to your needs.
                </p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <div
                  class="inline-block p-3 rounded-full bg-primary bg-opacity-10 mb-4"
                >
                  <Icon name="mdi:code-tags" class="text-4xl text-primary" />
                </div>
                <h3 class="text-lg font-semibold mb-2">3. Development</h3>
                <p class="font-lexend text-sm">
                  Building your solution using best practices, with regular
                  updates and milestone reviews.
                </p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md text-center">
                <div
                  class="inline-block p-3 rounded-full bg-primary bg-opacity-10 mb-4"
                >
                  <Icon
                    name="mdi:rocket-launch"
                    class="text-4xl text-primary"
                  />
                </div>
                <h3 class="text-lg font-semibold mb-2">
                  4. Deployment & Support
                </h3>
                <p class="font-lexend text-sm">
                  Launching your solution and providing ongoing maintenance and
                  enhancement services.
                </p>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div
            class="mt-16 bg-primary bg-opacity-10 rounded-lg p-8 text-center"
          >
            <h2 class="text-2xl font-bold mb-4 text-primary font-poppins">
              Ready to Start Your Project?
            </h2>
            <p class="mb-8 font-lexend">
              Let's discuss how I can help bring your vision to life with custom
              software solutions.
            </p>
            <UtilitiesButton
              class="w-[70vw] rounded-full bg-accent md:w-[40vw] lg:w-[20vw]"
              label="Get in Touch"
              navigation-path="/contact"
            />
          </div>
        </section>
      </div>
    </NuxtLazyHydrate>
  </div>
</template>

<script setup lang="ts">
// Import the injector plugin
const { $injectSchema } = useNuxtApp() as unknown as {
  $injectSchema: (schema: any[]) => void;
};

definePageMeta({
  title: "Software Applications Development Services",
  description:
    "Discover the top notch applications development services I offer. I will help you create an application that meets your specific needs. Let's turn your ideas into reality with cutting-edge solutions.",
  image: "/images/social_cards_image.jpg",
  imageAlt:
    "Photograph of a software developer's desk with a laptop connecter to a monitor.",
  imageType: "image/jpeg",
});

// Directly inject JSON-LD schema data for better compatibility with Rich Results
onMounted(() => {
  $injectSchema([
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Software Development Services",
      description:
        "Comprehensive software development services offered by Baguma Martin",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Software Development Services",
      provider: {
        "@type": "Person",
        name: "Baguma Martin Amanya",
        url: "https://bagumamartin.com",
      },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      description:
        "Professional software development services including web applications, mobile apps, custom solutions, data science, technical consulting and cybersecurity services.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        price: "Varies",
        priceCurrency: "EUR",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Services Offered",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            name: "Web Application Development",
            description:
              "Responsive websites, e-commerce solutions, web portals, and progressive web apps",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            name: "Mobile Application Development",
            description:
              "Native iOS and Android applications, cross-platform solutions",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            name: "Custom Software Solutions",
            description:
              "Desktop applications, enterprise solutions, healthcare systems",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            name: "Data Science & AI Solutions",
            description:
              "Data analysis, machine learning models, predictive analytics",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Service",
            name: "Technical Consulting",
            description:
              "Technology assessment, architecture planning, code reviews",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Service",
            name: "Cybersecurity Services",
            description:
              "Security assessment, vulnerability testing, compliance guidance",
          },
        },
      ],
    },
  ]);
});
</script>
