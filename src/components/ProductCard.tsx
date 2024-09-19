import React from "react";
import "./ProductCards.css";

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

interface ProductCardProps {
  product: Product;
  onAddToWishlist: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(
  ({ product, onAddToWishlist }) => {
    if (!product) {
      return <div>Product not available</div>;
    }

    return (
      <div className="product-card">
        <h2>{product.title}</h2>
        <img
          src={product.category.image}
          alt={product.title}
          loading="lazy" // Lazy loading de imágenes
        />
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Category:</strong> {product.category.name}
        </p>
        <button onClick={() => onAddToWishlist(product)}>
          Add to Wishlist
        </button>
      </div>
    );
  }
);

export default ProductCard;
