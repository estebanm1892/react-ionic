import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { useWishlist } from "../context/WishlistContext";
import WishlistCard from "../components/WishlistCard";
import "./WishlistPage.css";

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Wishlist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="wishlist-container">
          {wishlist.length === 0 ? (
            <p>There are no products in the wishlist.</p>
          ) : (
            wishlist.map((product) => (
              <WishlistCard
                key={product.uniqueId}
                product={product}
                onRemoveFromWishlist={removeFromWishlist}
              />
            ))
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WishlistPage;
