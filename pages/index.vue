<template>
  <div>
    <NuxtLazyHydrate when-visible>
      <div class="body px-[2rem] lg:px-[8rem]">
        <section
          id="hero"
          class="h-[90vh] gap-y-[10vh] flex flex-col items-center justify-center"
        >
          <div
            class="w-full text-left text-primary text-heading-3 font-poppins lg:text-center"
          >
            <h1 class="">Hello, I'm Baguma</h1>
          </div>
          <div
            class="typer w-full text-left text-black text-[5dvw] font-poppins lg:text-heading-1 lg:w-[70vw]"
          >
            I am
            <UtilitiesTyper
              class="inline"
              :typing-list="typingList"
              cursor-color="primary"
            />
          </div>
          <div
            class="w-full text-center text-black text-paragraph font-lexend lg:w-[50vw]"
          >
            <p>
              I help organizations implement innovative and user-friendly web,
              mobile and desktop applications. Get in touch today to discuss
              your project!
            </p>
          </div>
          <UtilitiesButton
            class="w-full rounded-full from-secondary via-primary to-accent bg-gradient-to-br md:w-[50vw] lg:w-[20vw]"
            label="See My Work"
            icon="ic:outline-arrow-downward"
            navigation-path="/#my-work"
          />
        </section>
        <NuxtLazyHydrate when-visible>
          <section class="flex flex-col gap-y-[4vh] mb-[8vh]">
            <div class="flex flex-col gap-y-[8vh]">
              <div
                class="w-full text-center text-primary text-heading-4 font-poppins lg:text-heading-2"
              >
                <h2>My Work</h2>
              </div>
              <div
                class="text-paragraph text-black font-lexend indent-[2rem] space-y-[1rem]"
              >
                <p>
                  As an applications developer, I have a wide range of expertise
                  across various fields, enabling me to create impactful
                  solutions in multiple domains. With proficiency in web,
                  mobile, and desktop application development, I specialize in
                  building intuitive and feature-rich applications that cater to
                  the unique needs of each platform.
                </p>
                <p>
                  Beyond application development, I possess a strong foundation
                  in data science, machine learning, and artificial
                  intelligence. Leveraging these cutting-edge technologies, I
                  can successfully develop intelligent systems that extract
                  insights from complex data, automate processes, and enhance
                  decision-making.
                </p>
                <p>
                  Additionally, my skills extend to systems development, where I
                  design and implement efficient and scalable architectures that
                  power robust applications. I understand the importance of
                  building solid foundations to ensure optimal performance and
                  stability for both small-scale projects and enterprise-level
                  solutions.
                </p>
                <p>
                  I also have a strong background as a cybersecurity analyst. I
                  am committed to safeguarding digital assets and protecting
                  against threats, I bring a security-first mindset to every
                  project I undertake. My expertise in identifying
                  vulnerabilities, implementing robust security measures, and
                  conducting thorough risk assessments ensures that the
                  applications I develop are fortified against potential cyber
                  threats. I stay up-to-date with the latest trends and best
                  practices, ensuring that my clients can trust their
                  applications with utmost confidence. Rest assured, your
                  project's security is my top priority, and I take great pride
                  in delivering secure, reliable, and resilient solutions.
                </p>
                <p>
                  Whether you're seeking a dynamic web application, a
                  user-friendly mobile app, a powerful desktop software,
                  data-driven insights, or intelligent automation, I have the
                  expertise to bring your vision to life. With a meticulous
                  approach, a passion for innovation, and a commitment to
                  excellence, I am ready to embark on the journey of
                  transforming your ideas into exceptional applications.
                </p>
              </div>
            </div>
            <div id="my-work" class="flex flex-col gap-y-[4vh]">
              <div
                class="w-full text-center text-primary text-heading-5 font-poppins lg:text-heading-4 lg:p-[1rem]"
              >
                <h3>Past projects</h3>
              </div>
              <div class="flex flex-col gap-y-[4vh] lg:gap-y-[12vh]">
                <div
                  class="h-[30vh] bg-primary p-[1rem] w-full left-0 grid grid-cols-3 grid-rows-[1fr_0.5fr_1fr] md:h-[40vh] lg:h-[80vh]"
                >
                  <div class="col-start-2 col-span-2 row-start-1 row-span-2">
                    <nuxt-img
                      src="/images/main/pacedream_hero.png"
                      alt="Screenshot image of Pacedream's website hero section"
                      format="webp"
                      loading="lazy"
                      fit="cover"
                      sizes="sm:100svw md:70svw lg:50svw"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <div class="col-start-1 col-span-2 row-start-2 row-span-3">
                    <nuxt-img
                      src="/images/main/pacedream_services_section.png"
                      alt="Screenshot image of Pacedream's services section"
                      format="webp"
                      loading="lazy"
                      fit="cover"
                      sizes="sm:100svw md:70svw lg:50svw"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div
                  class="h-[30vh] bg-black-50 p-[1rem] w-full left-0 grid grid-cols-2 grid-rows-1 md:h-[40vh] lg:h-[80vh]"
                >
                  <div class="">
                    <nuxt-img
                      src="/images/main/astromalls_splashscreen.jpg"
                      alt="Screenshot image of astromall's splash screen"
                      format="webp"
                      loading="lazy"
                      fit="cover"
                      sizes="sm:100svw md:70svw lg:50svw"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <div class="">
                    <nuxt-img
                      src="/images/main/astromalls_homepage.jpg"
                      alt="Screenshot image of astromall's landing section"
                      format="webp"
                      loading="lazy"
                      fit="cover"
                      sizes="sm:100svw md:70svw lg:50svw"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </NuxtLazyHydrate>
        <NuxtLazyHydrate when-visible>
          <section class="flex flex-col gap-y-[4vh] mb-[4rem]">
            <div
              class="w-full text-center text-primary text-heading-4 font-poppins lg:text-heading-2 lg:p-[1rem]"
            >
              <h2>Contact Information</h2>
            </div>
            <div
              class="flex flex-col gap-y-[4vh] lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-x-[8vw]"
            >
              <div
                class="flex flex-col gap-y-[2vh] lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1"
              >
                <div
                  class="w-full text-center text-primary text-heading-5 font-lexend"
                >
                  <p>
                    I am currently available for work and actively seeking new
                    opportunities to contribute to with my skills.
                  </p>
                </div>
                <div
                  class="w-full text-left text-black text-paragraph font-lexend"
                >
                  <p>
                    Do you have a project in mind? Let's discuss how I can be of
                    value to your team or organization.
                  </p>
                </div>
              </div>
              <div
                class="md:flex md:flex-col items-center lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-1 lg:mt-[3vh]"
              >
                <UtilitiesButton
                  class="w-full rounded-full bg-accent md:w-[50vw] lg:w-[25vw]"
                  label="Got a project in mind? Let's talk"
                  navigation-path="/contact"
                />
              </div>
              <div
                class="flex flex-col gap-y-[2vh] md:mt-[2vh] lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-1"
              >
                <div
                  class="w-full text-left text-primary text-heading-6 font-lexend"
                >
                  <p>martin@bagumamartin.com</p>
                </div>
                <div
                  class="w-full text-left text-black text-paragraph font-lexend"
                >
                  <p>+256 773 377 425</p>
                  <p>+256 754 518 384</p>
                </div>
              </div>
            </div>
          </section>
        </NuxtLazyHydrate>
      </div>
    </NuxtLazyHydrate>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Software Applications Developer",
  description:
    "Looking for a professional applications developer in Uganda? I develop a wide range of custom software applications that meet your specific needs - website, mobile and desktop apps design and development. Hire me for your project today.",
  image: "/images/social_cards_image.jpg",
  imageAlt:
    "Photograph of a software developer's desk with a laptop connecter to a monitor.",
  imageType: "image/jpeg",
});

// Typing list for the typer component
const typingList = [
  "an Applications Developer",
  "a Data Scientist",
  "a Systems Developer",
  "a Cybersecurity Analyst",
  "a Graphics Designer",
];

// JSON-LD Schema Markup for SEO
useSchemaOrg([
  defineWebSite({
    name: "Baguma Martin",
    description: "Baguma Martin is is a software applications developer",
  }),
  definePerson({
    name: "Baguma Martin Amanya",
    logo: "https://www.bagumamartin.com/logo.png",
    alternateName: "Baguma Martin",
    nationality: "Ugandan",
    birthPlace: definePlace({
      PostalAddress: defineAddress({
        addressLocality: "Hoima",
        addressCountry: "Uganda",
        addressRegion: "Western Uganda",
      }),
    }),
    gender: "Male",
    Description: ["Technologist", "Pharmacist"],
    url: "https://www.bagumamartin.com",
    image: "https://www.bagumamartin.com/images/profile.png",
    address: defineAddress({
      addressLocality: "Hoima",
      addressCountry: "Uganda",
      addressRegion: "Western Uganda",
    }),
    sameAs: [
      "https://twitter.com/BagumaMartinA",
      "https://www.instagram.com/bagumaamanya/",
      "https://www.facebook.com/baguma.a.martinamanya",
      "https://www.linkedin.com/in/baguma-martin-b924381a7/",
      "https://github.com/bagumamartin",
    ],
  }),
  defineWebPage(),
]);
</script>
