import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import VideoPlay from './VideoPlay';
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'
import GenerateBreadCumb from '../breadcumb/GenerateBreadCumb';

const VideosCategory = ({ onHomePage, title, category }) => {
  return (
    <section className={`flex flex-col   min-h-screen px-auto md:px-24 py-28 bg-black bg-opacity-80 ${onHomePage ? 'mt-96 mb-96' : 'mt-10'}`} id ="service">
        <GenerateBreadCumb />
        
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}} 
      className={`md:mx-auto justify-center mx-auto mb-12 border-b-8 border-blue-500 rounded block ${onHomePage ? 'border-t-4' : ''}`}>
          <h2 className='text-4xl md:text-5xl mb-3 text-white font-bold'>{title}</h2>
      </motion.div>
      <div className='max-w-sm justify-center mx-auto text-6xl text-center text-blue-300 mb-10'>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
      </div>
        <VideoPlay onHomePage={onHomePage} category={category} />
    </section>
  )

}

export default VideosCategory
