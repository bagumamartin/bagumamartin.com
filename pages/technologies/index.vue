<template>
  <div>
    <NuxtLazyHydrate when-visible>
      <div class="px-[2rem] py-[4rem] lg:px-[8rem]">
        <section class="flex flex-col gap-y-[6vh]">
          <div
            class="w-full text-center text-primary text-heading-3 font-poppins"
          >
            <h1>Technologies</h1>
          </div>

          <div
            class="text-paragraph text-black font-lexend text-center max-w-3xl mx-auto mb-8"
          >
            <p>
              The technology landscape is constantly evolving. I stay at the
              forefront by mastering a diverse range of programming languages,
              frameworks, and tools.
            </p>
            <p>
              Below are the primary technologies I work with to deliver
              exceptional software solutions.
            </p>
          </div>

          <!-- Technology Categories -->
          <div class="space-y-16">
            <!-- Frontend Technologies -->
            <div>
              <h2 class="text-2xl font-bold mb-6 text-primary font-poppins">
                Frontend Development
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <!-- Vue.js -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:vue" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Vue.js</h3>
                </div>

                <!-- Nuxt.js -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:nuxt-icon" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Nuxt.js</h3>
                </div>

                <!-- React -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:react" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">React</h3>
                </div>

                <!-- Next.js -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:nextjs-icon" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Next.js</h3>
                </div>

                <!-- Angular -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:angular-icon" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Angular</h3>
                </div>

                <!-- Tailwind CSS -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:tailwindcss-icon" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Tailwind CSS</h3>
                </div>
              </div>
            </div>

            <!-- Backend Technologies -->
            <div>
              <h2 class="text-2xl font-bold mb-6 text-primary font-poppins">
                Backend Development
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <!-- Node.js -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:nodejs-icon" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Node.js</h3>
                </div>

                <!-- Express -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:express" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Express</h3>
                </div>

                <!-- Python -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:python" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Python</h3>
                </div>

                <!-- Django -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:django-icon" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Django</h3>
                </div>

                <!-- PHP -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:php" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">PHP</h3>
                </div>

                <!-- Laravel -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:laravel" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Laravel</h3>
                </div>
              </div>
            </div>

            <!-- Mobile Development -->
            <div>
              <h2 class="text-2xl font-bold mb-6 text-primary font-poppins">
                Mobile Development
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <!-- React Native -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:react" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">React Native</h3>
                </div>

                <!-- Flutter -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:flutter" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Flutter</h3>
                </div>

                <!-- Swift -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:swift" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Swift</h3>
                </div>

                <!-- Kotlin -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:kotlin-icon" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Kotlin</h3>
                </div>
              </div>
            </div>

            <!-- Database & Storage -->
            <div>
              <h2 class="text-2xl font-bold mb-6 text-primary font-poppins">
                Database & Storage
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <!-- MongoDB -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:mongodb-icon" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">MongoDB</h3>
                </div>

                <!-- PostgreSQL -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:postgresql" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">PostgreSQL</h3>
                </div>

                <!-- MySQL -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:mysql" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">MySQL</h3>
                </div>

                <!-- Firebase -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:firebase" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Firebase</h3>
                </div>

                <!-- Redis -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:redis" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Redis</h3>
                </div>

                <!-- GraphQL -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:graphql" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">GraphQL</h3>
                </div>
              </div>
            </div>

            <!-- DevOps & Cloud -->
            <div>
              <h2 class="text-2xl font-bold mb-6 text-primary font-poppins">
                DevOps & Cloud
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <!-- Docker -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:docker-icon" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Docker</h3>
                </div>

                <!-- Kubernetes -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:kubernetes" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Kubernetes</h3>
                </div>

                <!-- AWS -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:aws" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">AWS</h3>
                </div>

                <!-- Google Cloud -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:google-cloud" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Google Cloud</h3>
                </div>

                <!-- Azure -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:azure-icon" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Azure</h3>
                </div>

                <!-- GitLab CI/CD -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:gitlab" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">GitLab CI/CD</h3>
                </div>
              </div>
            </div>

            <!-- Data Science & AI -->
            <div>
              <h2 class="text-2xl font-bold mb-6 text-primary font-poppins">
                Data Science & AI
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <!-- TensorFlow -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:tensorflow" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">TensorFlow</h3>
                </div>

                <!-- PyTorch -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="logos:pytorch-icon" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">PyTorch</h3>
                </div>

                <!-- Pandas -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="simple-icons:pandas" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Pandas</h3>
                </div>

                <!-- Scikit-learn -->
                <div class="bg-white p-6 rounded-lg shadow-md text-center">
                  <div class="h-16 flex items-center justify-center mb-4">
                    <Icon name="simple-icons:scikitlearn" class="text-5xl" />
                  </div>
                  <h3 class="font-semibold font-lexend">Scikit-learn</h3>
                </div>
              </div>
            </div>
          </div>

          <!-- Expertise Level Indication -->
          <div class="mt-12">
            <h2
              class="text-2xl font-bold mb-6 text-primary font-poppins text-center"
            >
              My Technical Expertise
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="font-bold mb-4 text-lg">Programming Languages</h3>

                <div class="space-y-4">
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="font-medium font-lexend"
                        >JavaScript/TypeScript</span
                      >
                      <span>95%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-primary h-2 rounded-full"
                        style="width: 95%"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="font-medium font-lexend">Python</span>
                      <span>90%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-primary h-2 rounded-full"
                        style="width: 90%"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="font-medium font-lexend">PHP</span>
                      <span>85%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-primary h-2 rounded-full"
                        style="width: 85%"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="font-medium font-lexend">Java</span>
                      <span>80%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-primary h-2 rounded-full"
                        style="width: 80%"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="font-medium font-lexend">Swift</span>
                      <span>75%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-primary h-2 rounded-full"
                        style="width: 75%"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="font-bold mb-4 text-lg">Frameworks & Tools</h3>

                <div class="space-y-4">
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="font-medium font-lexend"
                        >Vue.js/Nuxt.js</span
                      >
                      <span>95%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-primary h-2 rounded-full"
                        style="width: 95%"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="font-medium font-lexend"
                        >React & React Native</span
                      >
                      <span>90%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-primary h-2 rounded-full"
                        style="width: 90%"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="font-medium font-lexend"
                        >Node.js/Express</span
                      >
                      <span>85%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-primary h-2 rounded-full"
                        style="width: 85%"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="font-medium font-lexend">Django</span>
                      <span>80%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-primary h-2 rounded-full"
                        style="width: 80%"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="font-medium font-lexend"
                        >Docker & Kubernetes</span
                      >
                      <span>75%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-primary h-2 rounded-full"
                        style="width: 75%"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Call to Action -->
          <div
            class="mt-16 bg-primary bg-opacity-10 rounded-lg p-8 text-center"
          >
            <h2 class="text-2xl font-bold mb-4 text-primary font-poppins">
              Need a Technology Expert?
            </h2>
            <p class="mb-8 font-lexend">
              Whether you need a specific technology or are open to
              recommendations, I can help you choose the right stack for your
              project.
            </p>
            <div class="flex flex-col md:flex-row gap-4 justify-center">
              <UtilitiesButton
                class="rounded-full bg-accent"
                label="View My Projects"
                navigation-path="/samples"
              />
              <UtilitiesButton
                class="rounded-full bg-primary"
                label="Contact Me"
                navigation-path="/contact"
              />
            </div>
          </div>
        </section>
      </div>
    </NuxtLazyHydrate>
  </div>
</template>

<script setup lang="ts">
// Custom function to define CreativeWork schema
const defineCreativeWork = (creativeWork: any) => {
  return {
    "@type": "CreativeWork",
    ...creativeWork,
  };
};

definePageMeta({
  title: "Technologies I Use",
  description:
    "Explore the programming languages, frameworks, platforms, and tools I am proficient in. Discover the tools I use for robust solutions.",
  image: "/images/social_cards_image.jpg",
  imageAlt:
    "Photograph of a software developer's desk with a laptop connecter to a monitor.",
  imageType: "image/jpeg",
});

// JSON-LD Schema Markup for Technologies Page
useSchemaOrg([
  defineWebPage({
    name: "Technologies Used by Baguma Martin",
    description:
      "Programming languages, frameworks, and tools used by Baguma Martin for software development",
  }),
  defineItemList({
    name: "Technology Categories",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Frontend Development",
        description: "Vue.js, Nuxt.js, React, Next.js, Angular, Tailwind CSS",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Backend Development",
        description: "Node.js, Express, Python, Django, PHP, Laravel",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mobile Development",
        description: "React Native, Flutter, Swift, Kotlin",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Database & Storage",
        description: "MongoDB, PostgreSQL, MySQL, Firebase, Redis, GraphQL",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "DevOps & Cloud",
        description:
          "Docker, Kubernetes, AWS, Google Cloud, Azure, GitLab CI/CD",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Data Science & AI",
        description: "TensorFlow, PyTorch, Pandas, Scikit-learn",
      },
    ],
  }),
  defineCreativeWork({
    name: "Technical Skills Assessment",
    creator: {
      "@type": "Person",
      name: "Baguma Martin",
    },
    abstract:
      "Detailed assessment of technical expertise across multiple programming disciplines and technologies",
    audience: {
      "@type": "Audience",
      audienceType: "Businesses seeking software development services",
    },
    keywords: [
      "Vue.js",
      "React",
      "Node.js",
      "Python",
      "Django",
      "Mobile Development",
      "Machine Learning",
      "Cloud Computing",
      "DevOps",
      "Database Design",
    ],
  }),
]);
</script>
