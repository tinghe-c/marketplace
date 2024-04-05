"use client";

import React, { useState } from "react";
import ProductGrid from "./product-grid";
import Navbar from "./navbar";
import { Cart } from "./cart";
import CartSidebar from "./cart-sidebar";

export default function Home() {
  const [cart, updateCart] = useState(new Cart());
  const [cartVisible, udpateCartVisible] = useState(false);

  return (
    <div className="flex h-screen flex-col overflow-hidden justify-between">
      <Navbar updateCartVisible={udpateCartVisible} />
      <div className="h-4"></div>
      <main
        id="list"
        className="flex-1 overflow-y-scroll font-mono text-sm px-4 pb-4"
      >
        {/* {ProductList({ url: "https://dummyjson.com/products" })} */}
        <ProductGrid
          baseUrl="https://dummyjson.com"
          pageSize={25}
          updateCart={updateCart}
        />
        <CartSidebar
          cart={cart}
          visible={cartVisible}
          updateVisible={udpateCartVisible}
        />
        {/* <Foo /> */}
      </main>
    </div>
  );
}
