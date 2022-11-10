const IS_AUTHENTICATED = 'authenticated';
const USER_TOKEN = 'userToken';

const storageProvider = localStorage;

const tokenService = {
  isUserAuthenticated(): boolean {
    return storageProvider.getItem(IS_AUTHENTICATED) === 'true';
  },

  getUserToken(): string {
    return storageProvider.getItem(USER_TOKEN);
  },

  setAuthStatus(status: string): void {
    storageProvider.setItem(IS_AUTHENTICATED, status);
  },

  setUserToken(accessToken: string): void {
    storageProvider.setItem(USER_TOKEN, accessToken);
  },
};

export default tokenService;
