import { Product } from "./product/product";

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

export interface Account {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  image: string;
}

function cleanUpStr(str: string) {
  let words = str.split(" ");
  let clean = [];
  for (let word of words) {
    word = word.replaceAll(".", "");
    word = word.charAt(0).toUpperCase() + word.slice(1);
    clean.push(word);
  }
  return clean.join(" ");
}

export function cleanUpData(data: ProductAPIResult) {
  for (let product of data.products) {
    product.title = cleanUpStr(product.title);
  }
  return data;
}
