import { defineStore } from 'pinia'

// showMenu is the name of the store. It is unique across your application
// and will appear in devtools
export const useShowMenuStore = defineStore('showMenu', {
  // a function that returns a fresh state
  state: () => ({
    showMenu: false,
  }),
  // optional getters
  // getters: {
  //   // getters receive the state as first parameter
  //   doubleCounter: (state) => state.counter * 2,
  //   // use getters in other getters
  //   doubleCounterPlusOne(): number {
  //     return this.doubleCounter + 1
  //   },
  // },
  // optional actions
  actions: {
    toggle() {
      // `this` is the store instance
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      this.showMenu = false
    },
  },
})
