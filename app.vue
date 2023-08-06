<template>
  <div>
    <NuxtLayout>
      <NuxtLazyHydrate when-visible>
        <NuxtPage />
      </NuxtLazyHydrate>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | Hire a Professional Developer`
      : "Software Applications Development Services in Uganda | Hire a Professional Developer";
  },
});
</script>
