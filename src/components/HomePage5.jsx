import React from 'react';

const HomePage5 = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-white text-gray-800 p-8">
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full flex items-center justify-center mb-6 md:mb-8">
        <img src="/logo512.png" alt="" className="w-3/4 h-3/4 object-contain" />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 md:mb-4">
        Our Purpose
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center max-w-md mb-6 md:mb-8">
        To provide innovative solutions through change
      </p>
      <button className="px-6 sm:px-8 py-3 border border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
        Read More
      </button>
    </section>
  );
};

export default HomePage5;