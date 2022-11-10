import tokenService from '@/utils/token-service';

export default defineNuxtRouteMiddleware(() => {
  if (!tokenService.getAuthStatus()) {
    return navigateTo({ path: '/login' });
  }
});
