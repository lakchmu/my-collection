import { defineStore } from 'pinia';

import { authService } from '@/rest';

import type { Credentials } from '@/types';
import tokenService from '@/utils/token-service';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return { email: '', name: '', isAuthorized: false, errorMessage: '' };
  },

  actions: {
    async getMe() {

    },

    async login(credentials: Credentials) {
      try {
        const { Authorization, data } = await authService.login(credentials);

        tokenService.setAuthStatus('true');
        tokenService.setUserToken(Authorization);

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
