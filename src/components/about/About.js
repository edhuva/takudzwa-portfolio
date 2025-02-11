import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'

const About = () => {
  return (
    <section className='flex flex-col justify-center min-h-screen px-auto md:px-24 py-24 bg-blue-200' id="about">
      <div className='md:mx-auto justify-center mx-auto mb-12'>
        <h2 className='text-5xl mb-10 header-font'>WELCOME</h2>
        <div className='px-7'>
          <div className='w-25 h-1 bg-white mx-auto'></div>
        </div>
      </div>

      {/* Desktop View */}
      <div className='hidden md:block'>
        <motion.div 
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}} 
          className='flex gap-4 mx-auto justify-center max-w-3xl parag-color text-xl leading-10 p-3'
        >
          <div className='w-6 h-30 bg-white'></div>
          <div className='sub-font-color font-semibold py-1'>
            <p className='text-start uppercase'>
              A multidisciplinary cross-sector collaborative consultancy and advocacy NPC uniting advocacy for Queer+ communities and people with disabilities, finding trusted solutions, backed by 16 years of experience.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className='md:hidden'>
        <div className='flex gap-4 mx-auto justify-center max-w-3xl parag-color text-md leading-7 p-3'>
          <div className='w-6 h-30 bg-white'></div>
          <div className='sub-font-color font-semibold py-1'>
            <p className='text-start uppercase'>
              A multidisciplinary cross-sector collaborative consultancy and advocacy NPC uniting advocacy for Queer+ communities and people with disabilities, finding trusted solutions, backed by 16 years of experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;