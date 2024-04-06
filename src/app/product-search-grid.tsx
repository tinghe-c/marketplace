import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProductAPIResult, apiBaseUrl, cleanUpData } from "./api";
import { Product } from "./product";
import ProductTile from "./product-tile";
import { Cart } from "./cart";
import Masonry from "react-responsive-masonry";

interface ProductSearchGridProps {
  query: string;
  cart: Cart;
  updateCart: Dispatch<SetStateAction<Cart>>;
  updateCartOnServer: () => void;
}

export default function ProductSearchGrid({
  query,
  cart,
  updateCart,
  updateCartOnServer,
}: ProductSearchGridProps) {
  const [products, updateProducts] = useState([] as React.JSX.Element[]);

  useEffect(() => {
    let ignore = false;

    fetch(`${apiBaseUrl}/products/search?q=${query}`, {})
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(cleanUpData)
      .then((data: ProductAPIResult) => {
        if (ignore) {
          return;
        }

        updateProducts((_) =>
          data.products.map((product: Product, i: number) => {
            const count = cart.get(product) || 0;
            return (
              <ProductTile
                key={i}
                product={product}
                cart={cart}
                updateCart={updateCart}
                updateCartOnServer={updateCartOnServer}
              />
            );
          })
        );
      });

    return () => {
      ignore = true;
    };
  }, [query, updateProducts]);

  return (
    <div
      id="scrollableDiv"
      className="overflow-y-scroll"
      style={{ height: "100%", overflow: "auto" }}
    >
      <Masonry>{products}</Masonry>
    </div>
  );
}
