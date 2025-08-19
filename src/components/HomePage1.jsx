import React from 'react';

const HomePage1 = () => {
  return (
    <section className="bg-[#2C7FBF] min-h-screen w-full flex items-center justify-center text-white p-8 lg:pl-50">
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between h-full min-h-screen">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl pt-20 md:pt-16 lg:pt-0 z-10 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6">
            Driving Innovation<br />
            Through Change
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 lg:mb-8 opacity-90 max-w-lg lg:mx-0">
            Explore, learn and adapt to change for a sustainable future
          </p>
          <button className="px-6 sm:px-8 py-3 border-2 border-white rounded-lg text-white font-medium hover:bg-white hover:text-[#2C7FBF] transition-all duration-300 transform hover:scale-105">
            Read More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex lg:hidden flex-1 justify-center items-center mt-8 mb-8">
          <div className="relative h-40 sm:h-48">
            <img src="/lejhro-innovation.png" alt="" className="h-full w-auto" />
          </div>
        </div>
        
        <div className="hidden lg:flex flex-1 justify-end items-center">
          <div className="relative h-60">
            <img src="/lejhro-innovation.png" alt="" />
          </div>
        </div>
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default HomePage1;