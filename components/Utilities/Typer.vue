<template>
  <span class="typed-text">{{ storeTyper.content }}</span>
  <span
    class="cursor"
    :class="{ typing: false }"
    :style="{ 'background-color': cursorColor }"
    >&nbsp;</span
  >
</template>

<script setup>
import { useTyperStore } from "@/stores/typer/typerStore";

const props = defineProps(["typingList", "cursorColor"]);
const cursorColor = "red";

const storeTyper = useTyperStore();
storeTyper.init(props.typingList);

onMounted(() => {
  storeTyper.typeText();
  //   setTimeout(storeTyper.typeText, storeTyper.newTextDelay);
});
</script>

<!-- <script>
export default {
  name: "WordTyper",
  props: {
    typeAttributes: Array,
    cursorColor: String,
  },
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2500,
      typeAttributesIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (
        this.charIndex < this.typeAttributes[this.typeAttributesIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeAttributes[this.typeAttributesIndex].charAt(
          this.charIndex
        );
        this.charIndex++;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeAttributes[
          this.typeAttributesIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeAttributesIndex++;
        if (this.typeAttributesIndex >= this.typeAttributes.length)
          this.typeAttributesIndex = 0;

        setTimeout(this.typeText, this.typingSpeed);
      }
    },
  },
  mounted() {
    setTimeout(this.typeText, this.newTextDelay);
  },
};
</script> -->
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
