import React from 'react';

const ContentGrid: React.FC = () => {
  const gridItems = [
    {
      id: 1,
      title: 'DINNER AT FIREBIRD',
      subtitle: 'THE FIREBIRD EXPERIENCE',
      description: 'Join us for an unforgettable evening where culinary artistry meets academic excellence. Our students create extraordinary dishes in a sophisticated dining atmosphere.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      span: 'lg:col-span-1'
    },
    {
      id: 2,
      title: 'CULINARY BY FIREBIRD',
      subtitle: 'CULINARY BY FIREBIRD',
      description: 'The essence of culinary education, across expertly prepared courses. Experience innovative techniques and flavor combinations crafted by our talented students.',
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      span: 'lg:col-span-1'
    },
    {
      id: 3,
      title: 'DESSERT',
      subtitle: 'DESSERTS BY FIREBIRD',
      description: 'Desserts by Firebird. What could be better than ending a perfect day with something sweet? Our pastry students create memorable finales to your dining experience.',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      span: 'lg:col-span-1'
    },
    {
      id: 4,
      title: 'EDUCATION',
      subtitle: 'CULINARY EDUCATION AT SINGLEY ACADEMY',
      description: 'Firebird Café showcases the exceptional talents of our culinary students. Every dish tells a story of learning, passion, and dedication to the culinary arts.',
      image: 'https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      span: 'lg:col-span-1'
    },
    {
      id: 5,
      title: 'AWARDS',
      subtitle: 'ACADEMY EXCELLENCE AWARDS 2024',
      description: 'BEST CULINARY PROGRAM RECOGNITION - Jack E. Singley Academy is proud to have been awarded recognition for excellence in culinary education and student achievement.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      span: 'lg:col-span-1'
    },
    {
      id: 6,
      title: 'NEWS',
      subtitle: 'CONTINUE READING OUR NEWS HERE',
      description: 'Stay updated with the latest happenings at Firebird Café, student achievements, special events, and culinary program developments.',
      image: '',
      span: 'lg:col-span-1',
      isTextOnly: true
    }
  ];

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {gridItems.map((item, index) => (
          <div 
            key={item.id}
            className={`group relative overflow-hidden hover-lift cursor-pointer ${item.span} ${
              item.isTextOnly ? 'bg-gray-100' : ''
            }`}
            style={{ minHeight: '400px' }}
          >
            {!item.isTextOnly ? (
              <>
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                  <div className="transform group-hover:translate-y-[-10px] transition-transform duration-300">
                    <p className="text-sm font-medium tracking-wider mb-2 opacity-80">
                      {item.title}
                    </p>
                    <h3 className="text-2xl font-serif mb-4 leading-tight">
                      {item.subtitle}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 opacity-90">
                      {item.description}
                    </p>
                    <button className="btn-outline border-white text-white hover:bg-white hover:text-black text-xs px-6 py-2">
                      READ MORE
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Text Only Card */
              <div className="h-full flex flex-col justify-center p-8">
                <div className="text-center">
                  <h3 className="text-4xl font-serif mb-6 leading-tight">
                    CONTINUE READING OUR{' '}
                    <span className="underline decoration-2 underline-offset-4">
                      NEWS HERE
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-8">
                    {item.description}
                  </p>
                  <button className="btn-outline hover:bg-black hover:text-white">
                    VIEW ALL NEWS
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentGrid;