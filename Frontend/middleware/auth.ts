import tokenService from '@/utils/token-service';

export default defineNuxtRouteMiddleware(() => {
  if (!tokenService.isUserAuthenticated()) {
    return navigateTo({ path: '/login' });
  }
});
