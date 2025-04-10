<template>
  <div>
    <NuxtLazyHydrate when-visible>
      <div class="px-[2rem] py-[4rem] lg:px-[8rem]">
        <section class="flex flex-col gap-y-[6vh]">
          <div
            class="w-full text-center text-primary text-heading-3 font-poppins"
          >
            <h1>Contact Me</h1>
          </div>

          <div
            class="text-paragraph text-black font-lexend text-center max-w-3xl mx-auto mb-8"
          >
            <p>
              Have a project in mind or want to discuss potential collaboration?
              I'd love to hear from you.
            </p>
            <p>Feel free to reach out using any of the methods below.</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Contact Form -->
            <div class="lg:col-span-2">
              <div class="bg-white rounded-lg shadow-md p-8">
                <h2 class="text-xl font-bold mb-6 font-poppins text-primary">
                  Send Me a Message
                </h2>

                <form class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium font-lexend"
                        >Your Name</label
                      >
                      <input
                        type="text"
                        id="name"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium font-lexend"
                        >Email Address</label
                      >
                      <input
                        type="email"
                        id="email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="subject"
                      class="block mb-2 text-sm font-medium font-lexend"
                      >Subject</label
                    >
                    <input
                      type="text"
                      id="subject"
                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium font-lexend"
                      >Message</label
                    >
                    <textarea
                      id="message"
                      rows="6"
                      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can I help you?"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      class="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>

                  <p class="text-sm text-gray-500">
                    By submitting this form, you agree to be contacted regarding
                    your request.
                  </p>
                </form>
              </div>
            </div>

            <!-- Contact Information -->
            <div>
              <div class="bg-white rounded-lg shadow-md p-8 mb-6">
                <h2 class="text-xl font-bold mb-6 font-poppins text-primary">
                  Contact Information
                </h2>

                <div class="space-y-4 font-lexend">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <Icon
                        name="mdi:email"
                        class="text-2xl text-primary mr-3"
                      />
                    </div>
                    <div>
                      <h3 class="font-bold text-sm">Email</h3>
                      <a
                        href="mailto:martin@bagumamartin.com"
                        class="text-blue-600 hover:underline"
                        >martin@bagumamartin.com</a
                      >
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <Icon
                        name="mdi:phone"
                        class="text-2xl text-primary mr-3"
                      />
                    </div>
                    <div>
                      <h3 class="font-bold text-sm">Phone</h3>
                      <p>+36 20 538 1733 (Hungary)</p>
                      <p>+256 75 451 8384 (Uganda)</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <Icon
                        name="mdi:map-marker"
                        class="text-2xl text-primary mr-3"
                      />
                    </div>
                    <div>
                      <h3 class="font-bold text-sm">Location</h3>
                      <p>Based in Budapest, Hungary</p>
                      <p>Available for remote work worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Social Media -->
              <div class="bg-white rounded-lg shadow-md p-8">
                <h2 class="text-xl font-bold mb-6 font-poppins text-primary">
                  Connect with Me
                </h2>

                <div class="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/baguma-martin-b924381a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                  >
                    <IconLinkedin />
                  </a>

                  <a
                    href="https://twitter.com/BagumaMartinA"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition duration-300"
                  >
                    <IconTwitter />
                  </a>

                  <a
                    href="https://github.com/bagumamartin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition duration-300"
                  >
                    <Icon name="mdi:github" />
                  </a>

                  <a
                    href="https://wa.me/36205381733?urlencodedtext=Hello%20Baguma!%0A%0AI'm%20interested%20in%20your%20software%20solution%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300"
                  >
                    <IconWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Response Time Section -->
          <div class="mt-8 bg-primary bg-opacity-10 rounded-lg p-8 text-center">
            <h2 class="text-xl font-bold mb-4 text-primary font-poppins">
              Quick Response Guaranteed
            </h2>
            <p class="font-lexend">
              I typically respond to all inquiries within 24-48 hours. For
              urgent matters, please mention "Urgent" in the subject line.
            </p>
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
  title: "Contact Baguma Martin",
  description:
    "Get in touch with me. I am experienced in various major programming languages, frameworks, and platforms. Connect to discuss your project requirements or collaborate on exciting opportunities.",
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
      name: "Contact Baguma Martin",
      description:
        "Contact information and form to get in touch with Baguma Martin",
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Baguma Martin",
      description:
        "Get in touch with Baguma Martin for software development services",
      url: "https://bagumamartin.com/contact",
      mainEntity: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+36205381733",
        email: "martin@bagumamartin.com",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hungarian"],
        contactOption: ["TollFree", "HearingImpairedSupported"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Baguma Martin Software Development Services",
      description:
        "Professional software development services offered worldwide",
      url: "https://bagumamartin.com",
      telephone: "+36205381733",
      email: "martin@bagumamartin.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Budapest",
        addressCountry: "Hungary",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "47.4979",
        longitude: "19.0402",
      },
      openingHours: "Mo-Fr 09:00-18:00",
      priceRange: "€€",
      availableLanguage: ["English", "Hungarian"],
    },
  ]);
});
</script>
