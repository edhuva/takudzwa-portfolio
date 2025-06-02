import React, { useEffect, useState } from 'react'; 
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import vidEdt_bg1 from '../img/vidEdt_bg1.webp';
import vidEdt_bg2 from '../img/vidEdt_bg2.webp';
import BackToTopButton  from '../components/backToTop/BackToTopButton'

const backgrounds = [
  `url(${vidEdt_bg1})`,
  `url(${vidEdt_bg2})`,
];

const Layout = () => {
  const [activeBg, setActiveBg] = useState(backgrounds[0]);
  // const heroRef = useRef(null);
  // const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // const heroHeight = heroRef.current?.offsetHeight || 0;
      const heroHeight = 700 || 0;
      // const aboutHeight = aboutRef.current?.offsetHeight || 0;
      const scrollY = window.scrollY;

      // if (scrollY < heroHeight + aboutHeight) {
        if (scrollY < heroHeight) {
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
        className="fixed top-0 left-0 w-full h-full bg-cover bg-black bg-center -z-10 transition-all duration-700"
        style={{ backgroundImage: activeBg }}
      ></div>

      {/* Foreground Content (Scrollable) */}
      <div className="relative z-10 w-full min-h-screen overflow-y-auto">
        <Outlet />
      </div>
      <BackToTopButton />
    </>
  );
};

export default Layout;