import {Endpoints} from '../../environment';
import apiService from './api.service';

export class AuthService {
  static async handleLogin(payload: any) {
    console.log(Endpoints.LOGIN_ENDPOINT, payload);
    return await apiService.post(Endpoints.LOGIN_ENDPOINT, {
      email: payload.email,
      device_token: payload.device_token,
    });
  }
}
