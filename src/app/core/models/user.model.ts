export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
