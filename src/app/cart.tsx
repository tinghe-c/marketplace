// export type Cart = unknown;

import { Map } from "immutable";
import { Product } from "./product";

export type Cart = Map<Product, number>;

export function newCart(): Cart {
  return Map();
}

export function addToCart(product: Product) {
  return (cart: Cart) => cart.update(product, 0, (n) => n + 1);
}

export function subtractFromCart(product: Product) {
  return (cart: Cart) => {
    switch (cart.get(product)) {
      case 1:
        return cart.delete(product);
      default:
        return cart.update(product, 0, (n) => n - 1);
    }
  };
}

// export class Cart {
//   products: Map<Product, number>;

//   constructor() {
//     this.products = new Map<Product, number>();
//   }

//   modify(product: Product, f: (n: number) => number) {
//     const before = this.products.get(product) || 0;
//     const after = f(before);
//     this.products.set(product, after);
//     return after;
//   }

//   public add(product: Product) {
//     this.modify(product, (n) => n + 1);
//     return this;
//   }

//   public subtract(product: Product) {
//     if (this.modify(product, (n) => n - 1) <= 0) {
//       this.products.delete(product);
//     }
//     return this;
//   }
// }
