
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  imageUrl: string;
}

export interface Mission {
  id: string;
  name: string;
  budget: number;
  timeLimit: number; // in seconds
  theme: string;
  description: string;
  longDescription: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Score {
  itemsBought: number;
  totalSpent: number;
  timeUsed: number;
  finalBalance: number;
  missionBudget: number;
}