import Image from "next/image";
import { Product } from "./product";
import { Cart, addToCart } from "./cart";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";

interface ProductTileProps {
  product: Product;
  cart: Cart;
  updateCart: Dispatch<SetStateAction<Cart>>;
}

export default function ProductTile({ product, updateCart }: ProductTileProps) {
  const [count, updateCount] = useState(0);

  const plus = () => {
    // TODO API call
    updateCart(
      addToCart({
        product,
        updateCount,
      })
    );
    updateCount((c) => c + 1);
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
              <button className="button duration-300" onClick={plus}>
                to cart
              </button>
            </span>
            {count > 0 ? (
              <span>
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
