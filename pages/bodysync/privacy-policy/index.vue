<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-8">Privacy Policy for BodySync</h1>

    <div class="space-y-6">
      <section>
        <h2 class="text-xl font-semibold mb-3">
          Effective Date: March 22, 2025
        </h2>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">1. Introduction</h2>
        <p class="mb-4">
          Welcome to BodySync ("we," "our," or "us"). We respect your privacy
          and are committed to protecting your personal data. This Privacy
          Policy explains how we collect, use, and safeguard your information
          when you use our BodySync application ("App").
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">2. Information We Collect</h2>
        <h3 class="text-lg font-medium mb-2">2.1 Information You Provide</h3>
        <p class="mb-4">
          We collect health metrics that you voluntarily input, such as:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>Height and weight</li>
          <li>Body measurements</li>
          <li>Fitness goals</li>
        </ul>
        <h3 class="text-lg font-medium mb-2">
          2.2 Information Collected Automatically
        </h3>
        <p class="mb-4">
          We do not automatically collect any personal information.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">
          3. How We Use Your Information
        </h2>
        <p class="mb-2">We use your information exclusively to:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>
            Provide you with health calculations and insights within the app
          </li>
          <li>Track your progress toward your health goals</li>
          <li>Improve app functionality based on anonymized usage patterns</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">4. Sharing Your Information</h2>
        <p class="mb-4">
          We do not share your personal information with third parties.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">5. Data Storage and Security</h2>
        <ul class="list-disc pl-6 mb-4">
          <li>
            All health and body metrics data is stored locally on your device
          </li>
          <li>
            We implement appropriate technical measures to protect your personal
            information
          </li>
          <li>No health calculation data is transmitted to external servers</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">6. Your Rights</h2>
        <p class="mb-2">Depending on your location, you may have rights to:</p>
        <ul class="list-disc pl-6 mb-4">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of your personal data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Data portability</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">7. Children's Privacy</h2>
        <p class="mb-4">
          Our App is not intended for children under 13. We do not knowingly
          collect personal information from children under 13.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">
          8. Changes to This Privacy Policy
        </h2>
        <p class="mb-4">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">9. Contact Us</h2>
        <p class="mb-4">
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at:
          <a
            href="mailto:contact@bodysync.com"
            class="text-blue-600 hover:underline"
            >contact@bodysync.com</a
          >
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-3">10. Consent</h2>
        <p class="mb-4">
          By using our App, you consent to our Privacy Policy and agree to its
          terms and conditions.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "bodysync",
  title: "Privacy Policy - BodySync App",
  description:
    "Privacy policy for the BodySync application. Learn about how we handle your health data and protect your privacy.",
});
</script>

<style scoped>
section {
  @apply bg-white rounded-lg p-6 shadow-sm;
}
</style>
