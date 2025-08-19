import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video - Cooking Scene */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Firebird Café"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-hero-medium font-serif mb-8 animate-fade-in-up">
            FIREBIRD CAFÉ
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-12 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Located within Jack E. Singley Academy, experience a luxurious dining journey 
            crafted by our talented culinary students, staff, and faculty.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animate-delay-400">
            <button className="btn-gold px-8 py-4">
              EXPLORE OUR MENU
            </button>
            <button className="btn-outline px-8 py-4 border-white text-white hover:bg-white hover:text-black">
              MAKE A RESERVATION
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;