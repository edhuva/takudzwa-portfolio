import React, { useEffect, useState, useRef } from 'react';  
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Service from '../components/service/Service';
import Footer from '../components/footer/Footer';

const backgrounds = [
  "url('https://new.express.adobe.com/webpage/KwSoJPcuxET0M/resources/7e93aaf8-39a1-4ae6-b1d7-bc9b0e553c60?asset_id=7e93aaf8-39a1-4ae6-b1d7-bc9b0e553c60&image_assets=false&size=2560')",
  "url('https://new.express.adobe.com/webpage/KwSoJPcuxET0M/resources/68c05b02-255c-4615-bdbe-49e8895428c0?asset_id=68c05b02-255c-4615-bdbe-49e8895428c0&image_assets=false&size=2560')"
];

const Layout = () => {
  const [activeBg, setActiveBg] = useState(backgrounds[0]);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const aboutHeight = aboutRef.current?.offsetHeight || 0;
      const scrollY = window.scrollY;

      if (scrollY < heroHeight + aboutHeight) {
        setActiveBg(backgrounds[0]); // First background for Hero & About
      } else {
        setActiveBg(backgrounds[1]); // Second background after About
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      {/* Fixed Background Container */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-cover bg-blue-200 bg-center -z-10 transition-all duration-700"
        style={{ backgroundImage: activeBg }}
      ></div>

      {/* Foreground Content (Scrollable) */}
      <div className="relative z-10 w-full min-h-screen overflow-y-auto">
        {/* Hero Section */}
        <div ref={heroRef}>
          <Hero />
        </div>

        {/* About Section */}
        <div ref={aboutRef}>
          <About />
        </div>

        {/* Main Sections */}
        <Service />
        <Footer />
      </div>
    </>
  );
};

export default Layout;