import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonLoading,
  IonButton,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import ProductList from "../components/ProductList";
import { getProducts, Product } from "../services/api";
import { useWishlist } from "../context/WishlistContext";
import "./Home.css";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const { addToWishlist } = useWishlist();
  const history = useHistory();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search by product</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
          className="custom-searchbar"
            value={searchTerm}
            onIonInput={(e) => setSearchTerm(e.detail.value!)}
            placeholder="Search by product name"
          />
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonButton onClick={() => history.push("/wishlist")} expand="block">
          View Wishlist
        </IonButton>

        {loading ? (
          <IonLoading isOpen={loading} message="Loading products..." />
        ) : filteredProducts.length > 0 ? (
          <ProductList
            products={filteredProducts}
            onAddToWishlist={addToWishlist}
          />
        ) : (
          <p className="no-results-message">No products found.</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
