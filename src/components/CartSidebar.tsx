import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartState } from '../types/menu';

interface CartSidebarProps {
  cart: CartState;
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  cart,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout
}) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <div className="flex items-center space-x-2">
              <ShoppingBag size={24} />
              <h2 className="text-xl font-serif">Your Order</h2>
              <span className="bg-black text-white text-sm px-2 py-1 rounded-full">
                {cart.itemCount}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.items.length === 0 ? (
              <div className="text-center text-gray-500 mt-12">
                <ShoppingBag size={48} className="mx-auto mb-4 opacity-50" />
                <p>Your cart is empty</p>
                <p className="text-sm mt-2">Add some delicious items to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="border-b pb-4">
                    <div className="flex space-x-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-black font-bold">${item.price}</p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 transition-colors duration-200"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 py-1 text-sm">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 transition-colors duration-200"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm transition-colors duration-200"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="border-t p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Subtotal:</span>
                <span className="text-2xl font-bold text-black">
                  ${cart.total.toFixed(2)}
                </span>
              </div>
              
              <p className="text-xs text-gray-500 mb-4 text-center">
                Pickup orders only • Tax will be calculated at checkout
              </p>
              
              <div className="space-y-3">
                <button 
                  onClick={onCheckout}
                  className="w-full bg-black text-white py-3 rounded-lg font-medium tracking-wider hover:bg-gray-800 transition-all duration-300"
                >
                  CHECKOUT - PICKUP ORDER
                </button>
                
                <button
                  onClick={onClearCart}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium tracking-wider hover:bg-gray-50 transition-all duration-300"
                >
                  CLEAR CART
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;