"use client";
import { createContext, useContext, useReducer, ReactNode } from "react";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

type CartItem = Product & { qty: number };

type CartState = { items: CartItem[] };

type Action =
  | { type: "ADD"; product: Product }
  | { type: "REMOVE"; id: string }
  | { type: "INCREMENT"; id: string }
  | { type: "DECREMENT"; id: string }
  | { type: "CLEAR" };

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD": {
      const exists = state.items.find(i => i.id === action.product.id);
      if (exists)
        return { items: state.items.map(i => i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i) };
      return { items: [...state.items, { ...action.product, qty: 1 }] };
    }
    case "REMOVE":
      return { items: state.items.filter(i => i.id !== action.id) };
    case "INCREMENT":
      return { items: state.items.map(i => i.id === action.id ? { ...i, qty: i.qty + 1 } : i) };
    case "DECREMENT":
      return { items: state.items.map(i => i.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i) };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

const CartCtx = createContext<{
  items: CartItem[];
  add: (p: Product) => void;
  remove: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clear: () => void;
  total: number;
  count: number;
} | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = state.items.reduce((sum, i) => sum + i.qty, 0);
  return (
    <CartCtx.Provider value={{
      items: state.items,
      add: p => dispatch({ type: "ADD", product: p }),
      remove: id => dispatch({ type: "REMOVE", id }),
      increment: id => dispatch({ type: "INCREMENT", id }),
      decrement: id => dispatch({ type: "DECREMENT", id }),
      clear: () => dispatch({ type: "CLEAR" }),
      total,
      count,
    }}>
      {children}
    </CartCtx.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};