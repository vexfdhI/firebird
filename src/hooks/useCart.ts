import { useState, useCallback } from 'react';
import { CartItem, MenuItem, CartState } from '../types/menu';

export const useCart = () => {
  const [cart, setCart] = useState<CartState>({
    items: [],
    total: 0,
    itemCount: 0
  });

  const calculateTotal = useCallback((items: CartItem[]) => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, []);

  const calculateItemCount = useCallback((items: CartItem[]) => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, []);

  const addToCart = useCallback((menuItem: MenuItem, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(item => item.id === menuItem.id);
      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        newItems = prevCart.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item to cart
        const cartItem: CartItem = { ...menuItem, quantity };
        newItems = [...prevCart.items, cartItem];
      }

      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems)
      };
    });
  }, [calculateTotal, calculateItemCount]);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCart(prevCart => {
      const newItems = prevCart.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      );

      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems)
      };
    });
  }, [calculateTotal, calculateItemCount]);

  const removeFromCart = useCallback((itemId: string) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(item => item.id !== itemId);

      return {
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems)
      };
    });
  }, [calculateTotal, calculateItemCount]);

  const clearCart = useCallback(() => {
    setCart({
      items: [],
      total: 0,
      itemCount: 0
    });
  }, []);

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart
  };
};