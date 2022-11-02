import { Credentials, UserModel } from '@/types';

class AuthService {
  login({ email, password }: Credentials): Promise<{ data: UserModel }> {
    return $fetch<{ data: UserModel }>('/api/auth/login', {
      method: 'post',
      body: { email, password },
    });
  }
}

const authService: AuthService = new AuthService();

export default authService;
