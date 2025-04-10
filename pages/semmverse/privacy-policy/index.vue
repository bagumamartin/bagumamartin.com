<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8">Privacy Policy for SemmVerse</h1>

    <div class="space-y-6">
      <section>
        <h2 class="text-xl font-semibold mb-3">
          Last Updated: {{ currentDate }}
        </h2>
        <p class="mb-4">
          Welcome to SemmVerse. We respect your privacy and are committed to
          protecting it. This Privacy Policy explains our practices regarding
          your information.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">Information Collection</h2>
        <p class="mb-4">
          SemmVerse does not collect, store, or process any personal information
          from its users. Our application functions without the need for any
          user data collection.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">Device Permissions</h2>
        <p class="mb-4">
          SemmVerse does not request any device permissions that would allow
          access to your personal information, location, camera, contacts, or
          other sensitive data.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">Third-Party Services</h2>
        <p class="mb-4">
          Our app does not use any third-party services that collect data about
          you.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">Children's Privacy</h2>
        <p class="mb-4">
          SemmVerse does not collect any information from children under the age
          of 13 or any other users.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">
          Changes to This Privacy Policy
        </h2>
        <p class="mb-4">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the "Last Updated" date.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">Contact Us</h2>
        <p class="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at:
          <a
            href="mailto:martin@bagumamartin.com"
            class="text-blue-600 hover:underline"
            >martin@bagumamartin.com</a
          >
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "semmverse",
  title: "Privacy Policy - SemmVerse App",
  description:
    "Privacy policy for the SemmVerse application. Learn about how we handle your data and protect your privacy.",
});

const currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
</script>

<style scoped>
section {
  @apply bg-white rounded-lg p-6 shadow-sm;
}
</style>
