import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* First Section - About Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Content - About Text */}
          <div className="bg-gray-200 flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg">
              <h2 className="text-4xl font-serif mb-8 text-gray-900 tracking-wide">
                ABOUT US
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base">
                  Welcome to Firebird Café, a student-led culinary business powered by innovation, 
                  creativity, and collaboration at Jack E. Singley Academy.
                </p>
                
                <p className="text-base">
                  Operated by the Culinary Arts program in partnership with staff and faculty, 
                  Firebird Café offers a rotating menu of freshly prepared meals crafted by 
                  culinary students under expert supervision. The café not only serves as a 
                  hands-on learning environment but also as a fully functioning service 
                  experience for students and staff.
                </p>
                
                <p className="text-base">
                  To modernize and streamline this experience, the Firebird Café Web App was 
                  developed—the first student-built, live food ordering and café management 
                  platform of its kind in any U.S. high school culinary program.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Video - Professional Kitchen */}
          <div className="relative overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              {/* Fallback image */}
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Culinary Preparation"
                className="w-full h-full object-cover"
              />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-10" />
          </div>
        </div>
        
        {/* Second Section - Web App Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Image - Upscale Dining Hall */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop')`
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20" />
          </div>
          
          {/* Right Content - Web App Features */}
          <div className="bg-gray-200 flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg">
              <h2 className="text-4xl font-serif mb-8 text-gray-900 tracking-wide">
                INNOVATIVE TECHNOLOGY
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base">
                  This powerful web application allows users to explore our daily-updated menu, 
                  customize orders with dietary filters such as gluten-free and vegetarian options, 
                  and view detailed calorie and nutrition information.
                </p>
                
                <p className="text-base">
                  Students and staff can browse café-related news and events, place secure orders 
                  with student ID integration, and benefit from our backend system built specifically 
                  for culinary staff efficiency.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4 text-gray-900">
                    Key Features:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Daily-updated menu exploration</li>
                    <li>• Order customization with dietary filters</li>
                    <li>• Calorie and nutrition details</li>
                    <li>• Café news and events browsing</li>
                    <li>• Secure ordering with student ID integration</li>
                    <li>• Backend system for culinary staff efficiency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Section - Leadership Team */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Content - Leadership */}
          <div className="bg-gray-200 flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg">
              <h2 className="text-4xl font-serif mb-8 text-gray-900 tracking-wide">
                LEADERSHIP & INNOVATION
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base">
                  In this innovation is Pravin Yadav, the lead developer and founder 
                  driving force behind the app's design, functionality, and backend integration. 
                  Working alongside Brandi Johnson, the visionary principal of Jack E. Singley 
                  Academy, the two have elevated this initiative to become a model for real-world, 
                  cross-disciplinary education.
                </p>
                
                <p className="text-base">
                  Also supported by student developers like Alan Rivera and Pavitr Kunadia and a committed development 
                  team, Firebird Café is a shining example of what happens when students are 
                  empowered to lead, create, and build solutions that leave a lasting impact.
                </p>
                
                <p className="text-base">
                  This collaborative effort represents the future of educational technology, 
                  where students don't just learn about innovation—they create it.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image - Luxury Restaurant Showcase */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop')`
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20" />
          </div>
        </div>

        {/* Fourth Section - Meet the Team */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Image - Team Photo */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop')`
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20" />
          </div>
          
          {/* Right Content - Meet the Team */}
          <div className="bg-gray-200 flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-lg text-center">
              <h2 className="text-4xl font-serif mb-8 text-gray-900 tracking-wide">
                MEET THE TEAM
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-8">
                Our dedicated team of students, faculty, and staff work together to create 
                exceptional dining experiences for our guests, underpinned by a generous dose 
                of humble hospitality and a sense of understated luxury. Read on to learn more 
                about the team behind Firebird Café.
              </p>
              <button className="border border-gray-800 text-gray-800 px-8 py-3 text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-all duration-300">
                MEET THE TEAM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;