<template>
  <div>
    <NuxtLazyHydrate when-visible>
      <div class="px-[2rem] py-[4rem] lg:px-[8rem]">
        <section class="flex flex-col gap-y-[4vh]">
          <div
            class="w-full text-center text-primary text-heading-3 font-poppins"
          >
            <h1>Project Samples</h1>
          </div>
          <div
            class="text-paragraph text-black font-lexend text-center mb-[2rem]"
          >
            <p>
              Explore the samples of my work to see my skills and expertise in
              action.
            </p>
            <p>
              Each sample demonstrates my approach to solving real-world
              problems through thoughtful design and development.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Website Samples -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-48 bg-gray-100 flex items-center justify-center">
                <TwicImg
                  src="/images/samples/websites/pharmacy_website/pharmacy_sample_website_logo.png"
                  ratio="16/9"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-6">
                <h2 class="text-xl font-bold mb-2 font-poppins text-primary">
                  Website Samples
                </h2>
                <p class="text-gray-700 mb-4 font-lexend">
                  Explore modern, responsive website designs built with
                  cutting-edge technologies.
                </p>
                <NuxtLink
                  to="/samples/websites/pharmacy-website"
                  class="text-accent font-medium hover:underline"
                  >View Pharmacy Website Sample</NuxtLink
                >
              </div>
            </div>

            <!-- More samples placeholders for future additions -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-48 bg-gray-100 flex items-center justify-center">
                <div class="text-gray-400 text-center">
                  <Icon
                    name="material-symbols:phone-android"
                    class="text-5xl mb-2"
                  />
                  <p>Coming Soon</p>
                </div>
              </div>
              <div class="p-6">
                <h2 class="text-xl font-bold mb-2 font-poppins text-primary">
                  Mobile App Samples
                </h2>
                <p class="text-gray-700 mb-4 font-lexend">
                  Preview of mobile applications designed for iOS and Android
                  platforms.
                </p>
                <span class="text-gray-400 font-medium">In Development</span>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-48 bg-gray-100 flex items-center justify-center">
                <div class="text-gray-400 text-center">
                  <Icon
                    name="material-symbols:desktop-windows-outline"
                    class="text-5xl mb-2"
                  />
                  <p>Coming Soon</p>
                </div>
              </div>
              <div class="p-6">
                <h2 class="text-xl font-bold mb-2 font-poppins text-primary">
                  Desktop App Samples
                </h2>
                <p class="text-gray-700 mb-4 font-lexend">
                  Featured desktop applications built for productivity and
                  performance.
                </p>
                <span class="text-gray-400 font-medium">In Development</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NuxtLazyHydrate>
  </div>
</template>

<script setup lang="ts">
// Import the injector plugin
const { $injectSchema } = useNuxtApp();

definePageMeta({
  title: "Project Samples",
  description:
    "Explore samples of my software development projects including websites, mobile and desktop applications. View demonstrations of my work and expertise.",
  image: "/images/social_cards_image.jpg",
  imageAlt: "Screenshot preview of software development project samples",
  imageType: "image/jpeg",
});

// Directly inject JSON-LD schema data for better compatibility with Rich Results
onMounted(() => {
  $injectSchema([
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Project Portfolio",
      description: "Software development project samples by Baguma Martin",
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Software Project Portfolio",
      description: "Collection of software projects developed by Baguma Martin",
      creator: {
        "@type": "Person",
        name: "Baguma Martin",
        url: "https://bagumamartin.com",
      },
      about: {
        "@type": "Thing",
        name: "Software Development",
      },
      itemListElement: [
        {
          "@type": "WebSite",
          position: 1,
          name: "Pharmacy Website Sample",
          description:
            "A template pharmacy website demonstrating e-commerce capabilities",
          url: "https://bagumamartin.com/samples/websites/pharmacy-website",
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "Mobile Applications",
          description: "Mobile app samples for iOS and Android platforms",
          applicationCategory: "MobileApplication",
          operatingSystem: "iOS, Android",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/ComingSoon",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "Desktop Applications",
          description:
            "Desktop software samples built for productivity and performance",
          applicationCategory: "DesktopApplication",
          operatingSystem: "Windows, macOS, Linux",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/ComingSoon",
          },
        },
      ],
    },
  ]);
});
</script>
