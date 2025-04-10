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
                    alt="Baguma Martin profile photograph"
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
                  Baguma Martin Amanya
                </h2>
                <p class="italic text-lg">
                  Software Applications Developer & Pharmacist
                </p>
                <p>
                  I am a versatile professional with a unique blend of expertise
                  in software development and pharmacy. Based in Budapest,
                  Hungary, I bring a diverse perspective to my work, combining
                  analytical thinking from my pharmaceutical background with
                  creative problem-solving in technology.
                </p>
                <p>
                  With over 5 years of experience in software development, I
                  specialize in creating robust, user-friendly applications that
                  solve real-world problems. My dual background allows me to
                  bring a unique perspective to healthcare technology projects,
                  understanding both technical requirements and end-user needs
                  in specialized domains.
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
                  Building responsive, accessible, and performant web
                  applications using modern frameworks and best practices.
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
                  Creating native and cross-platform mobile applications for iOS
                  and Android with intuitive user experiences.
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
                  Analyzing complex datasets to extract valuable insights and
                  build predictive models using machine learning.
                </p>
              </div>

              <!-- Systems Development -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                  <Icon name="mdi:server" class="text-4xl text-primary mr-4" />
                  <h3 class="text-xl font-semibold">Systems Development</h3>
                </div>
                <p class="font-lexend">
                  Designing and implementing efficient, scalable system
                  architectures for robust applications.
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
                  Identifying vulnerabilities and implementing robust security
                  measures to protect digital assets.
                </p>
              </div>

              <!-- Pharmacy -->
              <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center mb-4">
                  <Icon
                    name="mdi:medical-bag"
                    class="text-4xl text-primary mr-4"
                  />
                  <h3 class="text-xl font-semibold">Pharmacy</h3>
                </div>
                <p class="font-lexend">
                  Leveraging pharmaceutical knowledge to develop specialized
                  healthcare applications and solutions.
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
                    <div class="font-bold">Senior Software Developer</div>
                    <div class="text-gray-700">2022 - Present</div>
                    <p>
                      Leading development of custom software solutions for
                      various industries with a focus on healthcare
                      applications.
                    </p>
                  </li>
                  <li>
                    <div class="font-bold">Freelance Developer</div>
                    <div class="text-gray-700">2019 - 2022</div>
                    <p>
                      Provided web and mobile development services to clients
                      worldwide, specializing in e-commerce and healthcare
                      systems.
                    </p>
                  </li>
                  <li>
                    <div class="font-bold">Pharmacist</div>
                    <div class="text-gray-700">2017 - 2019</div>
                    <p>
                      Practiced as a licensed pharmacist, gaining valuable
                      insights into healthcare systems and patient needs.
                    </p>
                  </li>
                </ul>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-semibold mb-2">Education</h3>
                <ul class="list-disc pl-5 space-y-4">
                  <li>
                    <div class="font-bold">Master's in Computer Science</div>
                    <div class="text-gray-700">2020 - 2022</div>
                    <p>
                      Specialized in Artificial Intelligence and Data Science
                    </p>
                  </li>
                  <li>
                    <div class="font-bold">Bachelor of Pharmacy</div>
                    <div class="text-gray-700">2013 - 2017</div>
                    <p>
                      Comprehensive training in pharmaceutical sciences and
                      healthcare
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="mt-12 text-center">
            <p class="text-xl mb-6 font-lexend">
              Interested in working together on your next project?
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
