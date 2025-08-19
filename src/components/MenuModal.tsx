import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { MenuItem } from '../types/menu';

interface MenuModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ item, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  if (!isOpen) return null;

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onAddToCart(item, quantity);
    setIsAdding(false);
    onClose();
    
    // Reset form
    setQuantity(1);
    setSpecialInstructions('');
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Image Section */}
            <div className="lg:w-1/2 relative">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-64 lg:h-full object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Content Section */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif mb-4">{item.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                
                {/* Dietary Information */}
                {item.dietary && item.dietary.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {item.dietary.map((diet, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Ingredients */}
                {item.ingredients && (
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Key Ingredients:</h4>
                    <p className="text-sm text-gray-600">{item.ingredients.join(', ')}</p>
                  </div>
                )}
                
                {/* Special Instructions */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Special Instructions</label>
                  <textarea
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="Any dietary restrictions or special requests..."
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none h-20 text-sm focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Quantity and Add to Cart */}
              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium">Qty</span>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={decrementQuantity}
                        className="p-2 hover:bg-gray-100 transition-colors duration-200"
                        disabled={quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2 font-medium">{quantity}</span>
                      <button
                        onClick={incrementQuantity}
                        className="p-2 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">
                    ${(item.price * quantity).toFixed(2)}
                  </div>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="w-full bg-gold text-white py-4 rounded-lg font-medium tracking-wider hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAdding ? 'ADDING TO CART...' : 'ADD TO CART'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuModal;