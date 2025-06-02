import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/variants';
import GenerateBreadCumb from '../breadcumb/GenerateBreadCumb';

const About = ({ onHomePage }) => {

  return (
    <section className={`flex flex-col justify-center px-auto md:px-24 py-24 bg-black bg-opacity-80 ${onHomePage ? 'mt-96 mb-96' : 'mt-10'}`} id="about">
      {/* Breadcrumb Navigation */}
      <div className='px-6 md:px-0'>
        {!onHomePage && <GenerateBreadCumb />}
      </div>

      <motion.div
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className={`md:mx-auto justify-center mx-auto mb-12 border-b-8 border-blue-500 rounded block ${onHomePage ? 'border-t-4' : ''}`}
      >
        <h2 className='text-5xl mb-3 text-white font-bold'>About Me</h2>
      </motion.div>

      <div className='text-center text-xl max-w-3xl min-h-screen leading-9 mx-auto'>
        <p className='mb-12 px-2 md:px-0 text-white leading-10'>
          Hi, I'm Takudzwa Masawi, a passionate and creative video editor with over 5 years of experience. My journey into video editing began in high school, where I developed an obsession with storytelling through visuals. Since then, I've worked on numerous projects, including YouTube videos, wedding videos, VFX, and much more. I specialize in color grading, VFX, and sound editing, ensuring that each project I work on meets the highest standards of excellence. My goal is to help clients bring their ideas to life with stunning visuals and seamless storytelling.
        </p>
      </div>
    </section>
  );
};

export default About;