import React from "react";  
import { Link } from "react-router-dom";
import vidEdt_bg1 from '../../img/vidEdt_bg3.webp'

const Hero = () => {
  return (
    <section 
      className="relative mt-10 md:mt-6 h-full flex justify center bg-black"
      id="home"
    >
      {/* Left Side - Logo */}
      <div 
        className="w-full h-full min-h-[50vh] md:min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ 
          backgroundImage: `url(${vidEdt_bg1})`,
          backgroundSize: "cover"
        }}
      >
      
      <div className="lg:w-1/2 text-center mx-4 py-5  px-4 mt-14 md:py-20 mb-8 md:mb-0 text-white bg-black bg-opacity-80 rounded-2xl shadow-blue-100 shadow-md ">
          <h2 className="text-4xl font-bold">Welcome to My Video Editing Portfolio.</h2>
          <p className="mt-4">Transforming visuals, crafting stories, and delivering excellence in video editing.</p>
          <Link to="service" className="mt-6 inline-block bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full text-white  shadow-blue-700 shadow-md">Explore My Work</Link>
        </div>
      </div>
    </section> 
  );
};

export default Hero;