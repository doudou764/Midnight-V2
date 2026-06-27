export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "game" | "subscription" | "giftcard" | "software";
  stock: number;
  created_at?: string;
};
