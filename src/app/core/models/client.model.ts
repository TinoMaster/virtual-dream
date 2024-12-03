import { MembershipModel } from './membership.model';

export interface ClientModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  membership: MembershipModel | null;
  createdAt: Date;
  updatedAt: Date;
}
