import { LoginResponseModel } from '../models';

export const AuthAdapter = (loginResponse: LoginResponseModel): string =>
  loginResponse.token;
