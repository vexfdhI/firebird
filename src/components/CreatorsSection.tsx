import React, { useState, useEffect } from 'react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  role: string;
  initials: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  isVisible: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index, isVisible }) => {
  return (
    <div 
      className={`team-member-card bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        minHeight: '280px'
      }}
    >
      {/* Profile Picture - Initials */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold">
          {member.initials}
        </div>
      </div>
      
      {/* Name */}
      <h3 className="text-xl font-serif text-center mb-4 text-gray-900">
        {member.name}
      </h3>
      
      {/* Role Container with Animation */}
      <div className="role-container">
        <div className="role-primary">
          <p className="text-center text-gray-600 font-medium">
            {member.position}
          </p>
        </div>
        <div className="role-secondary">
          <p className="text-center text-gray-600 font-medium">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
};

const CreatorsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const creators: TeamMember[] = [
    {
      id: 'pravin',
      name: 'Pravin Yadav',
      position: 'Founder & Lead Developer',
      role: 'Founder & President',
      initials: 'PY'
    },
    {
      id: 'pavitr',
      name: 'Pavitr Kunadia',
      position: 'Backend Web Developer',
      role: 'Vice-President',
      initials: 'PK'
    },
    {
      id: 'alan',
      name: 'Allan Rivera',
      position: 'Frontend Developer',
      role: 'Project Coordinator',
      initials: 'AR'
    }
  ];

  const contributors: TeamMember[] = [
    {
      id: 'giselle',
      name: 'Giselle Cano',
      position: 'Director of Visual',
      role: 'Public Relations',
      initials: 'GC'
    },
    {
      id: 'lara',
      name: 'Lara Nazar Shattawi',
      position: 'Event Coordinator',
      role: 'Event Coordinator',
      initials: 'LN'
    },
    {
      id: 'ashley',
      name: 'Ashley Benitez',
      position: 'Photographer',
      role: 'Historian',
      initials: 'AB'
    },
    {
      id: 'ali',
      name: 'Ali Muhammed',
      position: 'Task Coordinator',
      role: 'Secretary',
      initials: 'AM'
    },
    {
      id: 'arifin',
      name: 'Arifin Syed',
      position: 'Assisting Coordinator',
      role: 'Treasurer',
      initials: 'AS'
    }
  ];

  const coordinators: TeamMember[] = [
    {
      id: 'vaishali',
      name: 'Vaishali Tajpuria',
      position: 'Faculty Advisor',
      role: 'Club Sponsor',
      initials: 'VT'
    },
    {
      id: 'brandi',
      name: 'Brandi Johnson',
      position: 'Project Coordinator',
      role: 'Scrum Master',
      initials: 'BJ'
    },
    {
      id: 'harleigh',
      name: 'Dr. Harleigh Jones',
      position: 'Project Coordinator',
      role: 'Coordinator',
      initials: 'HJ'
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif mb-6 text-gray-900">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The talented individuals behind Firebird Café's innovation and success
          </p>
        </div>

        {/* Creators Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-12 text-gray-800">
            CREATORS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {creators.map((member, index) => (
              <TeamMemberCard 
                key={member.id}
                member={member}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Contributors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-12 text-gray-800">
            CONTRIBUTORS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {contributors.map((member, index) => (
              <TeamMemberCard 
                key={member.id}
                member={member}
                index={index + creators.length}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Coordinators Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-center mb-12 text-gray-800">
            COORDINATORS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coordinators.map((member, index) => (
              <TeamMemberCard 
                key={member.id}
                member={member}
                index={index + creators.length + contributors.length}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorsSection;