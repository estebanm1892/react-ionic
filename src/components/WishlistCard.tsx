import React from "react";
import "./WishlistCard.css";

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
  uniqueId?: string; // uniqueId para los productos
}

interface WishlistCardProps {
  product: Product;
  onRemoveFromWishlist: (uniqueId: string) => void;
}

const WishlistCard: React.FC<WishlistCardProps> = ({
  product,
  onRemoveFromWishlist,
}) => {
  return (
    <div className="wishlist-card">
      <h2>{product.title}</h2>
      <img
        src={product.category.image}
        alt={product.title}
        loading="lazy"
        className="wishlist-card-img"
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
      <button onClick={() => onRemoveFromWishlist(product.uniqueId!)}>
        Remove from Wishlist
      </button>
    </div>
  );
};

export default WishlistCard;
