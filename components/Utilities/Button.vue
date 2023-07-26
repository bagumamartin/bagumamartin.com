<template>
  <div>
    <NuxtLink :to="navigationPath">
      <button
        class="w-full h-[9vh] px-px-[1rem] px-py-[1.5rem] inline-flex justify-center items-center gap-[0.5rem] text-heading-6 text-white text-center font-poppins"
      >
        {{ label }}
        <Icon v-if="icon" :name="icon" class="text-heading-5" /></button
    ></NuxtLink>
  </div>
</template>
<script setup>
defineProps({
  label: String,
  icon: String,
  navigationPath: String,
});
</script>
