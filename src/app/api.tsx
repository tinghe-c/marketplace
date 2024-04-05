import { Product } from "./product";

export const apiBaseUrl = "https://dummyjson.com";
export const userId = 1;

export interface ProductAPIResult {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface APICart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface CartsAPIResult {
  carts: APICart[];
  total: number;
  skip: number;
  limit: number;
}
