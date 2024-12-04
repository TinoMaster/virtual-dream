export enum Role {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner',
  EMPLOYEE = 'employee',
}

export interface RoleModel {
  id: number;
  name: Role;
  description: string;
}
