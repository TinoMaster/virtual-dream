export interface RoleModel {
  id: number;
  name: 'admin' | 'user' | 'owner' | 'employee';
  description: string;
}
