"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GridLayout from "react-grid-layout";
import ProductTile from "./product-tile";
import _ from "lodash";
import Masonry from "react-responsive-masonry";
import { Product } from "./product";
import { Cart } from "./cart";
import { ProductAPIResult, apiBaseUrl, cleanUpData } from "./api";

interface ProductGridProps {
  pageSize: number;
  cart: Cart;
  updateCart: Dispatch<SetStateAction<Cart>>;
  updateCartOnServer: () => void;
}

export default function ProductDefaultGrid({
  pageSize,
  cart,
  updateCart,
  updateCartOnServer,
}: ProductGridProps) {
  const [products, updateProducts] = useState([] as React.JSX.Element[]);
  const [currentUrl, updateCurrentUrl] = useState(
    `${apiBaseUrl}/products?skip=0&limit=${pageSize}`
  );
  const [nextUrl, updateNextUrl] = useState(undefined as unknown as string);

  useEffect(() => {
    let ignore = false;

    fetch(currentUrl, {})
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(cleanUpData)
      .then((data: ProductAPIResult) => {
        if (ignore) {
          return;
        }

        updateProducts((oldProducts) => {
          const newProducts = data.products.map(
            (product: Product, i: number) => {
              const count = cart.get(product.id) || 0;
              return (
                <ProductTile
                  key={i}
                  product={product}
                  cart={cart}
                  updateCart={updateCart}
                  updateCartOnServer={updateCartOnServer}
                />
              );
            }
          );
          return [...oldProducts, ...newProducts];
        });

        updateNextUrl((_) => {
          const total = data.skip + data.limit;
          if (total < data.total) {
            return `${apiBaseUrl}/products?skip=${total}&limit=${pageSize}`;
          }
          return undefined as unknown as string;
        });
      });

    return () => {
      ignore = true;
    };
  }, [
    cart,
    pageSize,
    updateCart,
    updateCartOnServer,
    currentUrl,
    updateProducts,
    updateNextUrl,
  ]);

  const fetchMore = () => {
    console.log(`fetching more, have ${products.length}`);
    updateCurrentUrl((_) => nextUrl);
  };

  return (
    <div
      id="scrollableDiv"
      className="overflow-y-scroll"
      style={{ height: "100%", overflow: "auto" }}
    >
      <InfiniteScroll
        dataLength={products.length}
        next={() => fetchMore()}
        hasMore={nextUrl !== undefined}
        loader={<div>loading more products...</div>}
        scrollableTarget="scrollableDiv"
      >
        <Masonry>{products}</Masonry>
      </InfiniteScroll>
    </div>
  );
}
