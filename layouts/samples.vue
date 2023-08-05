<template>
  <div id="app-layout">
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
// Head meta tags for SEO
const route = useRoute();

useHead({
  title: () => {
    return route.meta.title
      ? `${route.meta.title}`
      : "Sample software application";
  },
});

const baseURI = "https://bagumamartin.com";

useHead({
  title: () => {
    return route.meta.title
      ? `${route.meta.title}`
      : "Software Applications Developer";
  },
  meta: [
    {
      hid: "description",
      name: "description",
      content: () => {
        return route.meta.description
          ? `${route.meta.description}`
          : "I develop a wide range of custom software applications that meet your specific needs - website, mobile and desktop apps design and development. Hire me for your project today.";
      },
    },
    {
      hid: "author",
      name: "author",
      content: "Baguma Martin",
    },

    // Twitter card data for SEO
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    { hid: "twitter:site", name: "twitter:site", content: "@BagumaMartinA" },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@BagumaMartinA",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: () => {
        return route.meta.title
          ? `${route.meta.title}`
          : "Application template sample | Hire a Professional Developer";
      },
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: () => {
        return route.meta.description
          ? `${route.meta.description}`
          : "I develop a wide range of custom software applications that meet your specific needs - website, mobile and desktop apps design and development. Hire me for your project today.";
      },
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
    },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: `${baseURI}${route.fullPath}`,
    },

    // Open graph tag for SEO
    {
      hid: "og:site_name",
      property: "og:site_name",
      content: "Baguma Martin | Applications Developer",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: () => {
        return route.meta.title
          ? `${route.meta.title}`
          : "Software Applications Developer | Hire a Professional Developer";
      },
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:description",
      property: "og:description",
      content: () => {
        return route.meta.description
          ? `${route.meta.description}`
          : "I develop a wide range of custom software applications that meet your specific needs - website, mobile and desktop apps design and development. Hire me for your project today.";
      },
    },
    {
      hid: "og:image",
      property: "og:image",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
    },
    {
      hid: "og:image:secure_url",
      property: "og:image:secure_url",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
    },
    {
      hid: "og:image:alt",
      property: "og:image:alt",
      content: () => {
        return route.meta.imageAlt
          ? `${route.meta.imageAlt}`
          : "Photograph about software development";
      },
    },
    {
      hid: "og:image:type",
      property: "og:image:type",
      content: () => {
        return route.meta.imageType ? `${route.meta.imageType}` : "image/jpeg";
      },
    },
    {
      hid: "og:image:width",
      property: "og:image:width",
      content: "1200",
    },
    {
      hid: "og:image:height",
      property: "og:image:height",
      content: "630",
    },
    {
      hid: "og:url",
      property: "og:url",
      content: `${baseURI}${route.fullPath}`,
    },

    // Microsoft tiles
    {
      hid: "msapplication-TileColor",
      name: "msapplication-TileColor",
      content: "#DC143C",
    },
    {
      hid: "msapplication-TileImage",
      name: "msapplication-TileImage",
      content: () => {
        return route.meta.image
          ? `${baseURI}${route.meta.image}`
          : `${baseURI}/images/social_cards_image.jpg`;
      },
    },
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#DC143C",
    },
  ],
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: `${baseURI}${route.fullPath}`,
    },
    {
      hid: "thumbnailUrl",
      itemprop: "thumbnailUrl",
      href: `${baseURI}${route.meta.image}`,
    },
  ],
});
</script>
