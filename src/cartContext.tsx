import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartContextType, CartItem, CartProviderProps} from './interfaces';

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => 
          cartItem.id === item.id && 
          cartItem.restaurantId === item.restaurantId &&
          JSON.stringify(cartItem.sideDish) === JSON.stringify(item.sideDish) &&
          JSON.stringify(cartItem.changes) === JSON.stringify(item.changes)
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        const isNewRestaurant = !prevItems.some((cartItem) => cartItem.restaurantId === item.restaurantId);
        return isNewRestaurant ? [item] : [...prevItems, item];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


export default CartProvider;