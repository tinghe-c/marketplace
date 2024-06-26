import Image from "next/image";
import { Product } from "../product/product";
import { Cart, addToCart, subtractFromCart } from "./cart";
import { Dispatch, DispatchWithoutAction, SetStateAction } from "react";

interface CartItemProps {
  product: Product;
  count: number;
  updateCount: Dispatch<SetStateAction<number>>;
  updateCart: Dispatch<SetStateAction<Cart>>;
  updateCartOnServer: () => void;
  forceUpdate: DispatchWithoutAction;
}

export default function CartTile(props: CartItemProps) {
  const plus = () => {
    props.updateCart(
      addToCart({
        id: props.product.id,
        product: props.product,
        updateCount: props.updateCount,
      })
    );
    props.updateCartOnServer();
    props.updateCount((c) => c + 1);
    props.forceUpdate();
    // props.updateQuery((x) => x + "o");
    // props.updateQuery((x) => x.substring(1));
  };
  const minus = () => {
    props.updateCart(subtractFromCart(props.product.id));
    props.updateCartOnServer();
    props.updateCount((c) => c - 1);
    props.forceUpdate();
    // props.updateQuery((x) => x + "o");
    // props.updateQuery((x) => x.substring(1));
  };

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
          <span>
            <span className="button" onClick={minus}>
              -
            </span>
            <span> | </span>
            <span className="button" onClick={plus}>
              +
            </span>
            <span> | </span>
            <span className="in-cart inline-block">in cart: {props.count}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
