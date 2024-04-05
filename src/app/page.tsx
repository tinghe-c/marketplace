"use client";

import React, { useDebugValue, useEffect, useState } from "react";
import ProductGrid from "./product-grid";
import Navbar from "./navbar";
import { Cart, newCart } from "./cart";
import CartSidebar from "./cart-sidebar";

export default function Home() {
  const [cartId, updateCartId] = useState(0);
  const [cart, updateCart] = useState(newCart());
  const [cartVisible, updateCartVisible] = useState(false);

  const userId = 1;

  // update cartid on load
  useEffect(() => {
    let ignore = false;

    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        products: [{}],
      }),
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        if (ignore) {
          return;
        }
        updateCartId((_) => data.id);
      });

    return () => {
      ignore = true;
    };
  });

  return (
    <div className="flex h-screen flex-col overflow-hidden justify-between">
      <Navbar updateCartVisible={updateCartVisible} />
      <div className="h-4"></div>
      <main className="flex-1 overflow-y-scroll font-mono text-sm px-4 pb-4">
        {/* {ProductList({ url: "https://dummyjson.com/products" })} */}
        <ProductGrid
          baseUrl="https://dummyjson.com"
          pageSize={25}
          cart={cart}
          updateCart={updateCart}
        />
        <CartSidebar
          cart={cart}
          visible={cartVisible}
          updateVisible={updateCartVisible}
          updateCart={updateCart}
        />
        {/* <Foo /> */}
      </main>
    </div>
  );
}
