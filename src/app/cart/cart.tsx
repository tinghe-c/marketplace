import { Map } from "immutable";
import { Product } from "../product/product";
import { Dispatch, SetStateAction } from "react";
import { error } from "console";

export type Cart = Map<
  number,
  [Product, number, Dispatch<SetStateAction<number>>]
>;

export function newCart(): Cart {
  return Map();
}

export function addToCart({
  id,
  product,
  updateCount,
}: {
  id: number;
  product: Product;
  updateCount: Dispatch<SetStateAction<number>>;
}) {
  return (cart: Cart) =>
    cart.update(id, [product, 0, updateCount], ([product, count, fn]) => [
      product,
      count + 1,
      fn,
    ]);
}

export function subtractFromCart(id: number) {
  return (cart: Cart) => {
    let [product, count, updateCount] = cart.get(id)!;
    switch (count) {
      case 1:
        return cart.delete(id);
      default:
        return cart.update(
          id,
          [product, count, updateCount],
          ([product, count, fn]) => [product, count - 1, fn]
        );
    }
  };
}
