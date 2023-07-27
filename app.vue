<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  // meta: [
  //   {
  //     hid: "og:image",
  //     property: "og:image",
  //     content: "https://bagumamartin.com/images/social_cards_image.jpg",
  //   },
  //   {
  //     hid: "og:image:secure_url",
  //     property: "og:image:secure_url",
  //     content: "https://bagumamartin.com/images/social_cards_image.jpg",
  //   },
  // ],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Hire a Professional Developer`
      : "Software Applications Development Services in Uganda | Hire a Professional Developer";
  },
});
</script>
