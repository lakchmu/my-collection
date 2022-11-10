import { Credentials, UserModel } from '@/types';

class AuthService {
  login({ email, password }: Credentials): Promise<{ data: UserModel, Authorization: string }> {
    return $fetch<{ data: UserModel, Authorization: string }>('/api/auth/login', {
      method: 'post',
      body: { email, password },
    });
  }
}

const authService: AuthService = new AuthService();

export default authService;
