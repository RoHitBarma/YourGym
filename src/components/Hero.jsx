import React from "react";
import heroImg from "../assets/images/image2.jpg";
import heroImgsf from "../assets/images/image2-sf.jpg";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-right text-white flex items-center pt-24 pb-12"

      style={{
        backgroundImage: `url(${heroImgsf})`,
        backgroundPosition: "75% center",
      }}
    >

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full leading-tight">

        {/* IMPROVED:
            Reduced width slightly for cleaner readability
        */}
        <div className="max-w-lg">

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // className="text-5xl md:text-6xl font-extrabold leading-tight"
            className="text-5xl md:text-7xl font-extrabold leading-[1.1]"
          >

            TRANSFORM YOUR 
            {/* <br /> */}
            <span className="text-red-500 pl-3">
              BODY
            </span>

          </motion.h1>

          {/* Description */}

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-gray-200 leading-7 text-lg"
          >
            Achieve your fitness goals with expert trainers,
            modern equipment, and a motivating environment.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >

            {/* Primary Button */}
            <button className="bg-red-500 px-7 py-3 rounded-full hover:scale-105 hover:bg-red-600 transition duration-300 shadow-lg">
              <Link to="contact" smooth={true} duration={500}>
                Join Now
              </Link>
            </button>

            {/* Secondary Button */}            
            <button className="border border-white px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition duration-300">
              <Link to="programs" smooth={true} duration={500}>
                Explore Programs
              </Link>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-8 mt-14 md:mt-10 flex-wrap"
          >

            <div>
              <h2 className="text-2xl font-bold text-red-500">
                500+
              </h2>
              <p className="text-gray-300 text-xs">
                Active Members
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-500">
                10+
              </h2>
              <p className="text-gray-300 text-xs">
                Expert Trainers
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-red-500">
                5+
              </h2>
              <p className="text-gray-300 text-xs">
                Years Experience
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;