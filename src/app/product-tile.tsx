import Image from "next/image";
import { Product } from "./product";
import { Cart, addToCart } from "./cart";
import { Dispatch, SetStateAction } from "react";

interface ProductTileProps {
  product: Product;
  updateCart: Dispatch<SetStateAction<Cart>>;
}

export default function ProductTile({ product, updateCart }: ProductTileProps) {
  const plus = () => {
    // TODO API call
    updateCart(addToCart(product));
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
          <p>${product.price}</p>
          <button onClick={plus}>to cart</button>
        </div>
      </div>
    </div>
  );
}
