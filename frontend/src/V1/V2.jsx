import React from "react";
import { motion } from "motion/react";
import hero from "../assets/pngwing.com.png"; // Make sure your PNG watch image has a transparent background

import hero1 from "../assets/pngwing.com1.png"; // Make sure your PNG watch image has a transparent background

import hero2 from "../assets/pngwing.com2.png"; // Make sure your PNG watch image has a transparent background

import hero3 from "../assets/pngwing.com3.png"; // Make sure your PNG watch image has a transparent background

function V2() {
  const linkVariants = {
    initial: {
      scale: 1,
      color: "#ffffff",
    },
    hover: {
      scale: 1.05,
      color: "red",
      transition: { type: "spring", stiffness: 300 },
    },
    tap: {
      scale: 1.2,
      color: "white",
    },
  };

  return (
    <motion.div className="min-h-screen w-full bg-black text-white font-sans overflow-hidden">
      
      {/* NAVIGATION */}
      <motion.nav className="flex flex-row gap-16 justify-center pt-6 mb-8 text-xl font-bold">
        {["Home", "About", "Store Locator"].map((text, index) => (
          <motion.a
            key={index}
            href="#"
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="cursor-pointer"
          >
            {text}
          </motion.a>
        ))}
      </motion.nav>

      {/* HERO SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 pt-6 items-center">
        
        {/* LEFT: WATCH IMAGE */}
        <div className="flex justify-center">
          <motion.img
            src={hero}
            alt="Watch"
            className="w-[320px] md:w-[400px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 ,filter:"none"
            
            }}
            
            whileHover={{
              scale: 1.05,
              rotateX: 15,
              rotateY: 10,
              filter:
                "drop-shadow(0 0 15px rgba(255, 255, 255,0.8)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.8))",
                
            }}
             transition={{
    duration: 0.5,
    ease: "easeInOut",
  }}
          />
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
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
            className="bg-red-600 px-6 py-3 rounded-full font-bold text-white"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>








      {/*beneto  */}



      {/* Professional Bento Layout Section */}
<motion.div className="max-w-6xl mx-auto mt-24 px-6 grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-6">
  
  {/* Tile 1 */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg row-span-1"
  >
    <h2 className="text-xl font-semibold mb-2">Elegant Design</h2>
    <p className="text-sm text-gray-300 pb-5">Our watches are designed with precision to suit your personal style.</p>
    
    <motion.button 
    initial={{
        scale:1
    }}
    animate={{
       
    }}
    whileHover={
        {
            rotateX:20,
            rotateY:20,
             scale:1.2,
            filter:"drop-shadow(0 0 10px rgba(255, 0, 0, 0.9)) drop-shadow(0 0 10px rgba(255, 225, 225, 0.6))"
        }
    }
     className="bg-red-500 px-3 rounded-full pb-2 drop-shadow-white drop-shadow-md "> buy now 
    </motion.button>

  </motion.div>

  {/* Tile 2 */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg row-span-2"
  >
    <img src={hero1} alt="Watch" className="w-full h-48 object-contain mb-4" />
    <h2 className="text-xl font-semibold">Signature Collection</h2>
  </motion.div>

  {/* Tile 3 */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg"
  >
    <h2 className="text-xl font-semibold mb-2">Limited Editions</h2>
    <p className="text-sm text-gray-300">Own a piece of exclusivity with our limited edition releases.</p>
  </motion.div>

  {/* Tile 4 */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg row-span-2"
  >
    <img src={hero2} alt="Watch" className="w-full h-48 object-contain mb-4" />
    <h2 className="text-xl font-semibold">Modern Craftsmanship</h2>
  </motion.div>

  {/* Tile 5 */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg row-span-2"
  >
    <h2 className="text-xl font-semibold mb-2">Global Warranty</h2>
    <p className="text-sm text-gray-300">Enjoy peace of mind with our international warranty support.</p>
  </motion.div>

  {/* Tile 6 */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg"
  >
    <img src={hero3} alt="Watch" className="w-full h-32 object-contain mb-2" />
    <h2 className="text-lg font-semibold">Tech Meets Style</h2>
  </motion.div>
</motion.div>



















{/*  */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 mt-30 ml-20 items-center">

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
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
            className="bg-red-600 px-6 py-3 rounded-full font-bold text-white"
          >
            Shop Now
          </motion.button>
        </motion.div>

        <div className="flex justify-center">
          <motion.img
            src={hero3}
            alt="Watch"
            className="w-[320px] md:w-[400px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 ,filter:"none"}}
            whileHover={{
              scale: 1.05,
              rotateX: 15,
              rotateY: 10,
              filter:
                "drop-shadow(0 0 15px rgba(255, 226, 0, 0.9)) drop-shadow(0 0 40px rgba(255, 0, 0, 0.6))",
                
            }}
             transition={{
    duration: 0.5,
    ease: "easeInOut"
  }}
          />
        </div>



      </motion.div>
    </motion.div>
  );
}

export default V2;
