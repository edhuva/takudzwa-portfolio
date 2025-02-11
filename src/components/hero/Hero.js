import React from "react";  
import mx_infinite_logo from '../../img/mx_infinite_logo.png';

const Hero = () => {
  return (
    <section 
      className="relative mt-6 min-h-screen flex flex-col-reverse md:flex-row items-stretch bg-blue-200"
      id="home"
    >
      {/* Left Side - Logo */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full lg:w-1/2 h-auto flex justify-center">
          <img src={mx_infinite_logo} alt='Hero' className='w-full h-auto rounded-lg' /> 
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div 
        className="w-full md:w-1/2 h-full min-h-[50vh] md:min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://new.express.adobe.com/webpage/KwSoJPcuxET0M/resources/b8c86276-ce1e-4c8d-8167-9781d77a6c56?asset_id=b8c86276-ce1e-4c8d-8167-9781d77a6c56&image_assets=false&size=1024')",
          backgroundSize: "cover"
        }}
      ></div>
    </section> 
  );
};

export default Hero;
