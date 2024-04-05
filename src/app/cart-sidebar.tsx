import { Dispatch, SetStateAction } from "react";
import { Cart } from "./cart";
import { Sidebar } from "react-pro-sidebar";
import CartItem from "./cart-item";

interface CartSidebarProps {
  cart: Cart;
  visible: boolean;
  updateVisible: Dispatch<SetStateAction<boolean>>;
}

export default function CartSidebar(props: CartSidebarProps) {
  return (
    <Sidebar
      rtl
      onBackdropClick={() => props.updateVisible((_) => false)}
      toggled={props.visible}
      breakPoint="always"
    >
      {Array.from(props.cart.products).map((entry, i) => {
        const [product, count] = entry;
        return (
          <div key={i}>
            <CartItem {...product} count={count}></CartItem>
          </div>
        );
      })}
    </Sidebar>
  );
}
