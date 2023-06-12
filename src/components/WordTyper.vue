<template>
  <span class="typed-text">{{ typeValue }}</span>
  <span
    class="cursor"
    :class="{ typing: typeStatus }"
    :style="{ 'background-color': cursorColor }"
    >&nbsp;</span
  >
</template>
<script>
import Worker from "worker-loader!./WordTyperWorker";
import * as Comlink from "comlink";

const worker = Comlink.wrap(new Worker("./WordTyperWorker.js"));

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
      charIndex: 1,
    };
  },
  methods: {
    async typeText() {
      result = await worker.typeText({
        typeAttributes: this.typeAttributes,
        typeValue: this.typeValue,
        typeStatus: this.typeStatus,
        typingSpeed: this.typingSpeed,
        erasingSpeed: this.erasingSpeed,
        newTextDelay: this.newTextDelay,
        typeAttributesIndex: this.typeAttributesIndex,
        charIndex: this.charIndex,
      });

      this.typeValue = result.typeValue;
      this.charIndex = result.charIndex;
      this.typeStatus = result.typeStatus;
      // if (
      //   this.charIndex < this.typeAttributes[this.typeAttributesIndex].length
      // ) {
      //   if (!this.typeStatus) this.typeStatus = true;

      //   this.typeValue += this.typeAttributes[this.typeAttributesIndex].charAt(
      //     this.charIndex
      //   );
      //   this.charIndex++;
      //   setTimeout(this.typeText, this.typingSpeed);
      // } else {
      //   this.typeStatus = false;
      //   setTimeout(this.eraseText, this.newTextDelay);
      // }
    },
    // eraseText() {
    //   if (this.charIndex > 0) {
    //     if (!this.typeStatus) this.typeStatus = true;

    //     this.typeValue = this.typeAttributes[
    //       this.typeAttributesIndex
    //     ].substring(0, this.charIndex - 1);
    //     this.charIndex--;
    //     setTimeout(this.eraseText, this.erasingSpeed);
    //   } else {
    //     this.typeStatus = false;
    //     this.typeAttributesIndex++;
    //     if (this.typeAttributesIndex >= this.typeAttributes.length)
    //       this.typeAttributesIndex = 0;

    //     setTimeout(this.typeText, this.typingSpeed);
    //   }
    // },
  },
  mounted() {
    setTimeout(this.typeText, this.newTextDelay);
  },
};
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
