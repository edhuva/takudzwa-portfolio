import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import UploadVideo from "./UploadVideo";
import VideoList from "./VideoList";

const UserDashBoard = ({ onHomePage }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center min-h-screen px-4 md:px-24 py-16 bg-black bg-opacity-90 text-white ${
        onHomePage ? "mt-0" : "mt-10"
      }`}
      id="dashboard"
    >
      <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className={`md:mx-auto justify-center mx-auto mt-4 mb-12 border-b-8 border-blue-500 rounded ${
            onHomePage ? "border-t-4" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl mb-3 text-white font-bold text-center">
           Video Portfolio
          </h2>
      </motion.div>

      {/* Responsive Flexbox: Column on small screens, Row on md+ screens */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Upload Video */}
        <div className="w-full md:w-1/3 ">
          <UploadVideo />
        </div>

        {/* Video List */}
        <div className="w-full md:w-2/3">
          <VideoList onHomePage={onHomePage} onExplore={true} />
        </div>
      </div>
    </section>
  );
};

export default UserDashBoard;