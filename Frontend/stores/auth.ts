import { defineStore } from 'pinia';

import { authService } from '@/rest';

import type { Credentials } from '@/types';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return { email: '', name: '', isAuthorized: false, errorMessage: '' };
  },

  actions: {
    async login(credentials: Credentials) {
      try {
        const { data } = await authService.login(credentials);

        this.email = data.email;
        this.name = data.name;
        this.isAuthorized = true;
        this.errorMessage = '';
      } catch (error) {
        this.errorMessage = 'Username or password is incorrect. Try again';
      }
    },
  },
});
