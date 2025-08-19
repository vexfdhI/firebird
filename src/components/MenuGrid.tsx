import React, { useState } from 'react';
import { MenuItem } from '../types/menu';
import MenuModal from './MenuModal';

interface MenuGridProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const MenuGrid: React.FC<MenuGridProps> = ({ items, onAddToCart }) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL CATEGORY');

  const openModal = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const categories = ['ALL CATEGORY', 'MAIN COURSE', 'DESSERT', 'APPETIZER'];
  
  const getFilteredItems = () => {
    if (activeCategory === 'ALL CATEGORY') {
      return items;
    }
    if (activeCategory === 'APPETIZER') {
      return items.filter(item => item.category === 'Beverage');
    }
    return items.filter(item => 
      item.category.toUpperCase().replace(' ', '_') === activeCategory.replace(' ', '_')
    );
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif mb-6 text-gray-800">
          Discover
        </h2>
        <h3 className="text-3xl font-serif mb-8 text-gray-700">
          Our <em>Dining</em> Menu
        </h3>
        
        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-8 border-b border-gray-300">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-3 px-2 text-sm font-medium tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.slice(0, 9).map((item) => (
          <div 
            key={item.id}
            className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            onClick={() => openModal(item)}
          >
            {/* Image */}
            <div className="relative overflow-hidden h-64">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-serif group-hover:text-gray-600 transition-colors duration-300">
                  {item.name}
                </h4>
                <span className="text-xl font-serif text-gray-800">
                  ${item.price}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                {item.description}
              </p>
              
              {/* Add to Cart Button */}
              <button 
                className="w-full bg-black text-white py-3 rounded font-medium tracking-wider hover:bg-gray-800 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(item, 1);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {selectedItem && (
        <MenuModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={closeModal}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
};

export default MenuGrid;