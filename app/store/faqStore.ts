import { create } from "zustand";

interface FAQStore {
  openItem: number | null;
  toggleItem: (id: number) => void;
  isOpen: (id: number) => boolean;
}

export const useFAQStore = create<FAQStore>((set, get) => ({
  openItem: null,

  toggleItem: (id: number) => {
    set((state) => {
      const newOpenItem = state.openItem === id ? null : id;
      return { openItem: newOpenItem };
    });
  },

  isOpen: (id: number) => {
    return get().openItem === id;
  },
}));
