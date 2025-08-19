import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';
import HomePage1 from './components/HomePage1';
import HomePage2 from './components/HomePage2';
import HomePage3 from './components/HomePage3';
import HomePage4 from './components/HomePage4';
import HomePage5 from './components/HomePage5';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home1');

  const sectionRefs = {
    home1: useRef(null),
    home2: useRef(null),
    home3: useRef(null),
    home4: useRef(null),
    home5: useRef(null),
    footer: useRef(null)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px' // Better triggering
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="bg-gray-100 font-sans">
      <Navbar activeSection={activeSection} />
      <LeftSidebar activeSection={activeSection} />
      <main className="w-full">
        <div ref={sectionRefs.home1} id="home1">
          <HomePage1 />
        </div>
        <div ref={sectionRefs.home2} id="home2">
          <HomePage2 />
        </div>
        <div ref={sectionRefs.home3} id="home3">
          <HomePage3 />
        </div>
        <div ref={sectionRefs.home4} id="home4">
          <HomePage4 />
        </div>
        <div ref={sectionRefs.home5} id="home5">
          <HomePage5 />
        </div>
      </main>
      <Footer ref={sectionRefs.footer} id="footer" />
    </div>
  );
}

export default App;