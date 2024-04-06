import Image from "next/image";
import { Product } from "./product";
import { Cart, addToCart, subtractFromCart } from "./cart";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface ProductTileProps {
  product: Product;
  cart: Cart;
  updateCart: Dispatch<SetStateAction<Cart>>;
  updateCartOnServer: () => void;
}

export default function ProductTile({
  product,
  cart,
  updateCart,
  updateCartOnServer,
}: ProductTileProps) {
  const [count, updateCount] = useState(0);

  useEffect(() => {
    if (cart.has(product.id)) {
      updateCount((_) => cart.get(product.id)![1]);
    }
  }, [cart, product.id]);

  const plus = () => {
    updateCart(
      addToCart({
        id: product.id,
        product: product,
        updateCount: updateCount,
      })
    );
    updateCartOnServer();
    updateCount((c) => c + 1);
  };

  const minus = () => {
    updateCart(subtractFromCart(product.id));
    updateCartOnServer();
    updateCount((c) => c - 1);
  };

  return (
    <div className="p-1">
      <div className="border overflow-auto">
        <Image
          className="float-right"
          width="100"
          height="100"
          src={product.thumbnail}
          alt={product.description}
        />
        <div className="text-left p-2">
          <p>
            <strong>{product.title}</strong>
          </p>
          <p>
            <span>${product.price}</span>
            <span> | </span>
            <span>
              <button className="button" onClick={plus}>
                +
              </button>
            </span>
            {count > 0 ? (
              <span>
                <span> | </span>
                <button className="button" onClick={minus}>
                  -
                </button>
                <span> | </span>
                <div className="in-cart inline-block duration-300">
                  in cart: {count}
                </div>
              </span>
            ) : (
              <span></span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
