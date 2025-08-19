import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { menuItems } from '../data/menuItems';
import MenuGrid from './MenuGrid';
import CartSidebar from './CartSidebar';
import CheckoutForm from './CheckoutForm';

const InteractiveMenu: React.FC = () => {
  const { cart, addToCart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleAddToCart = (item: any, quantity: number) => {
    addToCart(item, quantity);
    // Show brief success feedback
    setTimeout(() => {
      // Could add toast notification here
    }, 100);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    clearCart();
    alert('Order placed successfully! You will receive a confirmation email shortly.');
  };

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Fixed Cart Button */}
      {cart.itemCount > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 z-30 flex items-center space-x-2"
        >
          <ShoppingBag size={24} />
          <span className="bg-white text-black px-2 py-1 rounded-full text-sm font-bold">
            {cart.itemCount}
          </span>
        </button>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Content - Menu Description */}
          <div className="bg-gray-100 flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg">
              <h2 className="text-section-title font-serif mb-8">MENU</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Firebird Café is a progression of rare and beautiful ingredients where texture, 
                flavour and harmony is paramount.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Continually inspired by culinary education, the creative process for our student chefs 
                begins in working closely with local farmers, fishermen, producers and artisans who 
                cultivate bespoke produce exclusively for Firebird Café. For each dish, the growth of 
                every element and the selection of every ceramic piece is carefully considered and 
                crafted for its role in the dining experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Firebird Café brings a personal, interactive passage for diners through our 
                students' culinary evolution.
              </p>
              <button 
                onClick={() => document.getElementById('menu-grid')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline hover:bg-black hover:text-white"
              >
                VIEW MENU
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop')`
              }}
            />
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div id="menu-grid" className="bg-white">
        {/* Background texture applied only to this section */}
        <div 
          className="relative"
          style={{
            backgroundImage: `url('/images/image copy.png')`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center'
          }}
        >
          {/* Subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
          
          <div className="relative z-10">
            <div className="text-center py-16">
              <h2 className="text-4xl font-serif mb-4">OUR CULINARY OFFERINGS</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Each dish is carefully crafted by our talented culinary students under expert guidance, 
                showcasing both traditional techniques and innovative approaches.
              </p>
            </div>
            
            <MenuGrid 
              items={menuItems}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        onCheckout={handleCheckout}
      />

      {/* Checkout Form */}
      <CheckoutForm
        cart={cart}
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderComplete={handleOrderComplete}
      />
    </section>
  );
};

export default InteractiveMenu;