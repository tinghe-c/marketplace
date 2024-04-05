import { Dispatch, SetStateAction } from "react";
import { Cart } from "./cart";
import { Sidebar } from "react-pro-sidebar";
import CartItem from "./cart-item";

interface CartSidebarProps {
  cart: Cart;
  visible: boolean;
  updateVisible: Dispatch<SetStateAction<boolean>>;
  updateCart: Dispatch<SetStateAction<Cart>>;
}

export default function CartSidebar(props: CartSidebarProps) {
  return (
    <Sidebar
      rtl
      className="sidebar"
      width="500px"
      onBackdropClick={() => props.updateVisible((_) => false)}
      toggled={props.visible}
      breakPoint="all"
    >
      {Array.from(props.cart).map((entry, i) => {
        const [product, count] = entry;
        return (
          <div key={i}>
            <CartItem
              product={product}
              count={count}
              updateCart={props.updateCart}
            ></CartItem>
          </div>
        );
      })}
    </Sidebar>
  );
}
