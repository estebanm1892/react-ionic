// src/services/api.ts

const BASE_URL = "https://api.escuelajs.co/api/v1";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products?offset=0&limit=50`);
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
