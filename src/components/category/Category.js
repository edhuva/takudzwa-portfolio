import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'
import { Link } from 'react-router-dom'
import color_grading_img from '../../img/color_grading_img.jpg'
import vfx_img from '../../img/vfx_img.jpg'
import sfx_img from '../../img/sfx_img.jpg'
import youtube_img from '../../img/youtube_img.jpg'
import wedding_img from '../../img/wedding_img.jpg'
import tiktok_img from '../../img/tiktok_img.jpg'
import instagram_img from '../../img/instagram_img.jpg'

const services = [
  { name: "Color Grading", image: `${color_grading_img}`, link: "/color-grading-videos", description: "Enhance the mood and tone of your videos with expert color grading techniques." },
  { name: "VFX", image: `${vfx_img}`, link: "/vfx-videos", description: "Bring your vision to life with stunning visual effects for any project." },
  { name: "SFX", image: `${sfx_img}`, link: "/sfx-videos", description: "Create immersive experiences with expert sound effects editing." },
  { name: "Wedding Videos", image: `${wedding_img}`, link: "/wedding-videos", description: "Capture your special day with beautifully edited wedding videos." },
  { name: "YouTube Videos", image: `${youtube_img}`, link: "/youtube-videos", description: "Stand out with engaging and dynamic videos for your YouTube channel." },
  { name: "TikTok Videos", image: `${tiktok_img}`, link: "/tiktok-videos", description: "Create viral-worthy content for TikTok with professional editing." },
  { name: "Instagram Videos", image: `${instagram_img}`, link: "/instagram-videos", description: "Showcase your brand with eye-catching Instagram videos." }
];

const Category = ({ onHomePage }) => {
  return (
    <section className={`flex flex-col justify-center min-h-screen px-auto md:px-24 py-24 bg-black bg-opacity-80 ${onHomePage ? 'mt-0' : 'mt-10'}`} id="about">
      <motion.div
        variants={fadeIn("left", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}} 
       className={`md:mx-auto justify-center mx-auto mt-4 mb-12   border-b-8 border-blue-500 rounded ${onHomePage ? 'border-t-4' : ''}`}>
        <h2 className='text-5xl mb-3 text-white font-bold'>Category</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 text-center">
            <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-white">{service.name}</h3>
            <p className="mt-2 text-gray-400">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Category