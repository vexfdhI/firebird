import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ContentGrid from './components/ContentGrid';
import InteractiveMenu from './components/InteractiveMenu';
import CreatorsSection from './components/CreatorsSection';
import AboutSection from './components/AboutSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToSection = (section: string) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero />
            <MenuSection />
            <ContentGrid />
          </>
        );
      case 'about':
        return (
          <AboutSection />
        );
      case 'menu':
        return (
          <InteractiveMenu />
        );
      case 'staff':
        return (
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-serif mb-4">Our Staff</h1>
              <p className="text-lg text-gray-600">Meet the talented team behind Firebird Café.</p>
            </div>
          </div>
        );
      case 'events':
        return (
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-serif mb-4">Events</h1>
              <p className="text-lg text-gray-600">Special occasions and private dining experiences.</p>
            </div>
          </div>
        );
      case 'news':
        return (
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-serif mb-4">News</h1>
              <p className="text-lg text-gray-600">Latest updates from Firebird Café.</p>
            </div>
          </div>
        );
      case 'creator':
        return (
          <CreatorsSection />
        );
      case 'contact':
        return (
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-serif mb-4">Contact Us</h1>
              <p className="text-lg text-gray-600">Get in touch with Firebird Café.</p>
            </div>
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <MenuSection />
            <ContentGrid />
          </>
        );
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
        <div className="flex justify-between items-center p-6">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gold transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          
          <h1 className="text-white font-serif text-2xl tracking-wider">
            FIREBIRD CAFÉ
          </h1>
          
          <button className="border border-white text-white px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300">
            MAKE A RESERVATION
          </button>
        </div>
      </header>

      {/* Navigation Menu */}
      <Navigation 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigate={navigateToSection}
        currentSection={currentSection}
      />

      {/* Main Content */}
      <main>
        {renderCurrentSection()}
      </main>
    </div>
  );
}

export default App;