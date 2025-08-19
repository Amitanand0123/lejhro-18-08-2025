import React from 'react';

const sectionTitles = {
  home1: 'Driving Innovation Through Change',
  home2: 'Empowering The Zoomers',
  home3: 'Accelerate Your Business',
  home4: 'Build Your Future Workforce',
  home5: 'Our Purpose',
};

const LeftSidebar = ({ activeSection }) => {
  return (
    <aside className={`hidden md:flex fixed top-0 left-0 w-60 h-screen bg-transparent z-40 pointer-events-none transform duration-500 ease-in-out ${activeSection==='footer' ? '-translate-y-96':'translate-y-0'}`}>
      <div className="flex flex-col justify-center items-start h-full w-full pl-8">
        <div className="flex flex-col justify-center h-full space-y-16 pointer-events-auto">
          {Object.keys(sectionTitles).map((key, index) => (
            <div key={key} className="relative">
              {/* Horizontal line */}
              <div 
                className={`transition-all duration-500 mb-3 ${
                  activeSection === 'home5' || activeSection === 'footer' ? 'bg-black' : 'bg-white'
                } ${
                  activeSection === key 
                    ? 'w-24 h-1'
                    : 'w-16 h-0.5'
                }`}
              ></div>
              
              {/* Section title - only visible when active */}
              <a href={`#${key}`} className="block">
                <div className={`transition-all duration-500 ${
                  activeSection === key 
                    ? `${activeSection === 'home5' || activeSection === 'footer' ? 'text-black' : 'text-white'} text-sm font-medium opacity-100 transform translate-y-0` 
                    : `${activeSection === 'home5' || activeSection === 'footer' ? 'text-black' : 'text-white'} text-sm font-medium opacity-0 transform -translate-y-2 pointer-events-none`
                }`}>
                  <div className="leading-tight max-w-40">
                    {sectionTitles[key]}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;