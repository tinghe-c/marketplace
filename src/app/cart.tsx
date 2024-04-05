// export type Cart = unknown;

import { Product } from "./product";

export class Cart {
  products: Map<Product, number>;

  constructor() {
    this.products = new Map<Product, number>();
  }

  modify(product: Product, f: (n: number) => number) {
    const before = this.products.get(product) || 0;
    const after = f(before);
    this.products.set(product, after);
    return after;
  }

  public add(product: Product) {
    console.log("adding to cart");
    this.modify(product, (n) => n + 1);
    return this;
  }

  public subtract(product: Product) {
    if (this.modify(product, (n) => n - 1) <= 0) {
      this.products.delete(product);
    }
    return this;
  }
}
