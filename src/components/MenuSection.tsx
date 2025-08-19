import React from 'react';

const MenuSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Content */}
          <div className="bg-gray-100 flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg">
              <h2 className="text-section-title font-serif mb-8">MENU</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A progression of rare and beautiful ingredients where texture, flavour and 
                harmony is paramount. Delve into the Firebird Café dining experience with 
                expertly crafted dishes and a thoughtfully curated wine selection.
              </p>
              <button className="btn-outline hover:bg-black hover:text-white">
                READ MORE
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop')`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;