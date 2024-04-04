"use client";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface ProductListProps {
  url: string;
}

export default function ProductList({ url }: ProductListProps) {
  const [products, updateProducts] = useState([] as string[]);
  const [currentUrl, updateCurrentUrl] = useState(url);
  const [nextUrl, updateNextUrl] = useState(undefined as unknown as string);

  useEffect(() => {
    fetch(currentUrl, { credentials: "same-origin" })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        updateProducts((oldProducts) => {
          const newProducts = data.products.map(
            (product: { title: string }) => (
              // <Product url={post.url} key={post.url} />
              <p>{product.title}</p>
            )
          );
          return [...oldProducts, ...newProducts];
        });
      });
  }, [currentUrl, updateNextUrl]);

  const fetchMore = () => {
    updateCurrentUrl(nextUrl);
  };

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchMore}
      hasMore={nextUrl !== ""}
      loader={<div>loading more products...</div>}
    >
      {products}
    </InfiniteScroll>
  );
}
