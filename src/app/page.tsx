"use client";

import React, { useDebugValue, useEffect, useReducer, useState } from "react";
import ProductDefaultGrid from "./product-grid";
import Navbar from "./navbar";
import { Cart, newCart } from "./cart";
import CartSidebar from "./cart-sidebar";
import { Account, CartsAPIResult, apiBaseUrl, userId } from "./api";
import ProductSearchGrid from "./product-search-grid";
import ProductCategoryGrid from "./product-category-grid";
import { userAgent } from "next/server";

export default function Home() {
  const [cartId, updateCartId] = useState(1000);
  const [cart, updateCart] = useState(newCart());
  const [cartVisible, updateCartVisible] = useState(false);
  const [query, updateQuery] = useState("");
  const [generation, forceUpdate] = useReducer((x) => x + 1, 0);

  // send request to sync with server
  const updateCartOnServer = () => {
    updateCartId((cartId: number) => {
      updateCart((cart: Cart) => {
        const products = Array.from(cart).map((elem) => {
          const [id, [product, quantity, _]] = elem;
          return { id: id, quantity: quantity };
        });
        fetch(`${apiBaseUrl}/carts/${cartId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            merge: false,
            products: products,
          }),
        });
        return cart;
      });
      return cartId;
    });
  };

  // fetch cart on load
  useEffect(() => {
    let ignore = false;

    fetch(`${apiBaseUrl}/carts/add`, {
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
  }, []);

  return (
    <div
      key={generation}
      className="flex h-screen flex-col overflow-hidden justify-between"
    >
      <Navbar updateCartVisible={updateCartVisible} updateQuery={updateQuery} />
      <div className="h-4"></div>
      <main className="flex-1 overflow-hidden font-mono text-sm px-4 pb-4">
        {query.length == 0 ? (
          <ProductDefaultGrid
            pageSize={25}
            cart={cart}
            updateCart={updateCart}
            updateCartOnServer={updateCartOnServer}
          />
        ) : query.startsWith("!c ") ? (
          <ProductCategoryGrid
            query={query}
            cart={cart}
            updateCart={updateCart}
            updateCartOnServer={updateCartOnServer}
          />
        ) : (
          <ProductSearchGrid
            query={query}
            cart={cart}
            updateCart={updateCart}
            updateCartOnServer={updateCartOnServer}
          />
        )}
        <CartSidebar
          cart={cart}
          visible={cartVisible}
          updateVisible={updateCartVisible}
          updateCart={updateCart}
          updateCartOnServer={updateCartOnServer}
          forceUpdate={forceUpdate}
        />
      </main>
    </div>
  );
}
