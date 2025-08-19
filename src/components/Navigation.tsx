import React from 'react';
import { X } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
  currentSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose, onNavigate, currentSection }) => {
  const navigationItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'menu', label: 'MENU' },
    { id: 'staff', label: 'STAFF' },
    { id: 'events', label: 'EVENTS' },
    { id: 'news', label: 'NEWS' },
    { id: 'creator', label: 'CREATOR' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />
      
      {/* Navigation Panel */}
      <nav 
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="text-black hover:text-gold transition-colors duration-300"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Navigation Items */}
          <div className="flex-1 px-6">
            <ul className="space-y-8">
              {navigationItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`block text-left text-lg font-medium tracking-wider transition-all duration-300 hover:text-gold hover:translate-x-2 ${
                      currentSection === item.id ? 'text-gold' : 'text-black'
                    }`}
                    style={{
                      animationDelay: isOpen ? `${index * 0.1}s` : '0s'
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Reservation Button */}
          <div className="p-6">
            <button className="w-full border border-black text-black px-6 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300">
              MAKE A RESERVATION
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;