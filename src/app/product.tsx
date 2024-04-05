import Image from "next/image";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default function Product(product: ProductProps) {
  return (
    <div>
      <p>{product.title}</p>
      <Image
        width="100"
        height="100"
        src={product.thumbnail}
        alt={product.description}
      />
    </div>
  );
}
