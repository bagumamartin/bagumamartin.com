<template>
  <div>
    <!-- <nav
      class="h-[100vh] pt-[10dvh] inset-[0_0_0_30%] bg-white backdrop-opacity-10 backdrop-blur-[1.5rem] fixed transition-[all_1s_ease-in-out] md:w-full md:h-full md:translate-x-0 md:pt-0 md:inset-auto md:static md:bg-transparent md:backdrop-blur-0 md:transition-none md:inset-auto z-[9998]"
      :class="storeShowMenu.showMenu ? 'translate-x-0' : 'translate-x-full'"
    > -->
    <nav
      class="h-[100vh] pt-[10dvh] inset-[0_0_0_30%] bg-white backdrop-opacity-10 backdrop-blur-[1.5rem] fixed transition-[all_1s_ease-in-out] z-[9998] lg:h-full lg:rounded-lg lg:translate-x-0 lg:inset-auto lg:static lg:backdrop-blur-0 lg:transition-none lg:pt-[2svh]"
      :class="storeShowMenu.showMenu ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- <div
        class="h-full pl-[20vw] text-left text-heading-5 font-poppins flex flex-col gap-y-[3vh] justify-start md:w-full md:flex-row md:justify-end md:items-center md:gap-x-[4vw] md:pl-0"
        :class="clsx(props.linksColorClass)"
      > -->
      <div
        class="h-full pl-[20vw] text-left text-heading-5 font-poppins flex flex-col gap-y-[3vh] justify-start lg:pl-[2dvw]"
        :class="clsx(props.linksColorClass)"
      >
        <NuxtLink
          v-for="link in links"
          :to="link.path"
          @click="storeShowMenu.closeMenu"
        >
          <Icon
            v-if="link.iconName"
            :name="link.iconName"
            class="text-heading-5"
          />
          {{ link.name }}
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useShowMenuStore } from "@/stores/header/showMenuStore";
import { clsx } from "clsx";

const storeShowMenu = useShowMenuStore();

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
  linksColorClass: {
    type: String,
    default: "text-black",
  },
});
</script>
