import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

interface ProductListProps {
  products: Product[];
  onAddToWishlist: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onAddToWishlist,
}) => (
  <div className="product-list">
    {products.map((product, index) => (
      <ProductCard
      key={`${product.id}-${index}`}
        product={product}
        onAddToWishlist={onAddToWishlist}
      />
    ))}
  </div>
);

export default ProductList;
