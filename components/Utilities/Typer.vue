<template>
  <span class="typed-text">{{ storeTyper.content }}</span>
  <span
    class="cursor"
    :class="{ typing: storeTyper.typeStatus, [`bg-${cursorColor}`]: true }"
    >&nbsp;</span
  >
</template>

<script setup>
import { useTyperStore } from "@/stores/typer/typerStore";

const props = defineProps(["typingList", "cursorColor"]);
const cursorColor = props.cursorColor || "red";

const storeTyper = useTyperStore();
storeTyper.init(props.typingList);
storeTyper.typeText();

// onMounted(() => {
//   storeTyper.typeText();
//   //   setTimeout(storeTyper.typeText, storeTyper.newTextDelay);
// });
</script>

<style scoped lang="scss">
span {
  &.reveal-box {
    animation-delay: 3.5s;
  }

  &.cursor {
    display: inline;
    margin-left: 3px;
    width: 3px;
    animation: cursorBlink 1s infinite;
    &.typing {
      animation: none;
    }
  }
}
</style>
