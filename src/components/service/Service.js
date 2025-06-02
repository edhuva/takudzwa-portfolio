import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { Link } from "react-router-dom";
import VideoList from "../../container/VideoList";
import GenerateBreadCumb from "../breadcumb/GenerateBreadCumb";

const services = [
  { name: "Color Grading", link: "/color-grading-videos" },
  { name: "VFX", link: "/vfx-videos" },
  { name: "SFX", link: "/sfx-videos" },
  { name: "Wedding Videos", link: "/wedding-videos" },
  { name: "YouTube Videos", link: "/youtube-videos" },
  { name: "TikTok Videos", link: "/tiktok-videos" },
  { name: "Instagram Videos", link: "/instagram-videos" },
];

const Service = ({ onHomePage }) => {
  return (
    <section
      className={`flex flex-col justify-center min-h-screen px-6 md:px-24 py-24 bg-black bg-opacity-80 ${
        onHomePage ? "mt-0" : "mt-10"
      }`}
      id="service"
    >
      {!onHomePage && <GenerateBreadCumb />}

      <div
        className={`flex flex-col items-center justify-center`}
        id="service"
      >

        {/* Heading */}
        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className={`md:mx-auto justify-center mx-auto mt-4 mb-12 border-b-8 border-blue-500 rounded ${
            onHomePage ? "border-t-4" : ""
          }`}
        >
          <h2 className="text-5xl md:text-5xl mb-3 text-white font-bold text-center">
            Services
          </h2>
        </motion.div>

        {/* Responsive Layout */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
          {/* Services List */}
          <div className="w-full md:w-1/3">
            <ul className="space-y-4 bg-gray-900 p-6 rounded-xl shadow-lg">
              {services.map((service, index) => (
                <li key={index} className="group">
                  <Link
                    to={service.link}
                    className="block w-full text-lg font-semibold text-white bg-gray-800 hover:bg-blue-600 transition-all duration-300 p-4 rounded-lg text-center shadow-md group-hover:scale-105"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Video List */}
          <div className="w-full md:w-2/3">
            <VideoList onHomePage={onHomePage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;