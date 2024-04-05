"use client";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GridLayout from "react-grid-layout";
import Product, { ProductProps } from "./product";
import _ from "lodash";
import Masonry from "react-responsive-masonry";

interface ProductListProps {
  url: string;
}

interface LayoutEntry {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
}

export default function ProductGrid({ url }: ProductListProps) {
  const [products, updateProducts] = useState([] as string[]);
  const [currentUrl, updateCurrentUrl] = useState(url);
  const [nextUrl, updateNextUrl] = useState(undefined as unknown as string);

  useEffect(() => {
    fetch(currentUrl, {})
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        updateProducts((oldProducts) => {
          const newProducts = data.products.map((product: ProductProps) => (
            <Product {...product} />
          ));
          return [...oldProducts, ...newProducts];
        });
      });
  }, [currentUrl, updateNextUrl]);

  const fetchMore = () => {
    updateCurrentUrl((_) => nextUrl);
  };

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchMore}
      hasMore={nextUrl !== ""}
      loader={<div>loading more products...</div>}
    >
      <Masonry>{products}</Masonry>
    </InfiniteScroll>
  );
}
