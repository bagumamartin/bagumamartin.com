<template>
  <div>
    <NuxtLazyHydrate when-visible>
      <div class="px-[2rem] py-[4rem] lg:px-[8rem]">
        <section class="flex flex-col gap-y-[6vh]">
          <div
            class="w-full text-center text-primary text-heading-3 font-poppins"
          >
            <h1>About Me</h1>
          </div>

          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <!-- Profile Photo -->
            <div class="lg:col-span-1">
              <div class="flex justify-center lg:justify-start">
                <div
                  class="w-64 h-64 overflow-hidden rounded-full border-4 border-primary"
                >
                  <nuxt-img
                    src="/images/profile.png"
                    alt="Martin profile photograph"
                    format="webp"
                    loading="lazy"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <!-- Professional Summary -->
            <div class="lg:col-span-2">
              <div
                class="text-paragraph text-black font-lexend space-y-[1.5rem]"
              >
                <h2 class="text-2xl font-bold text-primary font-poppins">
                  Martin
                </h2>
                <p class="italic text-lg">
                  Pharmaceutical Sciences Student & Self‑Taught Programmer
                </p>
                <p>
                  I am currently studying Pharmaceutical Sciences in Budapest,
                  Hungary, and have developed a passion for programming through
                  self‑directed learning. My background in the pharmaceutical
                  sciences gives me a strong foundation in analytical thinking,
                  while my coding projects sharpen my problem‑solving and
                  creative skills.
                </p>
                <p>
                  Over the past few years, I’ve built web and mobile
                  applications to tackle real‑world challenges, from lab data
                  visualizations to simple productivity tools. I enjoy bridging
                  the gap between healthcare knowledge and technology to create
                  practical solutions.
                </p>
              </div>
            </div>
          </div>

          <!-- Skills Section -->
          <div class="mt-8">
            <h2 class="text-2xl font-bold mb-6 text-primary font-poppins">
              My Expertise
            </h2>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <!-- Web Development -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                  <Icon name="mdi:web" class="text-4xl text-primary mr-4" />
                  <h3 class="text-xl font-semibold">Web Development</h3>
                </div>
                <p class="font-lexend">
                  Building responsive, accessible web applications using modern
                  frameworks and best practices.
                </p>
              </div>

              <!-- Mobile Development -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                  <Icon
                    name="mdi:cellphone"
                    class="text-4xl text-primary mr-4"
                  />
                  <h3 class="text-xl font-semibold">Mobile Development</h3>
                </div>
                <p class="font-lexend">
                  Creating cross-platform mobile apps with intuitive user
                  experiences.
                </p>
              </div>

              <!-- Data Science -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                  <Icon
                    name="mdi:chart-bar"
                    class="text-4xl text-primary mr-4"
                  />
                  <h3 class="text-xl font-semibold">Data Science</h3>
                </div>
                <p class="font-lexend">
                  Analyzing datasets to extract insights and build predictive
                  models.
                </p>
              </div>

              <!-- Systems Development -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                  <Icon name="mdi:server" class="text-4xl text-primary mr-4" />
                  <h3 class="text-xl font-semibold">Systems Development</h3>
                </div>
                <p class="font-lexend">
                  Designing efficient, scalable system architectures.
                </p>
              </div>

              <!-- Cybersecurity -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                  <Icon
                    name="mdi:shield-lock"
                    class="text-4xl text-primary mr-4"
                  />
                  <h3 class="text-xl font-semibold">Cybersecurity</h3>
                </div>
                <p class="font-lexend">
                  Identifying vulnerabilities and enforcing security measures.
                </p>
              </div>

              <!-- Pharmaceutical Solutions -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                  <Icon
                    name="mdi:medical-bag"
                    class="text-4xl text-primary mr-4"
                  />
                  <h3 class="text-xl font-semibold">
                    Pharmaceutical Solutions
                  </h3>
                </div>
                <p class="font-lexend">
                  Applying pharmaceutical knowledge to develop healthcare
                  technology tools.
                </p>
              </div>
            </div>
          </div>

          <!-- Education and Background -->
          <div class="mt-8">
            <h2 class="text-2xl font-bold mb-6 text-primary font-poppins">
              Education & Experience
            </h2>

            <div class="space-y-6 font-lexend">
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-2">
                  Professional Experience
                </h3>
                <ul class="list-disc pl-5 space-y-4">
                  <li>
                    <div class="font-bold">Self‑Taught Programmer</div>
                    <div class="text-gray-700">2019 - Present</div>
                    <p>
                      Developing personal projects and contributing to
                      open‑source libraries. Nowadays am focused on healthcare
                      tech and productivity.
                    </p>
                  </li>
                </ul>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-2">Education</h3>
                <ul class="list-disc pl-5 space-y-4">
                  <li>
                    <div class="font-bold">
                      Master of Pharmaceutical Sciences
                    </div>
                    <div class="text-gray-700">2023 - 2028 (expected)</div>
                    <p>
                      Currently pursuing a degree with focus on medicinal
                      chemistry and pharmacology.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="mt-12 text-center">
            <p class="text-xl mb-6 font-lexend">
              Interested in collaborating on your next project?
            </p>
            <UtilitiesButton
              class="w-[70vw] rounded-full bg-accent md:w-[50vw] lg:w-[20vw]"
              label="Contact Me"
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
  title: "About Martin",
  description:
    "Learn about my background as a Pharmaceutical Sciences student and self-taught programmer, and my passion for creating innovative healthcare solutions",
  image: "/images/profile.png",
  imageAlt: "Profile photograph of Martin",
  imageType: "image/png",
});

// Directly inject JSON-LD schema data for better compatibility with Rich Results
onMounted(() => {
  $injectSchema([
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "About Martin",
      description:
        "Background, education, and expertise of Martin, Pharmaceutical Sciences student & self-taught programmer",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Martin",
      jobTitle: "Pharmaceutical Sciences Student",
      description:
        "Pharmaceutical Sciences student and self-taught programmer based in Budapest",
      image: "https://bagumamartin.com/images/profile.png",
      url: "https://bagumamartin.com/about",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Budapest",
        addressCountry: "Hungary",
      },
      alumniOf: [],
      knowsAbout: [
        "Web Development",
        "Mobile Development",
        "Data Science",
        "Systems Development",
        "Cybersecurity",
        "Pharmaceutical Solutions",
      ],
    },
  ]);
});
</script>
