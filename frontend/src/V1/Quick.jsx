import React from 'react';
import { motion } from 'framer-motion';
import hero3 from "../assets/pngwing.com3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Quick() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 md:px-20 mt-14 md:mt-0 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6  md:ml-30"
        >
          <motion.h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
            Elevate Your Style <br /> With Our Signature Watches
          </motion.h1>

          <p className="text-lg text-gray-300">
            Discover timeless elegance combined with cutting-edge design. Shop now and redefine how you track time.
          </p>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 0, 0, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-bold text-white"
            aria-label="Shop now for premium watches"
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <div className="flex justify-center">
          <motion.img
            src={hero3}
            alt="Premium Watch"
            className="w-[220px] md:w-[400px] md:ml-20"
            data-Aos="zoom-in"
            
            animate={{ opacity: 1, scale: 1,
              filter:
                "drop-shadow(0 0 15px rgba(255, 226, 0, 0.9)) drop-shadow(0 0 40px rgba(255, 0, 0, 0.6))",
       
             }}
            whileHover={{
              scale: 1.05,
              rotate:360,
              filter:
                "drop-shadow(0 0 15px rgba(255, 226, 0, 0.9)) drop-shadow(0 0 40px rgba(255, 0, 0, 0.6))",
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              
            }}
          />
        </div>

      </motion.div>
    </div>
  );
}

export default Quick;
