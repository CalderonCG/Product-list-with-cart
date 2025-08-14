import { createContext, useContext, useState, type ReactNode } from "react";

export type CartItem = {
  name: string;
  thumbnail: string;
  quantity: number;
  price: number;
};

type CartItemContext = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartItemContext | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {

    const hasItem = cart.find((cartItem) => item.name === cartItem.name)
    if (hasItem) {
      const newCart= cart.map((cartItem )=> (cartItem.name === item.name ? {...cartItem, quantity:item.quantity}: cartItem))
      .filter((cartItem) => cartItem.quantity > 0)

      setCart(newCart)
      return;
    }
    setCart((prevCart) => [...prevCart, item] )
    return;
  };
  const removeItem = (name: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


export function useCart (){
  const context = useContext(CartContext)
  if (context === undefined){
    
		throw new Error('useCart must be used within a CountProvider')
  }
  return context
}
