import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { CartState } from '../types/menu';

interface CartIconProps {
  cart: CartState;
  onClick: () => void;
  className?: string;
}

const CartIcon: React.FC<CartIconProps> = ({ cart, onClick, className = '' }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousCount, setPreviousCount] = useState(0);

  // Trigger animation when items are added
  useEffect(() => {
    if (cart.itemCount > previousCount) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
    setPreviousCount(cart.itemCount);
  }, [cart.itemCount, previousCount]);

  if (cart.itemCount === 0) return null;

  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 z-30 group
        bg-gradient-to-r from-gray-900 to-black
        text-white p-4 rounded-full shadow-2xl
        hover:shadow-3xl hover:scale-105
        transition-all duration-300 ease-out
        border border-gray-700 hover:border-gold
        ${isAnimating ? 'animate-bounce' : ''}
        ${className}
      `}
      aria-label={`Shopping cart with ${cart.itemCount} items`}
    >
      {/* Cart Icon with Hover Effect */}
      <div className="relative">
        <ShoppingBag 
          size={28} 
          className="group-hover:text-gold transition-colors duration-300" 
        />
        
        {/* Animated Item Count Badge */}
        <div className={`
          absolute -top-3 -right-3
          bg-gold text-black
          min-w-[24px] h-6 rounded-full
          flex items-center justify-center
          text-sm font-bold
          transform transition-all duration-300
          ${isAnimating ? 'scale-125 bg-yellow-400' : 'scale-100'}
          shadow-lg border-2 border-white
        `}>
          {cart.itemCount}
        </div>

        {/* Pulse Animation Ring */}
        {isAnimating && (
          <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-75" />
        )}
      </div>

      {/* Hover Tooltip */}
      <div className="
        absolute bottom-full right-0 mb-2
        bg-black text-white px-3 py-2 rounded-lg
        text-sm whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transform translate-y-2 group-hover:translate-y-0
        transition-all duration-300
        pointer-events-none
        shadow-xl border border-gray-700
      ">
        <div className="font-medium">
          {cart.itemCount} item{cart.itemCount !== 1 ? 's' : ''} • ${cart.total.toFixed(2)}
        </div>
        <div className="text-xs text-gray-300 mt-1">
          Click to checkout
        </div>
        {/* Tooltip Arrow */}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
      </div>
    </button>
  );
};

export default CartIcon;