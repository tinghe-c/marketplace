import Image from "next/image";
import { Product } from "./product";
import { Cart, addToCart, subtractFromCart } from "./cart";
import { Dispatch, SetStateAction } from "react";

interface CartItemProps {
  product: Product;
  count: number;
  updateCart: Dispatch<SetStateAction<Cart>>;
}

export default function CartItem(props: CartItemProps) {
  const plus = () => props.updateCart(addToCart(props.product));
  const minus = () => props.updateCart(subtractFromCart(props.product));
  return (
    <div className="p-1">
      <div className="border overflow-auto">
        <Image
          className="float-right"
          width="100"
          height="100"
          src={props.product.thumbnail}
          alt={props.product.description}
        />
        <div className="text-left p-2">
          <p>
            <strong>{props.product.title}</strong>
          </p>
          <p>${props.product.price}</p>
          <p>in cart: {props.count}</p>
          <p className="cursor-pointer" onClick={plus}>
            +
          </p>
          <p className="cursor-pointer" onClick={minus}>
            -
          </p>
        </div>
      </div>
    </div>
  );
}
