import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
  state: () => {
    return { text: null };
  },

  actions: {
    set(text: string) {
      this.text = text;
    },

    reset() {
      this.text = null;
    }
  },
});
