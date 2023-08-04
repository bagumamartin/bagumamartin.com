import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
    state: () => ({
        matches: [],
        searchingList: [],
        entry: '',
        openDrawer: false,
    }),
    getters: {
        // getters receive the state as first parameter
        matchesFound: (state) => {
            state.entry.length ? state.openDrawer = true : state.openDrawer = false;
            return {
                displayMatches: (state.matches.length && state.entry.length) ? true : false,
                // displayMatchesDrawer: state.entry.length ? true : false,
            };
        },
    },
    actions: {
        init(searchingList) {
            this.searchingList = searchingList;
        },
        search(input) {
            this.entry = input;
            if (
                input.length > 0
            ) {
                this.matches = this.searchingList.filter((item) => {
                    return item.toLowerCase().includes(input.toLowerCase());
                });
            } else {
                this.matches = [];
            };
        },
        closeMatchesDrawer() {
            this.openDrawer = false;
        },
    },
})