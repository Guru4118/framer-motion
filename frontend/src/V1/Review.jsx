import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function Review() {
  return (
    <div className="relative min-h-screen bg-gray-200 overflow-hidden">
      {/* Top-left black corner */}
      <div className="absolute top-0 left-0 w-56 h-10 bg-black "></div>

      {/* Top-right black corner */}

      <motion.div
        animate={{}}
        className="absolute top-0 right-0 w-56 h-10 bg-black rounded-bl"
      ></motion.div>

      {/* Your content here */}

<div

 className="mt-8 flex flex-col justify-center items-center pl-2 md:pl-20 md:pt-20 m-4 max-w-3xl "
  dat-aos="zoom-in">
        <h3 className="font-extrabold  flex items-start justify-start pr-140 pb-5">
          {" "}
          
        </h3>

        <p className="md:text-xl font-medium ">
        Experience the future of timekeeping with our all-in-one smartwatch suite. Whether you're tracking fitness, managing your schedule, or elevating your style — our watch has everything you need. Designed for performance, built for elegance.</p>
      </div>



      {/*  */}
      

     <div className="grid md:grid-cols-3 md:grid-rows-3 max-w-6xl mx-auto p-4 gap-3 text-gray-800 mt-20 mb-30">
  {/* Tall left white tile - Main Product Overview */}
  <motion.div className="bg-white rounded-2xl row-span-2 col-span-1 border- p-6  shadow-2xl "
  data-aos="zoom-in"
  >
    <h2 className="text-2xl font-bold mb-2 ">Smartwatch Pro X</h2>
    <p className="font-semibold leading-relaxed">
      Meet the next generation of smartwatches designed for dynamic lifestyles. 
      The Smartwatch Pro X merges cutting-edge technology with a minimalist aesthetic — offering the perfect balance of functionality and elegance. Whether you're in the gym, boardroom, or out exploring, this watch adapts to your world effortlessly.
    </p>
  </motion.div>

  {/* Top-middle - Display Feature */}
  <motion.div className="bg-gray-200 rounded-xl row-span-1 border-[0.5px] col-span-1 p-4 shadow"
  data-aos="zoom-out"
  >
    <h3 className="font-bold text-lg mb-1">Stunning AMOLED Display</h3>
    <p className=" leading-relaxed">
      Enjoy a 1.43" ultra-clear AMOLED screen with a 466x466 resolution. With an Always-On mode and adaptive brightness, visibility is flawless — day or night. The durable Gorilla Glass ensures scratch resistance, while the edge-to-edge display offers an immersive viewing experience.
    </p>
  </motion.div>

  {/* Top-right - Battery Life */}
  <motion.div className="bg-gray-200 rounded-xl row-span-1 border-1 col-span-1 p-4 shadow"
  data-aos="zoom-out">
    <h3 className="font-bold text-lg mb-1">Extended Battery Life</h3>
    <p className=" leading-relaxed">
      Stay unplugged longer. The 350mAh battery powers up to 10 days of usage on a single charge. Includes a 2-hour quick charge feature and power-saving mode — ideal for travel, workouts, and daily use without worrying about low battery.
    </p>
  </motion.div>

  {/* Middle-middle - Health Sensors */}
  <motion.div className="bg-gray-200 border-1 rounded-xl row-span-1 col-span-1 p-4 shadow"
  data-aos="zoom-in">
    <h3 className="font-bold text-lg mb-1">24/7 Health Monitoring</h3>
    <p className=" leading-relaxed">
      Equipped with advanced sensors for real-time heart rate tracking, SpO2 monitoring, sleep stages analysis, and stress level alerts. The health dashboard helps you stay informed and proactive about your wellness goals.
    </p>
  </motion.div>

  {/* Middle-right - Fitness and Sports Tracking */}
  <motion.div className="bg-violet-500 text-white border-1 rounded-xl row-span-2 col-span-1 p-6 shadow-2xl"
  data-aos="zoom-out">
    <h3 className="font-bold text-lg mb-2">100+ Sports Modes & GPS</h3>
    <p className="leading-relaxed">
      From running and cycling to HIIT and yoga — track your performance with precision. Built-in GPS provides route tracking without your phone, while real-time stats help optimize your workouts. Automatic activity detection makes tracking effortless.
    </p>
  </motion.div>

  {/* Bottom-left - Connectivity & Smart Features */}
  <motion.div className="bg-gray-200 rounded-xl row-span-1 col-span-1 p-4 border-1 shadow"
  data-aos="zoom-in">
    <h3 className="font-bold text-lg mb-1">Smart Assistant on Your Wrist</h3>
    <p className=" leading-relaxed">
      Get notifications, control music, accept/reject calls via Bluetooth, and even access voice assistant support (Google/Siri). Seamless smartphone integration keeps you in control without breaking focus.
    </p>
  </motion.div>

  {/* Bottom-middle - Build Quality */}
  <motion.div className="bg-gray-200 rounded-xl row-span-1 border-1 col-span-1 p-4 shadow"
  data-aos="zoom-out">
    <h3 className="font-bold text-lg mb-1">Crafted for Everyday Durability</h3>
    <p className="leading-relaxed">
      Designed using aerospace-grade aluminum alloy with a matte finish, complemented by a comfortable silicone strap. The 5ATM water resistance rating makes it swim-proof and weather-ready for all your adventures.
    </p>
  </motion.div>
</div>

     
      

    </div>
  );
}

export default Review;
