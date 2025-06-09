import React from "react";
import a from "../assets/airbnb.svg";
import d from "../assets/dash.svg";
import u from "../assets/uikit.svg";
import s from "../assets/sogou.svg";
import f from "../assets/filedotio.svg";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function IconWithRedSpread({ src, alt }) {
  return (
    <motion.div
      className="relative border-white border-2 p-8 bg-transparent rounded-lg overflow-hidden cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: {},
        hover: {},
      }}
    >
      {/* Red spreading background */}
      <motion.div
        className="absolute top-1/2 left-1/2 rounded-full pointer-events-none blur-md"
        style={{ backgroundColor: "red" }}
        variants={{
          rest: { width: 0, height: 0, opacity: 0, x: "-50%", y: "-50%" },
          hover: {
            width: 200,
            height: 200,
            opacity: 1,
            x: "-50%",
            y: "-50%",
            transition: { duration: 2, ease: "easeOut" },
          },
        }}
      />
      {/* Icon */}
      <img
        src={src}
        alt={alt}
        className="w-12 h-12 invert grayscale hover:grayscale-0 transition relative z-10"
      />
    </motion.div>
  );
}

function Tech() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-black px-4 py-12">
      <div className="md:grid  md:grid-cols-2 gap-6 max-w-6xl w-full">
        <motion.div
        data-aos="zoom-in"
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg row-span-1 flex justify-center items-center flex-col"
          style={{
            boxShadow: "-15px 14px 12px rgba(225, 46, 0, 0.3)", // custom red shadow
            borderRadius: "1rem",
          }}
        >
          <p className="text-red-500 font-bold ">Smart Watch</p>
          <p className="font-extrabold text-2xl p-2">
            Seamless SDKs for modern frameworks
          </p>
          <p>
            Clerk keeps developer experience front-and-center by providing
            helpful SDKs for most modern frameworks on web and mobile.
          </p>
          <p className="text-red-500 font-extrabold text-xl pt-2">
            All frameworks
          </p>
          <div className="flex ">
            <motion.div
              className="bg-red-500 w-16 h-16 mt-3 "
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                rotate: 180,
                x: 100,
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="bg-white w-16 h-16 mt-3 "
              initial={{
                scale: 0,
                x: -10,
              }}
              animate={{
                scale: 1,
                rotate: 180,
                x: -100,
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div
        data-aos="zoom-out"
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg row-span-1 flex justify-center items-center flex-col"
          style={{
            boxShadow: "-15px 14px 12px rgba(225, 46, 0, 0.3)", // custom red shadow
            borderRadius: "1rem",
          }}
        >
          <p className="text-red-500 font-bold ">Smart Watch</p>
          <p className="font-extrabold text-2xl p-2">
            Seamless SDKs for modern frameworks
          </p>
          <p>
            Clerk keeps developer experience front-and-center by providing
            helpful SDKs for most modern frameworks on web and mobile.
          </p>
          <p className="text-red-500 font-extrabold text-xl pt-2">
            All frameworks
          </p>
          <div className="grid grid-cols-3 max-w-5xl ">
            <motion.div
              initial={{}}
              animate={{
                rotateX: [10, 20, 30, 40, 50, , 40, 30, 20, 10],
              }}
              transition={{
                repeat: Infinity,
              }}
              className="bg-red-500 w-16 h-16 mt-3 rounded-tr-full mr-90 "
            ></motion.div>
            <motion.div
           
              className="bg-white w-5 h-5 mt-3 rounded-full md:opacity-100 opacity-0 "
              initial={{
                x: -150,
              }}
              animate={{
                scale: 1,
                rotate: 180,
                x: [-150, 290, -150],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              initial={{}}
              animate={{
                rotateX: [10, 20, 30, 40, 50, , 40, 30, 20, 10],
              }}
              transition={{
                repeat: Infinity,
              }}
              className="bg-red-500 w-15 h-15 mt-3 rounded-tl-full ml-10 md:ml-25 p "
            ></motion.div>
          </div>
        </motion.div>

        <motion.div
        data-aos="zoom-out"
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg row-span-1 flex justify-center items-center flex-col"
          style={{
            boxShadow: "-15px 14px 12px rgba(225, 46, 0, 0.3)", // custom red shadow
            borderRadius: "1rem",
          }}
        >
          <motion.div
            animate={{}}
            transition={{
              repeat: Infinity,
              ease: "easeIn",
              duration: 5,
            }}
            className="grid grid-cols-3 gap-6 text-white "
          >
            <IconWithRedSpread src={a} alt="Airbnb" />
            <IconWithRedSpread src={s} alt="Sogou" />
            <IconWithRedSpread src={d} alt="Dash" />
            <IconWithRedSpread src={u} alt="UIKit" />
            <IconWithRedSpread src={f} alt="FileDotIO" />
            <IconWithRedSpread src={a} alt="Airbnb" />
          </motion.div>
        </motion.div>

        <div
        data-aos="zoom-in"
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg gap-4 grid grid-cols-1 md:grid-cols-3"
          style={{
            boxShadow: "-15px 14px 12px rgba(225, 46, 0, 0.3)", // custom red shadow
            borderRadius: "1rem",
          }}
        >
          {/* Water Resistant */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 5, delay: 5, repeat: Infinity }}
            className="bg-red-500 grid grid-rows-2 hover:cursor-pointer text-center p-4 rounded-xl"
          >
            <h2 className="text-xl font-semibold text-white">
              Water Resistant
            </h2>
            <p className="text-white">
              Reliable performance in all weather conditions.
            </p>
          </motion.div>

          {/* Smart Features */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 5, delay: 5, repeat: Infinity }}
            className="bg-blue-50 grid grid-rows-2 hover:cursor-pointer text-center p-4 rounded-xl"
          >
            <h2 className="text-xl font-semibold text-red-500">
              Smart Features
            </h2>
            <p className="text-black">
              Stay connected and track your fitness effortlessly.
            </p>
          </motion.div>

          {/* Elegant Design */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 5, delay: 5, repeat: Infinity }}
            className="bg-red-500 grid grid-rows-2 text-center p-4 rounded-xl"
          >
            <h2 className="text-xl font-semibold text-white">Elegant Design</h2>
            <p className="text-white">
              A sleek, modern look that complements any outfit.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
