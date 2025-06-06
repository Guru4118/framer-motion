import React from "react";
import { easeInOut, motion } from "motion/react"

function V1l() {
  return (
    <div className="h-screen  w-full bg-neutral-900 flex items-center justify-center"
    style={{
        backgroundImage :"radial-gradient(circle at 0.5px 0.5px,rgba(6,182,212,0.2),0px,transparent 0)",
        backgroundSize :"8px 8px",
        backgroundRepeat :"repeat",

            
        }}>
        
        <motion.button
        initial={{rotate:0,}}
        animate={{rotate:360
            
        }}
        transition={{
            duration:1,
            ease:easeInOut
        }}

        whileHover={{
          rotateX:35,
          rotateY:10,
          boxShadow :"0px 20px 50px rgba(8,112,184,0.7)",
          

        }}
         className="relative group text-neutral-500 text-2xl  px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1),inset_0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
        >
            Subscribe
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
                        <span className="absolute opacity-0 group-hover:opacity-100 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-2 blur-md w-3/4 mx-auto"></span>

            </motion.button>
    </div>
  )
}

export default V1l
// <div className="h-screen w-full bg-neutral-900 flex items-center justify-center">
//       <button className="relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1),inset_0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
//         Subscribe
//         <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
//       </button>
//     </div>