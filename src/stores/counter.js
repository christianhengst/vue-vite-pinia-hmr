import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStore = defineStore('counter', {
  state: () => {
    return {
      counter: 1,
    }
  },

  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}