import { DetailSaleModel } from './detailSale.model';

export interface SaleModel {
  id: number;
  clientId: number;
  userId: number;
  note: string;
  total: number;
  paid: number;
  debt: number;
  paymentMethod: 'efectivo' | 'tarjeta';
  details: DetailSaleModel[];
  date: Date;
}
