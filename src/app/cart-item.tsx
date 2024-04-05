import Image from "next/image";
import { Product } from "./product";

interface CartItemProps extends Product {
  count: number;
}

export default function CartItem(props: CartItemProps) {
  return (
    <div className="p-1">
      <div className="border overflow-auto">
        <Image
          className="float-right"
          width="100"
          height="100"
          src={props.thumbnail}
          alt={props.description}
        />
        <div className="text-left p-2">
          <p>
            <strong>{props.title}</strong>
          </p>
          <p>${props.price}</p>
          <p>in cart: {props.count}</p>
        </div>
      </div>
    </div>
  );
}
