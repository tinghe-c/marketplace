"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GridLayout from "react-grid-layout";
import ProductTile from "./product-tile";
import _ from "lodash";
import Masonry from "react-responsive-masonry";
import { Product } from "./product";
import { Cart } from "./cart";

interface ProductListProps {
  baseUrl: string;
  pageSize: number;
  updateCart: Dispatch<SetStateAction<Cart>>;
}

export default function ProductGrid({
  baseUrl,
  pageSize,
  updateCart,
}: ProductListProps) {
  const [products, updateProducts] = useState([] as string[]);
  // const [numProducts, updateNumProducts] = useState(
  //   undefined as unknown as number
  // );
  const [currentUrl, updateCurrentUrl] = useState(
    `${baseUrl}/products?skip=0&limit=${pageSize}`
  );
  // const [nextUrl, updateNextUrl] = useState("");
  const [nextUrl, updateNextUrl] = useState(undefined as unknown as string);

  useEffect(() => {
    let ignore = false;

    fetch(currentUrl, {})
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        if (ignore) {
          return;
        }

        updateProducts((oldProducts) => {
          const newProducts = data.products.map(
            (product: Product, i: number) => (
              <ProductTile key={i} product={product} updateCart={updateCart} />
            )
          );
          return [...oldProducts, ...newProducts];
        });

        updateNextUrl((_) => {
          const total = data.skip + data.limit;
          if (total < data.total) {
            console.log(
              `new url: ${baseUrl}/products?skip=${total}&limit=${pageSize}`
            );
            return `${baseUrl}/products?skip=${total}&limit=${pageSize}`;
          }
          return undefined as unknown as string;
        });
      });

    return () => {
      ignore = true;
    };
  }, [currentUrl, updateProducts, updateNextUrl]);

  const fetchMore = () => {
    console.log(`fetching more, have ${products.length}`);
    updateCurrentUrl((_) => nextUrl);
  };

  return (
    <div id="scrollableDiv" style={{ height: "100%", overflow: "auto" }}>
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
