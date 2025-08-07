import React from 'react';
import Navbar from './components/Navbar';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 font-sans">
      <Navbar />
      <BlogPage />
      <div className="h-3 w-full bg-[#2C7FBF]"></div>
      <Footer />
    </div>
  );
}

export default App;