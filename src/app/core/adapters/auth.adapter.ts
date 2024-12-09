import { LoginResponseModel } from '../models';

/* Sin uso de momento */
export const AuthAdapter = (loginResponse: LoginResponseModel): string =>
  loginResponse.token;
