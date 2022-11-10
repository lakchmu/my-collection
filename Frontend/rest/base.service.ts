import tokenService from '@/utils/token-service';

export default class BaseService {
  post<T>(url: string, payload: any): Promise<T> {
    return $fetch(url, {
      method: 'post',
      body: payload,
      headers: {
        Authorization: `bearer ${tokenService.getUserToken()}`,
      },
    });
  }
}
