import React from 'react';

const HomePage3 = () => {
  return (
    <section className="bg-[#D6932C] h-screen w-full flex items-center justify-center text-white p-8">
      <div className="flex flex-col md:flex-row items-center justify-center h-full w-full max-w-6xl mx-auto">
        {/* Content */}
        <div className="text-left md:text-left md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Accelerate Your Business
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-md md:mx-0">
            Adapt to digital transformation to meet the evolving market
          </p>
          <button className="px-6 sm:px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-homepage-3 transition-colors">
            Explore
          </button>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/lejhro-home-page3.png" 
            alt="Business Acceleration" 
            className="w-full max-w-xs md:max-w-none md:w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage3;