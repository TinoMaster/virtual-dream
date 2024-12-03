import { ProductCategoryModel } from './productCategory.model';

export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: ProductCategoryModel;
  createdAt: Date;
  updatedAt: Date;
}
