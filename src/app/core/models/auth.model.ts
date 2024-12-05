interface TokenModel {
  token: string;
}

export interface AuthDataModel {
  email: string;
  password: string;
}

export interface LoginResponseModel extends TokenModel {}
export interface AuthModel extends TokenModel {}
