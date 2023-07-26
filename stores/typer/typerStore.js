import { defineStore } from 'pinia'

export const useTyperStore = defineStore('typer', {
    state: () => ({
        content: '',
        typeStatus: true,
        typingList: [],
        typingSpeed: 200,
        erasingSpeed: 100,
        newTextDelay: 2500,
        typeAttributesIndex: 0,
        charIndex: 0,
    }),
    getters: {
        type: (state) => state.content * 2,
    },
    actions: {
        init(typingList) {
            this.typingList = typingList;
        },
        typeText() {
            if (
                this.charIndex < this.typingList[this.typeAttributesIndex].length
            ) {
                if (!this.typeStatus) this.typeStatus = true;

                this.content += this.typingList[this.typeAttributesIndex].charAt(
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

                this.content = this.typingList[
                    this.typeAttributesIndex
                ].substring(0, this.charIndex - 1);
                this.charIndex--;
                setTimeout(this.eraseText, this.erasingSpeed);
            } else {
                this.typeStatus = false;
                this.typeAttributesIndex++;
                if (this.typeAttributesIndex >= this.typingList.length)
                    this.typeAttributesIndex = 0;

                setTimeout(this.typeText, this.typingSpeed);
            }
        },
    },
})