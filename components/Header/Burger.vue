<template>
  <div>
    <div
      class="hamburger-menu-button"
      :class="{ open: storeShowMenu.showMenu }"
      @click="storeShowMenu.toggle"
    >
      <span
        class="hamburger-menu-button-burger bg-primary rounded-full"
        :class="{ open: storeShowMenu.showMenu }"
      ></span>
    </div>
  </div>
</template>

<script setup>
// export default {
//   methods: {
//     transformBurger() {
//       this.showMenu = !this.showMenu;
//     },
//   },
// };

import { useShowMenuStore } from "@/stores/header/showMenuStore";

const storeShowMenu = useShowMenuStore();
</script>

<style lang="scss" scoped>
.hamburger-menu-button {
  position: relative;
  height: 1.1875rem;
  width: 1.5rem;
  @include transition-ease;

  &-burger {
    position: absolute;
    right: 0;
    top: 0.5rem;
    width: 1.5rem;
    height: 0.125rem;
    @include transition-ease;

    &::before {
      content: "";
      position: absolute;
      top: -0.5rem;
      width: 1.5rem;
      height: 0.125rem;
      background: $primary;
      border-radius: 9999px;
      @include transition-ease;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0.5rem;
      width: 1rem;
      height: 0.125rem;
      background: $primary;
      border-radius: 9999px;
      @include transition-ease;
    }

    &.open {
      transform: rotate(360deg);
      background: transparent;

      &::before {
        transform: rotate(45deg) translate(5px, 8px);
      }

      &::after {
        width: 1.5rem;
        transform: rotate(-45deg) translate(3px, -7px);
      }
    }
  }
}
</style>
