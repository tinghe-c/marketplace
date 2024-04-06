import { Dispatch, DispatchWithoutAction, SetStateAction } from "react";
import { Cart } from "./cart";
import { Sidebar } from "react-pro-sidebar";
import CartTile from "./cart-tile";
import CheckoutPopup from "./checkout-popup";

interface CartSidebarProps {
  cart: Cart;
  visible: boolean;
  updateVisible: Dispatch<SetStateAction<boolean>>;
  updateCart: Dispatch<SetStateAction<Cart>>;
  updateCartOnServer: () => void;
  forceUpdate: DispatchWithoutAction;
}

const totalPrice = (cart: Cart) =>
  Array.from(cart.values()).reduce(
    (acc, [prod, qty, _]) => acc + qty * prod.price,
    0
  );

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
      <div className="cart-summary p-1 border-b">
        <div className="overflow-auto">
          <div className="text-left p-2">
            <span>
              <strong>Cart subtotal:</strong> ${totalPrice(props.cart)}
            </span>
            {props.cart.isEmpty() ? <span></span> : <CheckoutPopup />}
          </div>
        </div>
      </div>
      {Array.from(props.cart).map((entry, i) => {
        const [id, [product, count, updateCount]] = entry;
        return (
          <div key={i}>
            <CartTile
              product={product}
              count={count}
              updateCount={updateCount}
              updateCart={props.updateCart}
              updateCartOnServer={props.updateCartOnServer}
              forceUpdate={props.forceUpdate}
            ></CartTile>
          </div>
        );
      })}
    </Sidebar>
  );
}
