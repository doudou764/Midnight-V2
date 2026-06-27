import { create } from "zustand";

type WishlistItem = {
  id: string;
  name: string;
  price: number;
};

type WishlistState = {
  items: WishlistItem[];
  toggle: (item: WishlistItem) => void;
};

export const useWishlist = create<WishlistState>((set) => ({
  items: [],

  toggle: (item) =>
    set((state) => {
      const exists = state.items.find((i) => i.id === item.id);

      if (exists) {
        return {
          items: state.items.filter((i) => i.id !== item.id)
        };
      }

      return { items: [...state.items, item] };
    })
}));
