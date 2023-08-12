<template>
  <div>
    <div
      :class="
        twMerge(
          clsx(
            'relative right-0 h-[1.1875rem] w-[1.5rem] transition duration-500 ease-in-out ',
            storeShowMenu.showMenu ? 'rotate-[360deg]' : `transform-none`
          )
        )
      "
      @click="storeShowMenu.toggle"
    >
      <span
        :class="
          twMerge(
            clsx(
              `rounded-full ${props.burgerBackgroundClass} absolute right-0 top-0 w-[1.5rem] h-[0.125rem] transition duration-500 ease-in-out`,
              storeShowMenu.showMenu
                ? 'rotate-45 translate-x-[4px] translate-y-[9px]'
                : 'transform-none before:transform-none after:w-[1rem] after:transform-none'
            )
          )
        "
      ></span>
      <span
        :class="
          twMerge(
            clsx(
              'rounded-full absolute right-0 top-[0.5rem] w-[1.5rem] h-[0.125rem] transition duration-500 ease-in-out ',
              storeShowMenu.showMenu
                ? 'rotate-[360deg]'
                : `transform-none ${props.burgerBackgroundClass}`
            )
          )
        "
      ></span>
      <span
        :class="
          twMerge(
            clsx(
              `rounded-full ${props.burgerBackgroundClass} absolute left-0 top-[1rem] w-[1rem] h-[0.125rem] transition duration-500 ease-in-out`,
              storeShowMenu.showMenu
                ? 'w-[1.5rem] -rotate-45 translate-x-[3.5px] -translate-y-[7px] right-0'
                : 'transform-none w-[1rem] transform-none'
            )
          )
        "
      ></span>
    </div>
  </div>
</template>

<script setup>
import { useShowMenuStore } from "@/stores/header/showMenuStore";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const storeShowMenu = useShowMenuStore();

// const props = defineProps(["color"]);
const props = defineProps({
  burgerBackgroundClass: {
    type: String,
    default: "bg-black",
  },
});
</script>
