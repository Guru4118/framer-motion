import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/pngwing.com.png"; // Make sure your PNG watch image has a transparent background
import AnimatedLineGraph from "./AnimatedLineGraph";
import hero1 from "../assets/pngwing.com1.png"; // Make sure your PNG watch image has a transparent background

import hero2 from "../assets/pngwing.com2.png"; // Make sure your PNG watch image has a transparent background

import hero3 from "../assets/pngwing.com3.png"; // Make sure your PNG watch image has a transparent background
import hero4 from "../assets/pngwing.com4.png";
import Tech from "./Tech";

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
const dotVariants = {
        jump: {
            y: 40,x:-20,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        }};
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
     initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
  style={{
    boxShadow: '-15px 14px 12px rgba(225, 46, 0, 0.3)', // custom blue shadow
    borderRadius: '1rem'
  }}
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
     initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
  style={{
    boxShadow: '0px 15px 12px rgba(255, 45, 0, 0.3)', // custom blue shadow
    borderRadius: '1rem'
  }}
    
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg row-span-2"
  >
    <h2 className="text-xl font-semibold">Signature Collection</h2>

    <motion.div className="flex justify-center items-center gap-2 mt-4">
  {[1, 2, 3].map((i) => (
    <motion.div
      key={i}
      className="bg-red-500 w-4 h-4 rounded-full"
      variants={dotVariants}
      animate="jump"
    />

  ))}
  
</motion.div>
<p className="text-gray-300 text-base pt-20 leading-relaxed">
    Discover our Signature Collection – where timeless craftsmanship meets modern luxury.
    Each piece is meticulously designed for those who appreciate sophistication, precision,
    and enduring style. Elevate your presence with a watch that defines elegance.
  </p>

  <motion.div className=" bg-gradient-to-r from-gray-500  to-red-500 w-full h-20 rounded-2xl mt-6"
  initial={{
    opacity:0
  }}
  animate={{
    opacity:1,
   

  }}
  whileHover={{
    filter: "blur(20px)"
  }}
  >

  </motion.div>
  </motion.div>

  {/* Tile 3 */}
  <motion.div
   whileHover={{ scale: 1.02 }}
     initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
  style={{
    boxShadow: '15px 15px 12px rgba(225, 46,0, 0.3)', // custom blue shadow
    borderRadius: '1rem'
  }}
   
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg"
  >
    <h2 className="text-xl font-semibold mb-2">Limited Editions</h2>
    <p className="text-sm text-gray-300">Own a piece of exclusivity with our limited edition releases.</p>

    <motion.div className="w-30 h-30 bg-white rounded-l-full opacity-80 mt-2 ml-51.5 justify-center items-center ">
        <motion.div className=" p-5 pl-3.5 text-red-500 font-extrabold text-2xl">
            <p>BE <br /> <span>UNiQue!</span></p>
            
        </motion.div> 

    </motion.div>
  </motion.div>

  {/* Tile 4 */}
<motion.div
    
     whileHover={{ scale: 1.02 }}
     initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
  style={{
    boxShadow: '-15px 15px 22px rgba(225, 45, 0, 0.3)', // custom blue shadow
    borderRadius: '1rem'
  }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg row-span-2"
  >
    <h2 className="text-xl font-semibold">Modern Craftsmanship</h2>
    <motion.div className="border-2 border-red-500 rounded-t-2xl mt-7  ml-10 border-b-0 border-r-0 w-71.5 h-98  ">
        <motion.div
        initial={{
            scale:0
        }}
        animate={{
            scale:1,
        }}
        whileHover={{
            background:"cyan"
        }}
        

         className="w-16 h-16 bg-white m-3 rounded-full flex justify-center items-center">
            <motion.div
            whileHover={{
                background:"white"
            }}
             className=" w-5 h-5 bg-black rounded-full "></motion.div>
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-3 gap- max-w-5xl mx-auto mt-10 p-4">
  {/* Row 1 */}
  <div className="bg-red-500 col-span-1 p-4 text-white"></div>
  <div className="bg-white col-span-1 p-4 text-white"></div>
  <div className="bg-white col-span-1 p-4 text-white"></div>

  {/* Row 2 */}
  <div className="bg-red-500 col-span-1 p-4 text-white"></div>
  <div className="bg-gradient-to-tr from-red-500  to-red-500 col-span-1 p-4 text-white"></div>
  <div className="bg-white col-span-1 p-4 text-white"></div>

  {/* Row 3 */}
  <div className="bg-red-500 col-span-1 p-4 text-white"></div>
  <div className="bg-red-500 col-span-1 p-4 text-white"></div>
  <div className="bg-white col-span-1 p-4 text-white"></div>
</div>
<h1 className="p-5">Modern watch craftsmanship fuses timeless artistry with precision engineering to create iconic, enduring timepieces.</h1>
    </motion.div>
    

</motion.div>

  {/* Tile 5 */}
  <motion.div
  
     initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
  style={{
    boxShadow: '15px 14px 12px rgba(225, 46, 0, 0.3)', // custom blue shadow
    borderRadius: '1rem'
  }}
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg row-span-2"
  >
    <h2 className="text-xl font-semibold mb-2">Global Warranty</h2>
    <p className="text-sm text-gray-300">Enjoy peace of mind with our international warranty support.</p>
    <motion.div
    initial={{scale:1}}
    animate={{rotate:140}}
     className="bg-white w-60  h-40 mt-20 rounded-2xl justify-center font-bold">
        <motion.p
        animate={{rotate:-90}} 
        className="text-black">Global Warranty <br/> <span className="text-red-500">Upto 2 YEAR</span> </motion.p>
        

    </motion.div>
    <motion.div
    initial={{scale:1}}
    animate={{rotate:10}}
     className="bg-red-500 w-full  h-40 mt- rounded-2xl">
        

    </motion.div>
  </motion.div>

  {/* Tile 6 */}
  <motion.div
   
     initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
  style={{
    boxShadow: '0px 15px 12px rgba(255, 45, 0, 0.3)', // custom blue shadow
    borderRadius: '1rem'
  }}
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-0 shadow-lg"
  >
    <img src={hero4} alt="Watch" className="relative w-full h-70 object-contain mb-2" />
    <motion.div className="absolute  inset-0 flex  ml-32  mt-20 pt-0  text-xs flex-col  ">
        <nav className=" " >
           
            <a href="" className="font-bold" >settings</a>
        </nav>
        <motion.div 

        className="pt-1 flex flex-col">
            <a href="#"className="bg-red-600 rounded-full pl-2 w-20 hover:bg-white hover:text-black">Brightness</a>
            <a href="#"className="bg-red-600 rounded-full pl-2 w-20 mt-2 hover:bg-white hover:text-black">About</a>
            <a href="#"className="bg-red-600 rounded-full pl-2 w-20 mt-2 hover:bg-white hover:text-black">Storage</a>
            <a href="#"className="bg-red-600 rounded-full pl-2 w-20 mt-2 hover:bg-white hover:text-black ">Network</a>
            


        </motion.div>
    </motion.div>
    
    
  </motion.div>
</motion.div>





{/* sales chart */}
<motion.div className=" min-h-s w-full mt-30 flex justify-center items-center " >
    <AnimatedLineGraph/>
</motion.div>

{/* TECH USED */}

<motion.div>
  <Tech/>
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
