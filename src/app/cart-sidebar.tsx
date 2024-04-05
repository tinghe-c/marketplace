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

const totalPrice = (cart: Cart) =>
  Array.from(cart.map((l) => l[0])).reduce((x, [p, n]) => x + n * p.price, 0);

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
      <div className="p-1" id="cart-summary">
        <div className="overflow-auto">
          <div className="text-left p-2">
            <span>
              <strong>Cart subtotal</strong>
            </span>
            <span className="float-right">${totalPrice(props.cart)}</span>
          </div>
        </div>
      </div>
      {Array.from(props.cart).map((entry, i) => {
        const [product, [count, updateCount]] = entry;
        return (
          <div key={i}>
            <CartItem
              product={product}
              count={count}
              updateCount={updateCount}
              updateCart={props.updateCart}
            ></CartItem>
          </div>
        );
      })}
    </Sidebar>
  );
}
